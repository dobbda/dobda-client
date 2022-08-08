import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Layout } from '../components/Layout';
import { MainContent } from 'src/components/MainContent';
import { NextPageContext } from 'next'
import { GetServerSideProps } from 'next';
import  axios  from 'axios';
const Home: NextPage = () => {

  return (
    <>
      <Layout aside={<p>인기글/ \n 태그모음  최신글...</p>}>
        <MainContent />
      </Layout>
    </>
  );
};



// export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
// 			if (req.headers.cookie) {
// 				// axios.defaults.headers.common['set-cookie']
// 				return {
// 					props: {}, // will be passed to the page component as props
// 				}
// 			}
// 			return {
// 				props: {}, // will be passed to the page component as props
// 			}

// }

export default Home;


