// js app

// constants
const btnAdd = document.getElementById("btnAdd");
const btnDelete = document.getElementById("btnDelete");
const textInput = document.getElementById("textInput");
const ul = document.querySelector("ul");

let todoList = [];

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

const deleteDataFromTheList = (list, index) => {
  if (list.length > 1) {
    list.splice(index, 1);
    renderList();
  }
};
const insertDataToTheList = (list, data) => {
  list.push(data);
  renderList();
  clearInput();
};

const clearList = () => {
  if(todoList.length >= 1)
  {
    todoList = [];
    renderList();
  }else {
    alert("There is nothing to remove on the list");
  }
  
};
const clearInput = () => {
  textInput.value = '';
}

function deleteList(index) {
  todoList.splice(index, 1);
  renderList();
}

function renderList() {
  ul.innerHTML = "";
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
  inputChecker() && insertDataToTheList(todoList, textInput.value);

});

btnDelete.addEventListener("click", function () {
  clearList(todoList);
});
