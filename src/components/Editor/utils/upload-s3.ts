import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export const uploadS3 = async (file: File) => {
  let type = file.name.split('.').pop().toLowerCase();
  let orgName = file.name.split('.')[0];
  const can = ['jpg', 'png', 'gif', 'svg', 'jpeg', 'webp'];

  if (can.indexOf(type)) {
    const fileName = `img/${orgName}_${Date.now().toString().substring(0, 10)}.` + type;
    // 업로드 성공시
    const url = `https://dobda.s3.${process.env?.NEXT_PUBLIC_REGION}.amazonaws.com/${fileName}`;
    const s3 = new S3Client({
      region: process.env?.NEXT_PUBLIC_REGION,
      credentials: {
        accessKeyId: process.env?.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process?.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
      },
    });

    const uploadParams = new PutObjectCommand({
      Bucket: process.env?.NEXT_PUBLIC_BUKET,
      Key: fileName,
      Body: file,
      ContentType: file.type,
      ACL: 'public-read',
    });

    try {
      const res = await s3.send(uploadParams);
      if (res.$metadata.httpStatusCode == 200) {
        return url;
      }
    } catch {
      alert('업로드 실패');
    }
  }
};

// export const uploadS3 = async (file: File) => {
//   let type = file.name.split('.').pop().toLowerCase();
//   const can = ['jpg', 'png', 'gif', 'svg', 'jpeg', 'webp'];

//   if (can.indexOf(type)) {
//     const fileName = `content-images/dobda-${Date.now().toString()}.` + type;
//     const s3 = new S3({
//       region: process.env?.NEXT_PUBLIC_REGION,
//       accessKeyId: process.env?.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
//       secretAccessKey: process?.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
//     });

//     const upload = s3.upload({
//       Bucket: process.env?.NEXT_PUBLIC_BUKET,
//       Key: fileName,
//       Body: file,
//       ContentType: file.type,
//       // ACL: 'public-read',
//     });

//     return await upload.promise().then(
//       (res) => {
//         return res?.Location;
//       },
//       (err) => console.log('err', err),
//     );
//   } else {
//     alert('<' + type + '>' + '확장자 파일은 업로드 블가능 합니다.');
//     return false;
//   }
// };
