const radioName = "env";

function buildEnvListEntry(data){
	return `
	<div class="envOption">
		<input type="radio" name="${radioName}" value="${data.envId}" id="${data.name+data.envId}"> 
		<label for="${data.name+data.envId}">
			<img src="/img/${data.imgPath}" width="100" height="100">
			<h2>${data.name}</h2>
			<p class="desc">${data.description}</p>
		</label>
	</div>`;
}

function getCode(){
	let selectedEnv = $('input[type="radio"]:checked').val();
	if (selectedEnv === undefined) {
		alert("You must select an environment");
	} else {
		$.post("/code", {environment: selectedEnv}, (data)=>{
			console.log(data);
			$("#code").html(data);
			$("#closeCodeBtn").show();
			$("#genCodeBtn").hide();
		}).fail((jqXHR, status, err)=>{
			console.error(status);
			throw err;
		});
	}
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