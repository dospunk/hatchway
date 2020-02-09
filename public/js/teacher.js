const radioName = "env";

function buildEnvListEntry(data){
	return `
	<div>
		<input type="radio" name="${radioName}" value="${data.envId}" id="${data.name+data.envId}"> 
		<label for="${data.name+data.envId}">
			<img src="/img/${data.imgPath}" width="100" height="100"> ${data.name} 
		</label>
		<span class="desc"> ${data.description} </span>
	</div>`;
}


$.post("/envlist", {}, (data)=>{
	$.each(data, (idx, elem)=>{
		console.dir(elem);
		$("#envs").append(buildEnvListEntry(elem));
	});
}).fail((jqXHR, status, err)=>{
	console.error(status);
	throw err;
});