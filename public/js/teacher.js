$.post("/envlist", {}, (data)=>{
	console.log(data);
}).fail((jqXHR, status, err)=>{
	console.error(status);
	throw err;
});