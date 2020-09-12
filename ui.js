function showdiv(id){
	if (document.getElementById(id).hidden){
		document.getElementById(id).hidden = false;
		document.getElementById(id+"a").innerHTML = document.getElementById(id+"a").innerHTML.replace("+","-")
	}else{
		document.getElementById(id).hidden = true;
		document.getElementById(id+"a").innerHTML = document.getElementById(id+"a").innerHTML.replace("-","+")
	}
}
function download(){
	window.open("https://github.com/Jacob-Python/anim8/blob/master/install-anim8.exe?raw=true");
	document.getElementById("dropdown").hidden = false;
}