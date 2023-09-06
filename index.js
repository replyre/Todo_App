const inputBox = document.querySelector(".row input");
const listContainer = document.getElementById("list-container");

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") add();
});
function add() {
  if (inputBox.value === "") {
    inputBox.value = "Nothing Here !";
    inputBox.style.color = "maroon";
    inputBox.style.fontSize = "15px";

    setTimeout(() => {
      inputBox.value = "";
      inputBox.style.color = "black";
      inputBox.style.fontSize = "";
    }, 1000);
  } else {
    let li = ` <li class="">
        <label>🔴 
        <p> ${inputBox.value}</p>
        </label>
         <span>\u00d7</span>
      </li> `;
    listContainer.insertAdjacentHTML("afterbegin", li);
    inputBox.value = "";
  }
  saveData();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    e.target.parentNode.classList.toggle("checked");
    saveData();
  }
  if (e.target.tagName === "LABEL") {
    e.target.classList.toggle("checked");
    saveData();
  }
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function show() {
  console.log(localStorage.getItem("data"));
  listContainer.innerHTML = localStorage.getItem("data");
}
show();
