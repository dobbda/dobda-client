import { UploadFile } from 'antd/lib/upload/interface';
import React from 'react';
import { Editor } from 'src/components/Editor';
import { Image } from 'src/types';
import { UploadSlider } from './UploadSlider';

interface Props {
  html: string;
  setHtml: React.Dispatch<React.SetStateAction<string>>;
  fileList: UploadFile<Image>[];
  setFileList: React.Dispatch<React.SetStateAction<UploadFile<Image>[]>>;
}

export const PfEditor = ({ html, setHtml, fileList, setFileList }: Props) => {
  return (
    <div>
      {' '}
      <Editor setHtml={setHtml} html={html} />
      <UploadSlider fileList={fileList} setFileList={setFileList} />
    </div>
  );
};

export default PfEditor;
