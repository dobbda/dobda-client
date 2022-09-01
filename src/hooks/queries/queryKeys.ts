export const keys = {
	auth: "auth",
	questions:(title?:string, tag?:string)=>["questions", {title:title&&title, tag:tag&&title}],
	answers: (qid:number|string, )=> ['question',  qid, 'answers'],
	comment: ( aid:number|string)=> ['question', 'answers', aid, 'comment'],
	qDetail:(qid:number|string)=> ['question', "detail", qid ],

	outsources:(title?:string, tag?:string)=>["outsources", {title:title&&title, tag:tag&&title}],
	enquiries: (oid:number|string, )=> ['outsource',  oid, 'answers'],
	replies: ( eid:number|string)=> ['outsource', 'answers', eid, 'comment'],
	oDetail:(oid:number|string)=> ['outsource', "detail", oid ],

}