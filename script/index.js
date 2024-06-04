// Get the input fields and button
const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');
const convertBtn = document.getElementById('convert-btn');
const hexOutput = document.getElementById('hex-output');
// Add event listener to the button
convertBtn.addEventListener('click', convertToHex);
// Function to convert RGB to HEX
function convertToHex() {
    // Get the RGB values from the input fields
    const red = parseInt(redInput.value, 10);
    const green = parseInt(greenInput.value, 10);
    const blue = parseInt(blueInput.value, 10);
    // Convert RGB to HEX
    const hex = `#${rgbToHex(red)}${rgbToHex(green)}${rgbToHex(blue)}`;
    // Display the HEX value
    hexOutput.textContent = hex;
}

// Helper function to convert a single RGB value to HEX
function rgbToHex(rgb) {
    // Convert the RGB value to a hexadecimal string
    const hex = rgb.toString(16);
    // Add a leading zero if the hexadecimal string is only one character
    if (hex.length === 1) {
        return `0${hex}`;
    }
    return hex;
}