function sendCode(){
	let code = $("#codeInput").val();
	window.location.assign("app/"+code);
}