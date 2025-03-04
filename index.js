let leadsArr = [];
const inputEl = document.querySelector("#input-el");
const saveInputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const saveTabBtn = document.querySelector("#tab-btn");
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

saveTabBtn.addEventListener("click", function () {
  console.log("clicked");
});
