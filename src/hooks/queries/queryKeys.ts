export const keys = {
	auth: "auth",
	questions:(title?:string, tag?:string)=>["questions", {title:title&&title, tag:tag&&title}],
	fRequest: 'featureRequest',
	detail:(qid:number)=> ['question', qid ],
	answers: (qid:number, )=> ['question',  qid, 'answers'],
	comment: ( aid:number)=> ['question', 'answers', aid, 'comment']
}