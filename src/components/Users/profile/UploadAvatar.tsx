import Resizer from 'react-image-file-resizer';

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Avatar, message, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FcUpload } from 'react-icons/fc';
import { AiOutlineUpload } from 'react-icons/ai';
import { uploadS3 } from 'src/lib/service/upload-s3';

interface Props {
  avatar: string;
  setAvatar: React.Dispatch<React.SetStateAction<string>>;
}
const UploadAvatar = ({ avatar, setAvatar }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleChange: UploadProps['onChange'] = async (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      if (info.file.size > 2500) {
        const reSizeData = (await resizeImage(info.file.originFileObj)) as File;
        const imageUrl = await uploadS3(reSizeData, 'avatar');
        setLoading(false);
        setAvatar(imageUrl);
      } else {
        const imageUrl = await uploadS3(info.file.originFileObj as RcFile, 'avatar');
        setLoading(false);
        setAvatar(imageUrl);
      }
    }
  };

  return (
    <UploadS name="avatar" listType="picture-card" className="avatar-uploader" showUploadList={false} onChange={handleChange}>
      <Avatar size={50} src={avatar} alt="avatar" />
      <span className="upload-btn">{loading ? <LoadingOutlined size={21} /> : <AiOutlineUpload size={21} />}</span>
    </UploadS>
  );
};

export default UploadAvatar;

const resizeImage = (file: File) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      50,
      50,
      'png',
      100,
      0,
      (url) => {
        resolve(url);
      },
      'file',
    );
  });

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const dataURLtoFile = (dataurl: string, fileName: string) => {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = Buffer.from(arr[1], 'base64').toString(),
    // bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
};

const UploadS = styled(Upload)`
  height: 56px;
  width: fit-content;
  display: inline;
  margin-right: 20px;
  .ant-upload.ant-upload-select-picture-card {
    background-color: #fff;
  }
  .ant-upload.ant-upload-select-picture-card {
    width: auto;
    height: auto;
    margin: 0;
  }
  .upload-btn {
    padding: 3px 10px;
    margin: 0 10px;
  }
`;
