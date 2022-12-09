import { UploadFile } from 'antd/lib/upload/interface';
import React from 'react';
import { Editor } from 'src/components/Editor';
import { ImageProp } from 'src/interface';
import { UploadSlider } from './UploadSlider';

interface Props {
  html: string;
  setHtml: React.Dispatch<React.SetStateAction<string>>;
  fileList: UploadFile<ImageProp>[];
  setFileList: React.Dispatch<React.SetStateAction<UploadFile<ImageProp>[]>>;
}

export const PfEditor = ({ html, setHtml, fileList, setFileList }: Props) => {
  return (
    <div>
      {' '}
      <Editor setHtml={setHtml} html={html} height="100px" />
      <UploadSlider fileList={fileList} setFileList={setFileList} />
    </div>
  );
};

export default PfEditor;
