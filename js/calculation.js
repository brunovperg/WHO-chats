import { boys, girls } from "./charts.js";

const radio = document.querySelectorAll("input[type='radio']");
const options = document.getElementById("options");
const charts = document.getElementById("chart")
const years =Number(document.getElementById("anos").value)
const months = Number(document.getElementById("meses").value)
const totalMonths = (years * 12) + months

let gender = ""
let currentChart = ""

radio.forEach((element) => {
    element.checked = false;
});

charts.selectedIndex = -1;

options.addEventListener("click", (evento) => {
    if (evento.target.classList == "girls") {
        gender = girls;
    } else if (evento.target.classList == "boys") {
        gender = boys;
    }
})
charts.addEventListener("click", e => currentChart = e.target.value)

window.addEventListener("click", e => console.log())

console.log(totalMonths)