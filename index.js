const inputEl = document.querySelector("#input-el");
const saveInputBtn = document.querySelector("#input-btn");
const listEl = document.querySelector("#list-el");
const leadsArr = [];
console.log(leadsArr);

saveInputBtn.addEventListener("click", function () {
  const inputValue = inputEl.value;
  leadsArr.push(inputValue);
  console.log(leadsArr);
  listEl.innerHTML = `<li><a href="#">${inputValue}</a></li>`;
});
