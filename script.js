const screen = document.getElementById('flashlight');
const colorWheelButton = document.getElementById('colorWheelButton');
const colorSlider = document.getElementById('colorSlider');

// Show the color slider when the color wheel button is clicked
colorWheelButton.addEventListener("click", () => {
    colorSlider.style.display = colorSlider.style.display === 'none' ? 'block' : 'none';
});

// Convert hue to RGB
function hueToRgb(hue) {
    const adjustedHue = hue % 360; // Keep within 0-360
    const sector = Math.floor(adjustedHue / 60); // 60 degrees per color transition
    const fraction = (adjustedHue / 60) - sector;

    const p = 0;
    const q = 1 - fraction;
    const t = fraction;

    switch (sector) {
        case 0: return `rgb(255, ${Math.round(t * 255)}, 0)`;          // Red to Yellow
        case 1: return `rgb(${Math.round(q * 255)}, 255, 0)`;          // Yellow to Green
        case 2: return `rgb(0, 255, ${Math.round(t * 255)})`;          // Green to Cyan
        case 3: return `rgb(0, ${Math.round(q * 255)}, 255)`;          // Cyan to Blue
        case 4: return `rgb(${Math.round(t * 255)}, 0, 255)`;          // Blue to Magenta
        case 5: return `rgb(255, 0, ${Math.round(q * 255)})`;          // Magenta to Red
        default: return "rgb(255, 255, 255)";                          // Fallback to white
    }
}

// Update the screen color as the slider moves
colorSlider.addEventListener("input", () => {
    const hue = colorSlider.value;
    screen.style.backgroundColor = hueToRgb(hue); // Convert hue to RGB
});

// Hide the slider when the user releases the slider and set the color
colorSlider.addEventListener("change", () => {
    colorSlider.style.display = 'none'; // Hide the slider
});
