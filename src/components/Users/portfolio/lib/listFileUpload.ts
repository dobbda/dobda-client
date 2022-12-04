import { Image } from 'src/interface/index';
import { UploadFile } from 'antd';
import { resizeImage } from 'src/lib/service/resizeImg';
import { uploadS3 } from 'src/lib/service/upload-s3';

export const listFileUpload = async (fileList: UploadFile[]) => {
  let images: Image[] = [];

  for (const v of fileList) {
    if (v.originFileObj) {
      let resize =
        v.size / 1023 ** 2 > 1 &&
        ((await resizeImage({ file: v.originFileObj, reformat: 'file', width: 1080, height: 1080 })) as File);
      let { url, fileName } = await uploadS3(resize || v.originFileObj);
      images.push({ url: url, uid: Math.random().toString(36).slice(2, 11), name: fileName });
    } else {
      images.push(v);
    }
  }
  return images;
};
