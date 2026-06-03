const input = document.getElementById("input");
const result = document.getElementById("result");

input.addEventListener("input", () => {
    let pounds = Number(input.value);

    if (pounds === 0 || input.value === "") {
        result.innerHTML = "0";
    } else {
        let kg = pounds * 0.453592;
        result.innerHTML = kg.toFixed(2) + " Kg";
    }
});