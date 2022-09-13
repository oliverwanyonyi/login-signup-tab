const header = document.querySelector(".header");
const tabs = document.querySelectorAll(".tab");
const authForms = document.querySelectorAll(".form");
header.addEventListener("click", (e) => {
  // remove tab active class every time a button is clicked and add it to the current clicked element
  tabs.forEach((tab) => {
    tab.classList.remove("tab-active");
  });
  const tab = e.target.closest(".tab");
  //   console.log(tab);
  // to avoid null being returned on the consle
  if (!tab) return;
  console.log(tab);
  tab.classList.add("tab-active");
  const currentPanel = tab.dataset.tab;

  // remove panel active class from all forms every time a button is clicked and add it to the current panel based on the button clicked

  authForms.forEach((form) => form.classList.remove("panel-active"));
  document
    .querySelector(`.panel-${currentPanel}`)
    .classList.add("panel-active");
});
