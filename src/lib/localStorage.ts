export function setLocalStorage(key: string, value: string) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.localStorage.setItem(key, String(value));
  }
}

export function getLocalStorage(key: string) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const objString = window.localStorage.getItem(key); // null 체크
    return objString;
  }
}

export function removeLocalStorage(key: string) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.localStorage.removeItem(key);
  }
}
