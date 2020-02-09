const radioName = "env";

function buildEnvListEntry(data){
	return `
	<div>
		<input type="radio" name="${radioName}" value="${data.envId}" id="${data.name+data.envId}"> 
		<label for="${data.name+data.envId}" class="envOption">
			<img src="/img/${data.imgPath}" width="100" height="100">
			<h2>${data.name}</h2>
			<p class="desc">${data.description}</p>
		</label>
	</div>`;
}

function getCode(){
	console.log($('input[type="radio"]:selected'));
	let selectedEnv = $('input[type="radio"]:selected').val();
	console.log(selectedEnv);
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