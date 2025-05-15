
const Add = () => {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Please enter valid numbers!");
        return;
    }

    document.getElementById("dA").innerHTML = `Addition:${n1+n2}`;
};
const Sub = () => {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Please enter valid numbers!");
        return;
    }
    document.getElementById("dS").innerHTML = `Subtraction: ${n1-n2}`;
};
const Mul = () => {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Please enter valid numbers!");
        return;
    }
    document.getElementById("dM").innerHTML = `Multiplication: ${n1*n2}`;
};
const Div = () => {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Please enter valid numbers!");
        return;
    }
        document.getElementById("dD").innerHTML = `Division: ${n1/n2}`;

};


    