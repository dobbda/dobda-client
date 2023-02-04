import { Avatar } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';
import styled from 'styled-components';
import { uploadS3 } from 'src/lib/service/upload-s3';
import { resizeImage } from 'src/lib/service/resizeImg';
import Upload from 'antd/lib/upload/Upload';
import { AiOutlineUpload, LoadingIcon } from 'src/icons';

interface Props {
  avatar: string;
  setAvatar: React.Dispatch<React.SetStateAction<string>>;
}
const UploadAvatar = ({ avatar, setAvatar }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleChange: UploadProps['onChange'] = async (
    info: UploadChangeParam<UploadFile>,
  ) => {
    console.log('info.file.status:', info.file.status);
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      console.log('info.file.status: done:', info.file.status);

      if (info.file.size > 2500) {
        console.log('info.file.size > 2500', info.file.originFileObj);

        const reSizeData = (await resizeImage({
          file: info.file.originFileObj,
          reformat: 'file',
        })) as File;
        console.log('reSizeData', reSizeData);

        const { url } = await uploadS3(reSizeData, 'avatar');
        console.log('url', url && url);

        setLoading(false);
        setAvatar(url);
      } else {
        const { url } = await uploadS3(
          info.file.originFileObj as RcFile,
          'avatar',
        );
        setLoading(false);
        setAvatar(url);
      }
    }
  };

  return (
    <UploadS
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      onChange={handleChange}
    >
      <Avatar size={50} src={avatar} alt="avatar" />
      <span className="upload-btn">
        {loading ? <LoadingIcon size={21} /> : <AiOutlineUpload size={21} />}
      </span>
    </UploadS>
  );
};

export default UploadAvatar;

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
