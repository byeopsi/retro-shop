let dark = false;

const toggleMode = () => {
  if (dark){
    toggleBtn.classList.remove('dark');
    nav.classList.remove("dark");
    main.classList.remove("dark");
    leftContainer.classList.remove("dark");
    dark = false;
    toggleBtn.textContent="DAY";
  } else {
    toggleBtn.classList.add('dark');
    nav.classList.add("dark");
    main.classList.add("dark");
    dark = true;
    toggleBtn.textContent="DARK";
    leftContainer.classList.add("dark");
  }
}

const toggleBtn = document.querySelector("#toggle-btn");
toggleBtn.addEventListener("click", toggleMode);

const nav = document.querySelector("nav");
const main = document.querySelector("main");
const leftContainer = document.querySelector("#left-container");

