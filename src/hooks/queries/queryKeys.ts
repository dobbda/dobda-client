export const keys = {
	auth: "auth",
	questions:(title?:string, tag?:string)=>["questions", {title:title&&title, tag:tag&&title}],
	answers: (qid:number|string, )=> ['question',  qid, 'answers'],
	comment: ( aid:number|string)=> ['question', 'answers', aid, 'comment'],
	qDetail:(qid:number|string)=> ['question', qid ],

	outsources:(title?:string, tag?:string)=>["outsources", {title:title&&title, tag:tag&&title}],
	enquiries: (oid:number|string, )=> ['outsources',  oid, 'answers'],
	replies: ( eid:number|string)=> ['outsources', 'answers', eid, 'comment'],
	oDetail:(oid:number|string)=> ['outsources', oid ],

}