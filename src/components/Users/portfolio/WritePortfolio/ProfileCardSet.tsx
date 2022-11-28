import 'antd/dist/antd.css';
import Button from 'antd/lib/button';
import Upload, { RcFile, UploadFile, UploadProps } from 'antd/lib/upload';
import React, { useCallback, useEffect, useState } from 'react';
import { RiImageFill } from 'react-icons/ri';
import { uploadS3 } from 'src/lib/service/upload-s3';
import { resizeImage } from 'src/lib/service/resizeImg';
import { useQueryClient } from 'react-query';
import { keys, useAuth, useInput } from 'src/hooks';
import { Image, Portfolio } from 'src/types';
import { LoadingIcon } from 'src/icons';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { CardWrapper, Flex, Color } from './style';
import { Colorpicker } from './Colorpicker';
interface Props {
  data: Portfolio;
}

const ProfileCardSet = ({ data }: Props) => {
  //data
  const { auth, refetch } = useAuth();
  const { card } = data;
  const [bgColor, setBgColor] = useState<string>(card?.bgColor);
  const [titleColor, setTitleColor] = useState<string>(card?.titleColor);
  const [title, onChangeTitle] = useInput<string>(card?.title && card?.title);
  const [bgImg, setImage] = useState<Image>(card?.bgImg);
  const [isImg, setIsImg] = useState<boolean>(true);
  //
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  // handler
  const handleChange = useCallback(async (file: File) => {
    const resizeFile = (await resizeImage({ file: file, reformat: 'file', width: 1080, height: 400 })) as RcFile;
    const { url, fileName } = await uploadS3(resizeFile, 'portfolio');
    setImage({ url, name: fileName, uid: fileName.substring(0, 10) });
    setLoading(false);
  }, []);
  const save = useCallback(() => {
    queryClient.setQueryData('profileCardSetData', {
      bgColor: bgColor || card.bgColor,
      titleColor: titleColor || card.titleColor,
      title: title || card.title,
      bgImg: bgImg || card.bgImg,
    });
  }, [bgColor, titleColor, title, bgImg]);

  return (
    <CardWrapper titleColor={titleColor} bgColor={bgColor} bgImg={bgImg?.url} isImg={isImg}>
      <div className="title">
        <h1 css={{ textAlign: 'center' }}>{title || card?.title}</h1>
      </div>
      <div className="card_content">
        <Flex>
          <div className="bg_upload">
            <Checkbox defaultChecked={isImg} onChange={(e) => setIsImg(e.target.checked)} />
            <Upload
              showUploadList={false}
              beforeUpload={handleChange}
              onChange={({ file }) => {
                file.status == 'uploading' ? setLoading(true) : setLoading(false);
              }}
            >
              <button>
                {loading ? <LoadingIcon /> : <RiImageFill />}
                배경이미지 업로드
              </button>
            </Upload>
          </div>
          <Color>
            <span>배경색:</span>
            <Colorpicker color={bgColor} setColor={setBgColor} />
          </Color>
        </Flex>
        <Flex>
          <input placeholder="메인에 들어갈 제목" value={title} onChange={onChangeTitle} />
          <Color>
            글자색:
            <Colorpicker color={titleColor} setColor={setTitleColor} />
          </Color>
        </Flex>
      </div>
      <button onClick={save} css={{ border: 'solid 1px #809dff54' }}>
        임시저장
      </button>
    </CardWrapper>
  );
};

export default ProfileCardSet;
