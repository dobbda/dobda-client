// 쿠키 생성 함수
function setCookie(key:string, value:string,) {
  var expire = new Date();
  expire.setDate(expire.getDate() + 10);
  var cookies = key + '=' + value + '; path=/ ';
  document.cookie = cookies;
}



// 쿠키 가져오기 함수
export function getCookie(key:string):boolean {
	if (typeof window !== 'undefined' && typeof document !== 'undefined' ) {
		var cookieData = document.cookie;
		return cookieData.match(key) !== undefined;
	}  
}
