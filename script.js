//select elements
var input = document.getElementById("input");
// console.log(input.value);
var AddBtn = document.getElementById("btnAdd");
// console.log(AddBtn.innerHTML);

function AddTodo() {
  //get the input value
  var text = document.createTextNode(input.value);
  // create the li element
  var todo = document.createElement("li");

  //append text to li
  todo.appendChild(text);
  //create the remove Button
  var removeBtn = document.createElement("button");
  removeBtn.setAttribute("class", "btn btn-danger");
  removeBtn.innerText = "X";
  //append button remove to li
  todo.appendChild(removeBtn);
  //select the list ul
  var todoList = document.getElementById("List");
  //append li to ul
  if (input.value == "") {
    alert("please enter something !!");
  } else {
    todoList.appendChild(todo);
  }

  input.value = "";

  //function removeTodo
  removeBtn.addEventListener("click", function () {
    removeBtn.parentElement.remove();
  });
}
AddBtn.addEventListener("click", AddTodo());
