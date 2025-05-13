
function displayData() {
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;

    const output = document.getElementById("output");
    output.textContent = ${email} , ${number}
}