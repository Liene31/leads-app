const inputEl = document.querySelector("#input-el");
const saveInputBtn = document.querySelector("#input-btn");
const listEl = document.querySelector("#list-el");
const leadsArr = [];

function render(leads) {
  let listItems = "";

  for (let i = 0; i < leadsArr.length; i++) {
    listItems += `<li><a href="${leads[i]}" target="_blank">${leads[i]}</a></li>`;
  }

  listEl.innerHTML = listItems;
}

saveInputBtn.addEventListener("click", function () {
  const inputValue = inputEl.value;
  leadsArr.push(inputValue);
  render(leadsArr);
  savetoLocalStorage(leadsArr);
  console.log(leadsArr);
});

function savetoLocalStorage(leads) {
  localStorage.setItem("myArr", JSON.stringify(leads));
  localStorage.JSON.parse();
}
