export function setLocalStorage<T>(key: string, value: T) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.localStorage.setItem(key, Buffer.from(String(value), 'utf8').toString('base64'));
  }
}

export function getLocalStorage(key: string, obj?: boolean) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const objString = window.localStorage.getItem(key); // null 체크

    if (obj) {
      return JSON.parse(Buffer.from(String(objString), 'base64').toString('utf8'));
    }
    return Buffer.from(String(objString), 'base64').toString('utf8');
  }
}

export function removeLocalStorage(key: string) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.localStorage.removeItem(key);
  }
}
