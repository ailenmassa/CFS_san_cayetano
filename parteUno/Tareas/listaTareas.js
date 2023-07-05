"use strict";


//Array to store to-do items
//-----PASO 2------
let todos = [];

//get elements
//-----PASO 1------
const addTodoForm = document.getElementById("addTodoForm");
//-----PASO 8------
const todoModal = document.getElementById("todoModal");
const editTodoForm = document.getElementById("editTodoForm");
const deleteButton = document.getElementById("deleteButton");
const statusButton = document.getElementById("statusButton");
const cancelButton = document.getElementById("cancelButton");

//Event listeners
//-----PASO 3------
addTodoForm.addEventListener("submit", handleAddTodoFormSubmit);
//-----PASO 9------
deleteButton.addEventListener("click", handleDeleteButtonClick);
editTodoForm.addEventListener("submit", handleUpdateButtonClick);
statusButton.addEventListener("click", handleStatusButtonClick);
cancelButton.addEventListener("click", () => todoModal.close());


//function to render table
//-----PASO 5------
function renderTable() {
  const tableBody = document.querySelector("#todoTable tbody");
  tableBody.innerHTML = "";

  todos.forEach(todo => {
    const row = document.createElement("tr");
    row.setAttribute("data-todo-id", todo.id);
    row.addEventListener("click", handleTodoRowClick);

    const idCell = document.createElement("td");
    idCell.textContent = todo.id;
    row.appendChild(idCell);

    const descriptionCell = document.createElement("td");
    descriptionCell.textContent = todo.description;
    row.appendChild(descriptionCell);

    const statusCell = document.createElement("td");
    statusCell.textContent = todo.isCompleted ? "completada" : "pendiente";
    if (todo.isCompleted) {
      statusCell.classList.add("completada");
      statusCell.classList.remove("pendiente");
    } else {
      statusCell.classList.add("pendiente");
      statusCell.classList.remove("completada");
    }

    row.appendChild(statusCell);
    tableBody.appendChild(row);
  });
}

//Function to handle todo row click
//-----PASO 6------(primero se creo vacia, se completa despues de crear la funcion generateId)
function handleTodoRowClick(e) {
  const todoId = e.currentTarget.getAttribute("data-todo-id");
  const todo = todos.find(todo => todo.id === Number(todoId));
//-----PASO 10------(se agregan los datos de la ventana modal)
  const todoIdInput = editTodoForm.querySelector("#todoId");
  const todoDescriptionInput = editTodoForm.querySelector(
    "#todoDescriptionModal"
  );
  const statusText = document.getElementById("statusText");
//-----PASO 12------(se completan los estados y se agregan clases para los estilos)
  if (todo.isCompleted) {
    statusText.textContent = "Completada";
    statusText.classList.add("completada");
    statusText.classList.remove("pendiente");//-----PASO 15------
  } else {
    statusText.textContent = "Pendiente";
    statusText.classList.add("pendiente");
    statusText.classList.remove("completada");//-----PASO 15------(para no mezclar las clases)
  }
  todoIdInput.textContent = todo.id;
  todoDescriptionInput.value = todo.description;
  todoModal.showModal();
}

//-----PASO 7------
function generateId() {
  if (todos.length === 0) {
    return 1;
  } else {
    const lastTodo = todos[todos.length - 1];
    return lastTodo.id + 1;
  }
}

//métodos para actualizar los datos
//-----PASO 11------(primero se crean las tres funciones vacias)
//-----PASO 16------
function handleDeleteButtonClick() {
  const todoId = Number(editTodoForm.querySelector("#todoId").textContent);
  todos = todos.filter(todo => todo.id !== todoId);
  todoModal.close();
  renderTable();
}
//-----PASO 17------
function handleUpdateButtonClick(e) {
  e.preventDefault();
  const todoDescriptionInput = editTodoForm.querySelector("#todoDescriptionModal");
  const todoId = Number(editTodoForm.querySelector("#todoId").textContent);
  const todo = todos.find(todo => todo.id === todoId);
  todo.description = todoDescriptionInput.value;
  renderTable();
  todoModal.close();
}
//-----PASO 13------
function handleStatusButtonClick() {
  const todoId = Number(editTodoForm.querySelector("#todoId").textContent);//-----PASO 14------(convertimos en un numero todoId)
  const todo = todos.find(todo => todo.id === todoId);
  if (todo.isCompleted === true) {
    todo.isCompleted = false;
  } else {
    todo.isCompleted = true;
  }
  todoModal.close();
  renderTable();
}

//Function to handle add to-do form submission
//-----PASO 4------
function handleAddTodoFormSubmit(e) {
  e.preventDefault();

  const todoDescriptionInput = addTodoForm.querySelector("#todoDescription");
  const todoDescription = todoDescriptionInput.value.trim();
  if (todoDescription !== "") {
    const newTodo = {
      id: generateId(todos),
      description: todoDescription,
      isCompleted: false,
    };
    todos.push(newTodo);
    renderTable();
    addTodoForm.reset();
  }
}