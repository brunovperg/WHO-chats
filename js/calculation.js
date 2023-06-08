import { boys, girls } from "./charts.js";

const radio = document.querySelectorAll("input[type='radio']");
const numbers = document.querySelectorAll("input[type='number']")
const options = document.getElementById("options");
const charts = document.getElementById("chart")
const resultados = document.querySelector(".resultado")
const textoResultado = document.querySelector(".texto-resultado")


resultados.hidden = true

let gender = girls

radio[0].checked = true

charts.selectedIndex = -1;

options.addEventListener("click", (evento) => {
    if (evento.target.classList == "girls") {
        gender = girls;
    } else if (evento.target.classList == "boys") {
        gender = boys;
    }
})

window.addEventListener("click", createElement)
window.addEventListener("touchstart", createElement)
options.addEventListener("click", createElement)
options.addEventListener("touchstart", createElement)
charts.addEventListener("click", createElement)
charts.addEventListener("touchstart", createElement)
charts.addEventListener("change", createElement)



function createElement() {
    const checkedRadio = document.querySelector("input[type='radio']:checked")
    let years = (document.getElementById("anos").value)
    let months = (document.getElementById("meses").value)
    const totalMonths = ((Number(years) * 12) + Number(months))
    const currentChart = charts.value
    if (years == '') {
        years = 0
    }
    if (months == '') {
        months = 0
    }
    if (!years && !months) {
        resultados.innerHTML = ''
        textoResultado.innerHTML = ''
        resultados.hidden = true
    } else {
        resultados.innerHTML = ''
        try {
            textoResultado.innerHTML = `
           <strong> ${charts.options[charts.selectedIndex].text}</strong> <strong id="unit"></strong> para <strong>${checkedRadio.attributes.dataname.value}</strong> de ${years} anos e ${months} meses
            `
            const unit = document.getElementById("unit");
            if (charts.options[charts.selectedIndex].text == 'Peso') {
                unit.innerHTML = "(Kg)"

            } else {
                unit.innerHTML = '(cm)'
            }

        } catch {

        }
        try {
            resultados.innerHTML = `
                <tr>
                <th class="th-1">-3</th>
                <th class="th-2">-2</th>
                <th class="th-3">-1</th>
                <th class="th-4">0</th>
                <th class="th-5">1</th>
                <th class="th-6">2</th>
                <th class="th-7">3</th>
                </tr>
                <tr>
                <td class="td-1">${gender[currentChart][totalMonths][0]}</td>
                <td class="td-2">${gender[currentChart][totalMonths][1]}</td>
                <td class="td-3">${gender[currentChart][totalMonths][2]}</td>
                <td class="td-4">${gender[currentChart][totalMonths][3]}</td>
                <td class="td-5">${gender[currentChart][totalMonths][4]}</td>
                <td class="td-6">${gender[currentChart][totalMonths][5]}</td>
                <td class="td-7">${gender[currentChart][totalMonths][6]}</td>
                </tr>
`
            resultados.hidden = false
        } catch {

            resultados.hidden = true
            textoResultado.innerHTML = 'Selecione uma idade entre 0-5 anos'
            resultados.innerHTML = ''
        }

    }
}

