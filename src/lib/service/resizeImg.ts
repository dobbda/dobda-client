import { RcFile } from 'antd/lib/upload';
import Resizer from 'react-image-file-resizer';

interface ResizeProps {
  file: File;
  retype?: string | 'png' | 'jpeg';
  reformat?: 'file' | 'url';
  width?: number;
  height?: number;
}
export const resizeImage = ({ file, retype, reformat, width, height }: ResizeProps) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      width || 50,
      height || 50,
      retype ? retype : 'png',
      100,
      0,
      (url) => {
        resolve(url || file);
      },
      reformat || 'url',
    );
  });

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

// const dataURLtoFile = (dataurl: string, fileName: string) => {
//   var arr = dataurl.split(','),
//     mime = arr[0].match(/:(.*?);/)[1],
//     bstr = Buffer.from(arr[1], 'base64').toString(),
//     // bstr = atob(arr[1]),
//     n = bstr.length,
//     u8arr = new Uint8Array(n);

//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }

//   return new File([u8arr], fileName, { type: mime });
// };
