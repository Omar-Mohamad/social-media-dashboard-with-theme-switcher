const checkBox = document.querySelector("#switcher");

checkBox.addEventListener("click", () => {
  if (checkBox.checked) {
    transition();
    document.body.classList.add("dark");
    document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
  } else {
    transition();
    document.body.classList.remove("dark");
    document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
  }
});

const transition = () => {
  document.documentElement.classList.add("transition");
  setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
