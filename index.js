import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-d4c5e-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let leadsArr = [];
const inputEl = document.querySelector("#input-el");
const saveInputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const listEl = document.querySelector("#list-el");

function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `<li><a href="${leads[i]}" target="_blank">${leads[i]}</a></li>`;
  }

  listEl.innerHTML = listItems;
}

saveInputBtn.addEventListener("click", function () {
  leadsArr.push(inputEl.value);
  inputEl.value = "";
  render(leadsArr);
});

deleteBtn.addEventListener("click", function () {
  leadsArr = [];
  render(leadsArr);
});
