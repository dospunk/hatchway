const radioName = "env";

function buildEnvListEntry(data){
	return `<div><input type="radio" name="${radioName}" value="${data.envId}> ${data.name} <br> <span class="desc"> ${data.desc} </span> </div>`;
}


$.post("/envlist", {}, (data)=>{
	$.each(data, (idx, elem)=>{
		console.log(elem);
		$("#envs").append(buildEnvListEntry(elem));
	});
}).fail((jqXHR, status, err)=>{
	console.error(status);
	throw err;
});