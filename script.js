//Adding itmes to the list

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 

function inputLength () {
	return input.value.length;
}

function createListElement () {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	}


button.addEventListener("click", function (){
	if (inputLength () > 0) {
	createListElement ();
     }
})

input.addEventListener("keypress", function (event) {
	if (inputLength () > 0 && event.keyCode === 13) {
	createListElement ();
	}
})

//Toggle the list

var list = document.querySelectorAll("li")

for(var i=0; i<list.length; i++){
 list[i].addEventListener("click", liEvent);
}
function liEvent(){
  this.classList.toggle("done");
}

//Addinng buttons next to each list item to delete the item when clicked 
function listLength(){
	return listItems.length;
}

function deleteButton(){
	var btn=document.createElement("button");
btn.appendChild(document.createTextNode("Sterge"));
listItems[i].appendChild(btn);
btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){

deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
} 
