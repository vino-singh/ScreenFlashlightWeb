const screen = document.getElementById('flashlight');
const colorWheelButton = document.getElementById('colorWheelButton');
const colorSlider = document.getElementById('colorSlider');

// Show the color slider when the color wheel button is clicked
colorWheelButton.addEventListener("click", () => {
    colorSlider.style.display = colorSlider.style.display === 'none' ? 'block' : 'none';
});

// Update the screen color as the slider moves
colorSlider.addEventListener("input", () => {
    const hue = colorSlider.value;
    screen.style.backgroundColor = `hsl(${hue}, 100%, 50%)`; // Using HSL for reliable color changes
});

// Hide the slider when the user releases the slider and set the color
colorSlider.addEventListener("change", () => {
    colorSlider.style.display = 'none'; // Hide the slider after selection
});
