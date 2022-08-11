import { Layout } from "src/components/Layout";
import { RDetail } from "src/components/DetailPage";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { q } from "src/api";
import {QuestionDetail} from 'src/types'

const RequestDetailPage: NextPage = () => {

  const router = useRouter();
  const { title, qid } = router.query;
  return (
    <Layout>
      {/* <RDetail data={questionDetail&&questionDetail}/> */}
    </Layout>
  );
};

export default RequestDetailPage;