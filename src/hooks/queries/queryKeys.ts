export const keys = {
	auth: "auth",
	questions:(title?:string, tag?:string)=>["questions", {title:title&&title, tag:tag&&title}],
	outsources:(title?:string, tag?:string)=>["outsources", {title:title&&title, tag:tag&&title}],
	qDetail:(qid:number|string)=> ['question', qid ],
	rDetail:(qid:number|string)=> ['question', qid ],
	answers: (qid:number|string, )=> ['question',  qid, 'answers'],
	comment: ( aid:number|string)=> ['question', 'answers', aid, 'comment']
}