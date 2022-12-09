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
  data?: Portfolio;
}

const ProfileCardSet = ({ data }: Props) => {
  //data
  const { auth, refetch } = useAuth();
  const [bgColor, setBgColor] = useState<string>(data?.card?.bgColor || '#bd339a');
  const [titleColor, setTitleColor] = useState<string>(data?.card?.titleColor || '#ffffff');
  const [title, onChangeTitle] = useInput<string>(
    (data?.card?.title && data?.card?.title) || '카드 이미지를 추가하거나 색상을 변경할수 있습니다. ',
  );
  const [bgImg, setImage] = useState<Image>(data?.card?.bgImg);
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
  useEffect(() => {
    queryClient.setQueryData('profileCardSetData', {
      bgColor: bgColor || data?.card.bgColor,
      titleColor: titleColor || data?.card.titleColor,
      title: title || data?.card?.title,
      bgImg: bgImg || data?.card?.bgImg,
    });
  }, [bgColor, titleColor, title, bgImg]);

  return (
    <CardWrapper titleColor={titleColor} bgColor={bgColor} bgImg={bgImg?.url} isImg={isImg}>
      <div className="title">
        <h1 css={{ textAlign: 'center' }}>{title || data?.card?.title}</h1>
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
    </CardWrapper>
  );
};

export default ProfileCardSet;
