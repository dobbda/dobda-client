import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import { UploadFile } from 'antd/lib/upload/interface';
import React, { useCallback, useEffect, useState } from 'react';
import { Editor, HtmlViewer } from 'src/components/Editor';
import styled from 'styled-components';
import { ProfileCardSet } from './WritePortfolio/ProfileCardSet';
import { PfEditor } from './WritePortfolio/PfEditor';
import { useQueryClient, useQuery } from 'react-query';
import { uploadS3 } from 'src/lib/service/upload-s3';
import { Image } from 'src/types';
import { resizeImage } from 'src/lib/service/resizeImg';
import { Button as CustomButton } from 'src/components/common/@share/Buttons';
type Props = {};
interface Content {
  content?: string;
  images?: Image[];
}
export const MyPortfolio = (props: Props) => {
  const queryClient = useQueryClient();
  const [html, setHtml] = useState('');
  const [contents, setContents] = useState<Content[]>([]);
  const [fileList, setFileList] = useState<UploadFile[]>([
    // {
    //   uid: '1',
    //   name: 'image.png',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
    // {
    //   uid: '2',
    //   name: 'image.png',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
    // {
    //   uid: '3',
    //   name: 'image.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
    // {
    //   uid: '4',
    //   name: 'image.png',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
  ]);
  const { data } = useQuery('profileCardSetData');
  console.log(fileList);
  const [isAdd, setIsAdd] = useState(false);
  useEffect(() => {
    console.log(
      html?.replace(/<(.|\n)*?>/g, '').trim().length,
      fileList.length,
      html?.replace(/<(.|\n)*?>/g, '').trim().length !== 0,
      fileList.length !== 0,
    );
    setIsAdd(html?.replace(/<(.|\n)*?>/g, '').trim().length !== 0 || fileList.length !== 0);
  }, [html, fileList]);
  const addContent = useCallback(async () => {
    if (fileList || html?.replace(/<(.|\n)*?>/g, '').trim().length !== 0) {
      const images = fileList?.map(async (v: UploadFile) => {
        if (v.originFileObj) {
          let resize =
            v.size / 1023 ** 2 > 1 &&
            ((await resizeImage({ file: v.originFileObj, reformat: 'file', width: 1080, height: 1080 })) as File);
          let { url, fileName } = await uploadS3(resize || v.originFileObj);
          return { url, uid: fileName.substring(0, 10), name: fileName } as Image;
        } else {
          return v as Image;
        }
      });
      Promise.all([...images]).then((v) => {
        setContents([...contents, { content: html, images: v }]);
      });
      setHtml('');
      setFileList([]);
    }
  }, [html, contents, fileList]);

  return (
    <>
      <Wrapper>
        <Divider orientation="left">
          <h2>공개 프로필</h2>
        </Divider>
        <ProfileCardSet />
        <ul className="pf-listView">
          {contents.map((v, i: number) => {
            return (
              <li key={i}>
                <div>{v?.images[0]?.url}</div>
                <HtmlViewer content={v.content} />
              </li>
            );
          })}
        </ul>
        <EditorCt>
          <PfEditor setHtml={setHtml} html={html} fileList={fileList} setFileList={setFileList} />
          <Button
            type="primary"
            onClick={addContent}
            css={{ width: '100%', marginTop: '5px', borderRadius: '4px' }}
            disabled={!isAdd}
          >
            추 가
          </Button>
        </EditorCt>
        <br />
        <CustomButton types="primary" $fill onClick={addContent} css={{ width: '100%', borderRadius: '0' }} disabled={!isAdd}>
          {!isAdd ? '수정내용 없음' : '변경내용 저장'}
        </CustomButton>
        <br />
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  position: relative;
  min-height: 99vh;
  padding-bottom: 30px;
  ul {
    margin: 10px 0;
    padding: 0;
  }
`;

const EditorCt = styled.div`
  border-radius: 4px;
  border: solid 1px #bcd4ff;
  padding: 5px;
  background-color: #cadaf8;
`;
