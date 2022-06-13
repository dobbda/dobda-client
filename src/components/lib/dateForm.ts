import moment from "moment";
import "moment/locale/ko";


const getDate = (date:string, fromNow:boolean = false) => { 

 return fromNow? moment(date).fromNow() :moment(date).format('YYYY-MM-DD HH:mm');
 }

 export default getDate;