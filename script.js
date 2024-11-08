const screen = document.getElementById('flashlight');
const colorSlider = document.getElementById('colorSlider');

// Update the screen color as the slider moves
colorSlider.addEventListener("input", () => {
    const hue = colorSlider.value;
    screen.style.backgroundColor = `hsl(${hue}, 100%, 50%)`; // Using HSL for smooth color changes
});
