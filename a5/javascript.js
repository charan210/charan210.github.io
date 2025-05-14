const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => (b !== 0 ? (a / b).toFixed(2) : "Cannot divide by zero");

const calc = () => {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Please enter valid numbers!");
        return;
    }

    document.getElementById("dA").innerHTML = `Addition: ${add(n1, n2)}`;
    document.getElementById("dS").innerHTML = `Subtraction: ${sub(n1, n2)}`;
    document.getElementById("dM").innerHTML = `Multiplication: ${mul(n1, n2)}`;
    document.getElementById("dD").innerHTML = `Division: ${div(n1, n2)}`;
};
