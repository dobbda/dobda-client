import { Layout } from 'antd';
import { NextPage } from 'next';
// pages/404.js
const Error404: NextPage = () => {
  return (
    <>
      <br />
      <div style={{ textAlign: 'center' }}>
        <h1>404 - Page Not Found</h1>
        <br />
        <h1>잘못된 접근입니다</h1>
      </div>
    </>
  );
};

export default Error404;
