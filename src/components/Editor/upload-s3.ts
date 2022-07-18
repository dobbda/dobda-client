import AWS from 'aws-sdk';


export const uploadS3 = async (file:File) => { 
  const fileName =`upload/qq${Date.now().toString()}.png` ; // 이미지 이름
  AWS.config.update({
    region: process.env?.NEXT_PUBLIC_REGION,
    accessKeyId: process.env?.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process?.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    
  });

  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: process.env?.NEXT_PUBLIC_BUKET, // 버킷 이름
      Key: fileName , // 유저 아이디
      Body: file, // 파일 객체
    },
  });

  return await upload.promise().then(
    (res) => {
      console.log("결과",res)
      return res?.Location
    }
    ,
    (err) => console.log("err", err)
    
    );

 }
          