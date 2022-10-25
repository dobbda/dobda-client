import S3 from 'aws-sdk/clients/s3';

export const uploadS3 = async (file: File) => {
  let type = file.name.split('.').pop().toLowerCase();
  const can = ['jpg', 'png', 'gif', 'svg', 'jpeg', 'webp'];

  if (can.indexOf(type)) {
    const fileName = `content-images/dobda-${Date.now().toString()}.` + type;
    const s3 = new S3({
      region: process.env?.NEXT_PUBLIC_REGION,
      accessKeyId: process.env?.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
      secretAccessKey: process?.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
    });

    const upload = s3.upload({
      Bucket: process.env?.NEXT_PUBLIC_BUKET,
      Key: fileName,
      Body: file,
      ContentType: file.type,
      // ACL: 'public-read',
    });

    return await upload.promise().then(
      (res) => {
        return res?.Location;
      },
      (err) => console.log('err', err),
    );
  } else {
    alert('<' + type + '>' + '확장자 파일은 업로드 블가능 합니다.');
    return false;
  }
};
