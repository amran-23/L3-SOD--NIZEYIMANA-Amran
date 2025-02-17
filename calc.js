function calculate(operation) {
    let num1 = parseFloat(document.getElementById("rr").value);
    let num2 = parseFloat(document.getElementById("rt").value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero";
                break;
            default:
                result = "Invalid operation";
        }
    }

    document.getElementById("result").innerText = "RESULT: " + result;
}
