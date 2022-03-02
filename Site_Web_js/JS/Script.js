function modifMessage(){
	alert("Ceci est un titre")
}

document.getElementById("demo").ondblclick = function() {myFunction()};

function myFunction() {
  document.getElementById("demo").innerHTML = "Tu m'as double-cliqué!";
}



function changerBoite1(){
	document.querySelector("#element_1").style.backgroundColor="#E8DAEF";
}


function changerBoite2(){
	document.querySelector("#element_2").style.backgroundColor="#DAF7A6";
}
function retrouverBoite1(){
	document.querySelector("#element_1").style.backgroundColor="#DAF7A6";
}

function retrouverBoite2(){
	document.querySelector("#element_2").style.backgroundColor="#E8DAEF";
}







