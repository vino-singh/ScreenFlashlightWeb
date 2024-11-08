const screen = document.getElementById('flashlight');
const button = document.getElementById('colorButton');
const colors = ["white", "red", "green", "blue", "yellow"];
let colorIndex = 0;

button.addEventListener("click", () => {
    screen.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});
