export function setLocalStorage( key:string, value:Number=300000 ) {

  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.localStorage.setItem(key, String(value));
  }
}

export function getLocalStorage(key: string) {
  if (typeof window !== 'undefined' && typeof document !== 'undefined' ) {
    const objString = Number(window.localStorage.getItem(key)); // null 체크
		const returnValue= objString>0 ? objString : 0
    return returnValue ;
  }
}

export function removeLocalStorage(key:string) {
	if (typeof window !== 'undefined' && typeof document !== 'undefined' ) {
		window.localStorage.removeItem(key) ;
  }
}