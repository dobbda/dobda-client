import Button from 'antd/lib/button';
import Divider from 'antd/lib/divider';
import { UploadFile } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useQueryClient, useQuery } from 'react-query';
import { uploadS3 } from 'src/lib/service/upload-s3';
import { CreatePortfolio, ImageProp, Portfolio, PortfolioContent } from 'src/interface';
import { resizeImage } from 'src/lib/service/resizeImg';
import { Button as CustomButton } from 'src/components/common/@share/Buttons';
import { user } from 'src/api';
import { keys, useAuth } from 'src/hooks';
import produce from 'immer';
import { message } from 'antd';
import { EditorCt, Wrapper } from './style';
import dynamic from 'next/dynamic';
import { listFileUpload } from '../lib/listFileUpload';
import { getPf } from 'src/api/apis/user';
import { jobData } from 'src/config/defaultValue';
import { Select as AntSelect, Tag, TreeSelect as AntTreeSelect } from 'antd';
import { SelectSkill, SelectWorkField } from 'src/components/common/@share/SkillSelect';
import styled from 'styled-components';

const ProfileCardSet = dynamic(() => import('./WritePortfolio/ProfileCardSet'), {
  suspense: true,
});
const AdminViewer = dynamic(() => import('./AdminViewer'));
const PfEditor = dynamic(() => import('./WritePortfolio/PfEditor'));

type Props = {
  // data: Portfolio;
};

export const MyPortfolio = ({}: Props) => {
  const { auth } = useAuth();
  const queryClient = useQueryClient();
  const { data, refetch } = useQuery(keys.pf(auth?.id), () => getPf(auth?.id), {
    staleTime: 1000 * 60 * 10,
    retry: 0,
  });
  const { data: cardData } = useQuery<typeof data.card>('profileCardSetData', { initialData: data?.card || null });
  const [html, setHtml] = useState('');
  const [contents, setContents] = useState<PortfolioContent[]>(data?.content || []);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isAdd, setIsAdd] = useState(false);
  const [job, setJob] = useState(data?.job || '');
  const [workField, setWorkField] = useState<string[] | string>(data?.workField || []);
  const [skill, setSkill] = useState<string[] | string>(data?.skill || []);

  useEffect(() => {
    setIsAdd(html?.replace(/<(.|\n)*?>/g, '').trim().length !== 0 || fileList.length !== 0);
  }, [html, fileList, data, contents]);

  const addContent = useCallback(async () => {
    const isContent = html?.replace(/<(.|\n)*?>/g, '').trim().length !== 0;
    if (fileList || isContent) {
      const images = await listFileUpload(fileList);
      setContents([
        ...contents,
        { content: isContent ? html : null, images: images, key: Math.random().toString(36).slice(2, 11) },
      ]);
      setHtml('');
      setFileList([]);
    }
  }, [html, contents, fileList]);

  const onSubmint = useCallback(async () => {
    let res = await user.updatePf({
      public: true,
      card: cardData,
      content: contents,
      job,
      workField,
      skill,
    } as CreatePortfolio);

    if (res.success) {
      const old = queryClient.getQueryData(keys.pf(auth.id));
      if (!old) {
        refetch;
        message.success('저장되었습니다.');
      } else {
        queryClient.setQueriesData(keys.pf(auth.id), (old: Portfolio) =>
          produce(old, (draft) => {
            draft.card = cardData;
            draft.content = contents;
          }),
        );
        message.success('저장되었습니다.');
      }
    }
  }, [cardData, contents, data, job, skill, workField]);
  return (
    <>
      <Wrapper>
        <Divider orientation="left">
          <h2>포트폴리오</h2>
        </Divider>
        <ProfileCardSet data={data} />
        <div css={{ margin: '20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Label>직업</Label>
          <AntSelect
            placeholder="현재 직업"
            defaultValue={job}
            style={{ width: 120 }}
            options={jobData}
            onChange={(v) => setJob(v)}
          />
          <br />
          <Label>전문분야</Label>
          <SelectWorkField value={workField} setValue={setWorkField} />
          <br />
          <Label>사용가능한 스킬</Label>
          <SelectSkill value={skill} setValue={setSkill} />
        </div>
        <AdminViewer contents={contents} setContents={setContents} />
        <br />
        <br />
        <br />
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
        <CustomButton types="primary" $fill onClick={onSubmint} css={{ width: '100%', borderRadius: '0' }}>
          {'변경내용 저장'}
        </CustomButton>
        <br />
      </Wrapper>
    </>
  );
};

export default MyPortfolio;

const Label = styled.span`
  color: #686666;
  font-size: 12px;
`;
