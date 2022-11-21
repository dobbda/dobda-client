import Button from 'antd/lib/button';
import Upload, { RcFile, UploadFile, UploadProps } from 'antd/lib/upload';
import React, { useCallback, useEffect, useState } from 'react';
import { RiImageFill } from 'react-icons/ri';
import styled from 'styled-components';
import { uploadS3 } from 'src/lib/service/upload-s3';
import { resizeImage } from 'src/lib/service/resizeImg';
import { useQueryClient } from 'react-query';
import { useInput } from 'src/hooks';
import { Image } from 'src/types';
import { LoadingIcon } from 'src/icons';

interface Props {}

export const ProfileCardSet = ({}: Props) => {
  //data
  const [bgColor, onChangeBgColor] = useInput('');
  const [titleColor, onChangeTitleColor] = useInput('');
  const [title, onChangeTitle] = useInput('');
  const [bgImg, setImage] = useState<Image>();
  //
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  // handler
  const handleChange = useCallback(async (file: File) => {
    const resizeFile = (await resizeImage({ file: file, reformat: 'file', width: 1080, height: 400 })) as RcFile;
    console.log('resize: ', resizeFile);
    const { url, fileName } = await uploadS3(resizeFile, 'portfolio');
    setImage({ url, name: fileName, uid: fileName.substring(0, 10) });
    setLoading(false);
  }, []);
  const save = useCallback(() => {
    queryClient.setQueryData('profileCardSetData', {
      bgColor,
      titleColor,
      title,
      bgImg,
    });
    console.log('업데이트해쥼', bgColor, titleColor, title, bgImg);
  }, [bgColor, titleColor, title, bgImg]);
  return (
    <CardWrapper titleColor={titleColor} bgColor={bgColor} bgImg={bgImg?.url}>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="card_content">
        <input placeholder="배경색상 (ex #000)" value={bgColor} onChange={onChangeBgColor} />
        <input placeholder="제목 색상" value={titleColor} onChange={onChangeTitleColor} />
        <Upload
          showUploadList={false}
          beforeUpload={handleChange}
          onChange={({ file }) => {
            file.status == 'uploading' ? setLoading(true) : setLoading(false);
          }}
        >
          <button className="bg_upload">
            {loading ? <LoadingIcon /> : <RiImageFill />}
            배경이미지 업로드
          </button>
        </Upload>
        <input placeholder="메인에 들어갈 제목" value={title} onChange={onChangeTitle} css={{ width: '100%' }} />
      </div>
      <button onClick={save}>저장</button>
    </CardWrapper>
  );
};

interface StypeProps {
  bgColor?: string;
  titleColor?: string;
  bgImg?: string;
}
const CardWrapper = styled.div<StypeProps>`
  position: relative;
  width: 100%;
  height: 400px;
  background-image: url(${({ bgImg }) => bgImg && bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : '#bd339a')};
  display: flex;
  flex-direction: column;
  .title {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: ${({ titleColor }) => (titleColor ? titleColor : '#fff')};
    }
  }
  .card_content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    input,
    .bg_upload {
      margin: 10px;
      background-color: #f0f8ff94;
      border: solid 1px #6366691f;
      padding: 5px 10px;
      border-radius: 0.3rem;
    }

    .bg_upload {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    input::placeholder {
      color: #5c1263ce;
    }
  }
`;
