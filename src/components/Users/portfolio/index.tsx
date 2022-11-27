import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import { UploadFile } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { Editor, HtmlViewer } from 'src/components/Editor';
// import { ProfileCardSet } from './WritePortfolio/ProfileCardSet';
// import { PfEditor } from './WritePortfolio/PfEditor';
import { useQueryClient, useQuery } from 'react-query';
import { uploadS3 } from 'src/lib/service/upload-s3';
import { CreatePortfolio, Image, Portfolio, PortfolioContent } from 'src/types';
import { resizeImage } from 'src/lib/service/resizeImg';
import { Button as CustomButton } from 'src/components/common/@share/Buttons';
import { user } from 'src/api';
import { keys, useAuth } from 'src/hooks';
import produce from 'immer';
import { message } from 'antd';
import { EditorCt, Wrapper } from './style';
import dynamic from 'next/dynamic';
import { listFileUpload } from './lib/listFileUpload';
const ProfileCardSet = dynamic(() => import('./WritePortfolio/ProfileCardSet'), {
  suspense: true,
});
const AdminViewer = dynamic(() => import('./AdminViewer'));
const PfEditor = dynamic(() => import('./WritePortfolio/PfEditor'));

type Props = {
  data: Portfolio;
};

export const MyPortfolio = ({ data }: Props) => {
  const queryClient = useQueryClient();
  const { auth, refetch } = useAuth();
  const { data: cardData } = useQuery<typeof data.card>('profileCardSetData', { initialData: data.card });
  const [html, setHtml] = useState('');
  const [contents, setContents] = useState<PortfolioContent[]>(data?.content);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const [isAdd, setIsAdd] = useState(false);
  const [isChange, setIsChange] = useState(false);
  useEffect(() => {
    setIsAdd(html?.replace(/<(.|\n)*?>/g, '').trim().length !== 0 || fileList.length !== 0);
  }, [html, fileList, data, contents]);

  const addContent = useCallback(async () => {
    if (fileList || html?.replace(/<(.|\n)*?>/g, '').trim().length !== 0) {
      const images = await listFileUpload(fileList);
      setContents([...contents, { content: html, images: images, key: Math.random().toString(36).slice(2, 11) }]);
      setHtml('');
      setFileList([]);
    }
  }, [html, contents, fileList]);

  const onSubmint = useCallback(async () => {
    let isChecked = JSON.stringify({ ...cardData, ...contents }) == JSON.stringify({ ...data.card, ...data.content });
    if (isChecked) {
      return message.warning('변경된 내용이 없습니다.');
    }

    let res = await user.updatePf({
      public: true,
      card: cardData,
      content: contents,
    } as CreatePortfolio);

    if (res.success) {
      message.success('저장되었습니다.');
      queryClient.setQueriesData(keys.pf(auth.id), (old: Portfolio) =>
        produce(old, (draft) => {
          draft.card = cardData;
          draft.content = contents;
        }),
      );
    }
  }, [cardData, contents, data]);
  return (
    <>
      <Wrapper>
        <Divider orientation="left">
          <h2>포트폴리오</h2>
        </Divider>
        <ProfileCardSet data={data} />
        <AdminViewer contents={contents} setContents={setContents} />
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
        <CustomButton types="primary" $fill onClick={onSubmint} css={{ width: '100%', borderRadius: '0' }} disabled={isChange}>
          {'변경내용 저장'}
        </CustomButton>
        <br />
      </Wrapper>
    </>
  );
};
