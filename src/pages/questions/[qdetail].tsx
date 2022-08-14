import { Layout } from "src/components/Layout";
import { QDetail } from "src/components/DetailPage";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { QuestionDetail } from "src/types";
import { q } from "src/api";
import { useQuery } from "react-query";
import { keys } from "src/hooks/queries/queryKeys";


const QuestionDetailPage: NextPage = () => {
  const router = useRouter();
  const { createdAt, qid } = router.query;
	console.log(qid)
  const {data} = useQuery(keys.qDetail(Number(qid)), ()=>q.questionDetail<QuestionDetail>(Number(qid)), {
		// enabled: false,
		staleTime:Infinity,
	});
  return (
    <Layout aside={<>카테고리?</>}>
      <QDetail data={data}/>
    </Layout>
  );
};

export default QuestionDetailPage;