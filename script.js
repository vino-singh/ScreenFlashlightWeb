const screen = document.getElementById('flashlight');
const colorWheelContainer = document.getElementById('colorWheelContainer');
const colorWheel = document.getElementById('colorWheel');

// Expand the color wheel when clicked
colorWheelContainer.addEventListener("click", () => {
    colorWheelContainer.classList.toggle("expanded");
});

// Update color based on the angle of thumb/mouse position on the color wheel
colorWheel.addEventListener("mousemove", (event) => {
    if (!colorWheelContainer.classList.contains("expanded")) return;

    const rect = colorWheel.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate the angle of the mouse relative to the center of the color wheel
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert radians to degrees

    // Convert the angle to a hue value (0 - 360)
    const hue = (angle + 360) % 360;
    screen.style.backgroundColor = `hsl(${hue}, 100%, 50%)`; // Update screen color
});
