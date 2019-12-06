var button = document.getElementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

/*
//przekreślanie elementu tablicy uwaga przekreśla jednym kliknięciem całe ul
ul.onclick = (event)=>{
	event.target.classList.toggle("done");
}	
*/

function closeX(){
	var item = document.createElement("item");
	var itemTXT=document.createTextNode("\u00D7");
	item.className="close";
	item.appendChild(itemTXT);
	item.onclick= ()=>{event.target.parentNode.remove();}
	return item;
}

function toggling(){
	this.classList.toggle("done");
};


var myLi = document.getElementsByTagName("li");
for (var i=0;i<myLi.length;i++){
	myLi[i].appendChild(closeX());
	myLi[i].addEventListener("click", toggling);
}

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li= document.createElement("li");
	li.appendChild(document.createTextNode(input.value+"  ")); //tworzy nowy węzeł o nazwie testing
	ul.appendChild(li); //dołącza nowy element li do ul
	li.appendChild(closeX());
		input.value="";
	li.addEventListener("click", toggling);
}

function addListAfterClick(){
	if (inputLength()) {
		createListElement();
	};
}

function addListAfterKeypress(event){
		if (inputLength()>0 && event.keyCode===13) {
		createListElement();
	};
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);