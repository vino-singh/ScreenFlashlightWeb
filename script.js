const screen = document.getElementById('flashlight');
const colorWheelContainer = document.getElementById('colorWheelContainer');
const colorWheel = document.getElementById('colorWheel');

// Expand the color wheel on touchstart (for mobile) or click (for desktop)
colorWheelContainer.addEventListener("touchstart", (event) => {
    event.preventDefault(); // Prevent any default touch actions
    colorWheelContainer.classList.add("expanded");
});

colorWheelContainer.addEventListener("mousedown", () => {
    colorWheelContainer.classList.add("expanded");
});

// Update the screen color based on the angle of thumb/mouse position on the color wheel
function updateColor(event) {
    // Get the touch point or mouse point
    const rect = colorWheel.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    let clientX, clientY;

    if (event.touches && event.touches[0]) {
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
    } else {
        clientX = event.clientX;
        clientY = event.clientY;
    }

    const dx = clientX - centerX;
    const dy = clientY - centerY;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI); // Convert radians to degrees
    const hue = (angle + 360) % 360; // Convert angle to a hue value (0 - 360)

    // Update the screen color based on the hue
    screen.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
}

// Handle touchmove and mousemove to update color as the thumb/finger moves around the wheel
colorWheel.addEventListener("touchmove", updateColor);
colorWheel.addEventListener("mousemove", updateColor);

// Shrink the color wheel back on touchend or mouseup
function resetWheel() {
    colorWheelContainer.classList.remove("expanded");
}

// Reset the wheel on touchend (for mobile) or mouseup (for desktop)
colorWheelContainer.addEventListener("touchend", resetWheel);
colorWheelContainer.addEventListener("mouseup", resetWheel);
