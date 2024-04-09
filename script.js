const formular = document.querySelector("form")
const policko = document.querySelector("#policko")

const mojeFunkce = (event) => {
    event.preventDefault()
    const email = policko.value
    formular.textContent = "Děkujeme za Váš zájem, časopis očekávejte brzy ve své schránce."
}

const mojeFunkce2 = (event) => {
    console.log("change", event, policko, policko.value.length)
    if (policko.value.length==0 || !policko.value.includes("@")) {
        policko.classList.add("red")
    } else {
        policko.classList.remove("red")
    }
}

policko.addEventListener("input", mojeFunkce2)