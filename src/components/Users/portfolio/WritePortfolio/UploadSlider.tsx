import { PlusOutlined } from '@ant-design/icons';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import Upload from 'antd/lib/upload/Upload';
import React, { useCallback, useEffect, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { AiOutlineUpload, LoadingIcon } from 'src/icons';
import styled from 'styled-components';

interface Props {
  fileList: UploadFile[];
  setFileList: React.Dispatch<React.SetStateAction<UploadFile<any>[]>>;
}
export const UploadSlider = ({ fileList, setFileList }: Props) => {
  const [loading, setLoading] = useState(false);
  const handleChange: UploadProps['onChange'] = useCallback(
    ({ fileList, file }) => {
      setFileList(fileList);
      file.status === 'uploading' ? setLoading(true) : setLoading(false);
      if (file.status == 'removed') {
        setFileList(fileList);
      }
    },
    [fileList],
  );
  const [showImg, setShowImg] = useState(fileList?.length > 0);

  const onRemove = useCallback(
    (file: UploadFile) => {
      if (confirm('삭제시 복구 불가능합니다.')) {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        setFileList(newFileList);
        return false;
      }
    },
    [fileList],
  );

  return (
    <>
      {!showImg ? (
        <ShowBtn onClick={() => setShowImg(true)}>
          <AiOutlineUpload />
          <span>슬라이드 이미지 업로드</span>
          <RiArrowDownSLine size={20} />
        </ShowBtn>
      ) : (
        <UploadS
          listType="picture-card"
          fileList={fileList}
          onChange={handleChange}
          showUploadList={{ showPreviewIcon: false }}
          onRemove={(file) => onRemove(file)}
        >
          {loading ? <LoadingIcon size={21} /> : uploadButton}
        </UploadS>
      )}
      <span css={{ fontSize: '13px', color: 'darkcyan' }}>이미지만 업로드 가능합니다.</span>
    </>
  );
};

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
  </div>
);

const UploadS = styled(Upload)`
  background-color: #fff;
  padding: 8px 8px 0 8px;
  border-radius: 4px;
  overflow-y: hidden;
  margin-top: 10px;
`;

const ShowBtn = styled.div`
  padding: 5px;
  background-color: #fff;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  span {
    color: #929292;
    font-weight: bold;
  }
`;
