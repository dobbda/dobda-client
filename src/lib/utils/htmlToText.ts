export const htmlToText = (html: string) => {
  let text = html
    .slice(0, 500)
    .replace(/<br>/, ' ')
    .replace(/<(.|\n)*?>/g, '')
    .trim();
  return text + (text.length > 200 ? '...' : '');
};
