import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-d4c5e-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log(firebaseConfig.databaseURL);

let leadsArr = [];
const inputEl = document.querySelector("#input-el");
const saveInputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const listEl = document.querySelector("#list-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  leadsArr = leadsFromLocalStorage;
  render(leadsArr);
}

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
  localStorage.setItem("myLeads", JSON.stringify(leadsArr));
  render(leadsArr);
});

deleteBtn.addEventListener("click", function () {
  localStorage.clear();
  leadsArr = [];
  render(leadsArr);
});
