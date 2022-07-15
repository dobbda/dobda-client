import AWS from 'aws-sdk';


export const getUrl = async (file:File) => { 
  const fileName = Date.now(); // 이미지 이름
  console.log("드롱ㅁ")
  AWS.config.update({
    region: process.env.NEXT_PUBLIC_REGION,
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  });

  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: process.env.NEXT_PUBLIC_BUKET, // 버킷 이름
      Key: fileName.toString() + '.png', // 유저 아이디
      Body: file, // 파일 객체
    },
  });

  await upload.promise().then(
    (res) => {
      console.log("라이브러리데이터: ",res.Location)
      return res?.Location
    },
    (err) => {
      console.log(err);
    });

 }
          