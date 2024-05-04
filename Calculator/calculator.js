let displayValue = '0';
function updateDisplay() {
 const displayElement = document.getElementById('display');
 displayElement.textContent = displayValue;
 displayElement.style.textAlign = 'left'; 
}
function clearDisplay() {
 displayValue = '0';
 updateDisplay();
}
function toggleSign() {
 displayValue = (parseFloat(displayValue) * -1).toString();
 updateDisplay();
}
function percentage() {
 displayValue = (parseFloat(displayValue) / 100).toString();
 updateDisplay();
}
function appendCharacter(character) {
 if (displayValue === '0' || displayValue === '-0') {
 displayValue = character;
 } else {
 displayValue += character;
 }
 updateDisplay();
}
function calculateResult() {
 try {
 displayValue = eval(displayValue).toString();
 } catch (error) {
 displayValue = 'Error';
 }
 updateDisplay();
}
document.addEventListener('DOMContentLoaded', function () {
 updateDisplay();
});