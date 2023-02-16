export function setLocalStorage(key: string, value: any) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.localStorage.setItem(
      key,
      Buffer.from(String(value), 'utf8').toString('base64'),
    );
  }
}

export function getLocalStorage(key: string, obj?: boolean) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const objString = window.localStorage.getItem(key); // null 체크
    const decod = Buffer.from(String(objString), 'base64').toString('utf8');
    if (decod && objString && obj) {
      return JSON.parse(decod);
    } else if (objString) {
      return decod;
    } else {
      return null;
    }
  }
}

export function removeLocalStorage(key: string) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.localStorage.removeItem(key);
  }
}
