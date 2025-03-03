let display = document.querySelector('.display')

function showInDisplay(value) {
    display.value += value
}

function clearDisplay() {
    display.value = ''
}

function calculate() {
    if (display.value == '') {
        alert("Expression Empty")
    } else {
        display.value = eval(display.value)
    }
}