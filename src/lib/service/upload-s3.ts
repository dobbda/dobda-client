import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export const uploadS3 = async (file: File, folder?: string) => {
  let type = file?.name.split('.').pop().toLowerCase();
  let orgName = file?.name.split('.')[0];
  const can = ['jpg', 'png', 'gif', 'svg', 'jpeg', 'webp'];

  if (can.includes(type)) {
    const fileName =
      (folder ? folder : 'img') +
      `/${orgName}_${Date.now().toString().slice(-10)}.` +
      type;
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
      console.log(
        'res.$metadata.httpStatusCode ',
        res.$metadata.httpStatusCode,
      );
      if (res.$metadata.httpStatusCode == 200) {
        return { url, fileName };
      }
    } catch {
      alert('업로드 실패');
    }
  }
};
