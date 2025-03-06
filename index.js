import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  ref,
  push,
  onValue,
  remove,
  getDatabase,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-d4c5e-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const leadsRef = ref(database, "leads");

const inputEl = document.querySelector("#input-el");
const saveInputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const listEl = document.querySelector("#list-el");

onValue(leadsRef, function (snapshot) {
  if (snapshot.exists()) {
    const leads = Object.values(snapshot.val());
    render(leads);
  }
});

function render(leads) {
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `<li><a href="${leads[i]}" target="_blank">${leads[i]}</a></li>`;
  }

  listEl.innerHTML = listItems;
}

saveInputBtn.addEventListener("click", function () {
  const leadsArr = push(leadsRef, inputEl.value);
  Object.values(leadsArr);
  inputEl.value = "";
});

deleteBtn.addEventListener("click", function () {
  remove(leadsRef);
  listEl.innerHTML = "";
});
