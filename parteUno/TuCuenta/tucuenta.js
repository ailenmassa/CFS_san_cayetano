const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
const modal = document.getElementById("modal");
const btnModal = document.getElementById("btn-modal");
const userData = document.getElementById("modal-list");
btnModal.addEventListener("click", closeModal);


function handleSubmit(e) {
  e.preventDefault();
  const userInfo = new FormData(form);
  renderModal(userInfo);
  form.reset();
}

function renderModal(data) {
  for (let [key, value] of data) {
    const li = document.createElement("li");
    li.textContent = `${key} : ${value}`;
    userData.appendChild(li);
  }
 modal.showModal();
}

function closeModal() {
  modal.close();
}