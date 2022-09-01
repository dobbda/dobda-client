import { Layout } from "src/components/Layout";
import { ODetail } from "src/components/DetailPage";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { o, q } from "src/api";
import {OutsourceDetail, QuestionDetail} from 'src/types'
import { useLayoutEffect } from "react";
import { useQuery } from "react-query";
import { keys } from "src/hooks";

const RequestDetailPage: NextPage = () => {

  const router = useRouter();
  const { oId } = router.query;
  const {data, error, isError, isSuccess } = useQuery(keys.oDetail(Number(oId)), ()=>o.outsourceDetail<OutsourceDetail>(Number(oId)), {
		retry:0,
		staleTime:Infinity,
	});

  useLayoutEffect(() => {
		if(isError) {
			router.push("/404", router.asPath, { shallow: true });
		}
  }, [router,isError]);
  return (
    <Layout aside={<>카테고리?</>}>
			{
				data && 
				<ODetail data={data}/>
			}
    </Layout>
  );
};

export default RequestDetailPage;