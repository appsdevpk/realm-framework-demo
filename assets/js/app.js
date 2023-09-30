const interf = new Interfy();

interf.route("/", (o)=>{
	jQuery('adp-currentpage').attr('page','/home');
});
interf.route("*", (o)=>{
	jQuery('adp-currentpage').attr('page',o);
});
/*
interf.route("/user/(id)", (o)=>{
	console.log(`User's id :${ o.var.id}`) ;
})

interf.route("/?q=*", (o)=>{
	localStorage.setItem('currentpage','test');
	console.log(`Searching for : ${o.param.q}`);
});
*/
interf.start();