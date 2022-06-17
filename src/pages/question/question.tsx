import { Layout } from "src/components/Layout";
import { QDetail } from "src/components/DetailPage";
import { NextPage } from "next";


const QuestionDetailPage: NextPage = () => {
  
  return (
    <Layout>
      <QDetail />
    </Layout>
  );
};

export default QuestionDetailPage;