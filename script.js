const screen = document.getElementById('flashlight');
const colorWheelContainer = document.getElementById('colorWheelContainer');
const colorWheel = document.getElementById('colorWheel');

// Function to expand the color wheel on touch or mouse interaction
function expandColorWheel() {
    colorWheelContainer.classList.add("expanded");
}

// Function to shrink the color wheel when interaction ends
function shrinkColorWheel() {
    colorWheelContainer.classList.remove("expanded");
}

// Function to calculate color based on angle
function updateColor(event) {
    // Use touch position if available, else use mouse position
    const isTouchEvent = event.touches && event.touches[0];
    const clientX = isTouchEvent ? event.touches[0].clientX : event.clientX;
    const clientY = isTouchEvent ? event.touches[0].clientY : event.clientY;

    // Calculate the angle based on position around the center of the color wheel
    const rect = colorWheel.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;

    // Calculate angle in degrees, adjusting so 0 degrees points to the top of the wheel (red)
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    angle = (angle + 90 + 360) % 360; // Adjust by +90 degrees and normalize to 0-360 range

    // Map angle to hue for color change
    const hue = angle; // In HSL, hue directly correlates to degrees on the color wheel
    screen.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}

// Event listeners for touch and mouse interactions

// Expand color wheel on touchstart or mousedown
colorWheelContainer.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Prevents any unintended scrolling or zooming on touch
    expandColorWheel();
});
colorWheelContainer.addEventListener("mousedown", expandColorWheel);

// Update color on touchmove or mousemove
colorWheel.addEventListener("touchmove", updateColor);
colorWheel.addEventListener("mousemove", updateColor);

// Shrink color wheel on touchend or mouseup
colorWheelContainer.addEventListener("touchend", shrinkColorWheel);
colorWheelContainer.addEventListener("mouseup", shrinkColorWheel);
