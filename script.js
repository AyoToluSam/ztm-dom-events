const button = document.getElementById("enter");
const clearBtn = document.getElementById("clear");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let items = document.getElementsByClassName("items");
let deleteBtns = document.getElementsByClassName("delete");
let itemsArr = Array.from(items);
let deleteBtnsArr = Array.from(deleteBtns);

function createListElement() {
	const a = document.createElement("a")
	a.appendChild(document.createTextNode(input.value[0].toUpperCase() + input.value.substring(1)));
	a.classList.add("items");
	a.setAttribute("href", "#");
	a.addEventListener("click", function(e) {
		e.currentTarget.classList.toggle("done");
	})
	itemsArr.push(a);

	const liBtn = document.createElement("button");
	liBtn.appendChild(document.createTextNode("Delete"));
	liBtn.classList.add("delete");
	liBtn.addEventListener("click", function(e) {
		e.currentTarget.parentElement.remove();
	})
	deleteBtnsArr.push(liBtn);

	const li = document.createElement("li");
	li.appendChild(a);
	li.appendChild(liBtn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (input.value.length > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (input.value.length > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function clearAllAfterClick() {
	for (let i=0; i<deleteBtnsArr.length; i++) {
		deleteBtnsArr[i].parentElement.remove();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

clear.addEventListener("click", clearAllAfterClick);


for (let i=0; i<itemsArr.length; i++) {
	itemsArr[i].addEventListener("click", function(e) {
		e.currentTarget.classList.toggle("done");
	})
  } 

  for (let i=0; i<deleteBtnsArr.length; i++) {
	deleteBtnsArr[i].addEventListener("click", function(e) {
		e.currentTarget.parentElement.remove();
	})
  } 


