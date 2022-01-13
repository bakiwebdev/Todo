// js app

// constants
const btnAdd = document.getElementById("btnAdd");
const btnDelete = document.getElementById("btnDelete");
const textInput = document.getElementById("textInput");
const ul = document.querySelector("ul");

const todoList = [];

const inputChecker = function () {
  let inputValue = textInput.value;
  if (inputValue === "") {
    alert("Please enter any value to add to the list");
    return false;
  } else if (inputValue.trim() === "") {
    alert("Please avoid whitespace and enter any value to add to the list");
    return false;
  }
  return true;
};

function deleteList(key) {
  todoList.splice(key, 1);
  renderList();
}

function renderList () {
  ul.innerHTML = "";
  // todoList.forEach(function (todo) {
  //   let li = document.createElement("li");
  //   li.onclick = function () {
  //     console.log(key);
  //   };
  //   li.textContent = todo;
  //   ul.appendChild(li);
  // });
  todoList.map(function (todo, key) {
    let li = document.createElement("li");
    li.onclick = function () {
      deleteList(key);
    };
    li.textContent = todo;
    ul.appendChild(li);
  });
}

// button event listeners
btnAdd.addEventListener("click", function () {
  if (inputChecker()) {
    // //  create the element we want to add
    // const newElement = document.createElement('li');
    // // add the text to the element
    // newElement.innerText = textInput.value;
    // todoList.push(textInput.value);
    // console.log(todoList);
    // // add the element to the DOM
    // ul.appendChild(newElement);
    todoList.push(textInput.value);
    renderList();
  }
});

btnDelete.addEventListener("click", function () {
    // check if the ul has any child
    // yes => remove the last child
    // no => alert the user
    ul.childElementCount > 0 ? ul.removeChild(ul.lastElementChild) : alert("There is no element to delete");
});
