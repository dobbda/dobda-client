import 'antd/dist/antd.css';
import Button from 'antd/lib/button';
import Upload, { RcFile, UploadFile, UploadProps } from 'antd/lib/upload';
import React, { useCallback, useEffect, useState } from 'react';
import { RiImageFill } from 'react-icons/ri';
import { uploadS3 } from 'src/lib/service/upload-s3';
import { resizeImage } from 'src/lib/service/resizeImg';
import { useQueryClient } from 'react-query';
import { keys, useAuth, useInput } from 'src/hooks';
import { ImageProp, Portfolio } from 'src/interface';
import { LoadingIcon } from 'src/icons';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { BackgroundImg, Flex, Color } from './style';
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
    (data?.card?.title && data?.card?.title) || ' 이미지를 추가하거나 색상을 변경할수 있어요~ ',
  );
  const [bgImg, setImage] = useState<ImageProp>(data?.card?.bgImg);
  const [isImg, setIsImg] = useState<boolean>(data?.card?.isImg || false);
  //
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  // handler
  const handleChange = useCallback(async (file: File) => {
    const resizeFile = (await resizeImage({ file: file, reformat: 'file', width: 910, height: 400 })) as RcFile;
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
      isImg: isImg,
    });
  }, [bgColor, titleColor, title, bgImg, isImg]);

  return (
    <div>
      <BackgroundImg titleColor={titleColor} bgColor={bgColor} bgImg={bgImg?.url} isImg={isImg}>
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
      </BackgroundImg>
      <div css={{ fontSize: '13px', color: 'darkcyan' }}>이미지를 디자인하여 사용가능합니다..</div>
      <div css={{ fontSize: '13px', color: 'darkcyan' }}>이미지 여러장을 슬라이드로 보여줍니다.</div>
    </div>
  );
};

export default ProfileCardSet;
