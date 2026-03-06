AOS.init({
  duration: 1000,
  once: true,
});

const button = document.getElementById("modeToggle");

button.onclick = () => {
  document.body.classList.toggle("dark");
};
