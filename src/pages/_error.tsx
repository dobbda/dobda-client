import Error from 'next/error'
import { NextApiResponse } from 'next'
export async function getServerSideProps() {
  const res:any = await fetch('https://api.github.com/repos/vercel/next.js')
  const errorCode = res.ok ? false : res.statusCode
  const json = await res.json()

  return {
    props: { errorCode, stars: json.stargazers_count },
  }
}
type Props ={
  errorCode:number,
  stars:string
}

export default function Page({ errorCode, stars }:Props) {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return <div>Next stars: {stars}</div>
}