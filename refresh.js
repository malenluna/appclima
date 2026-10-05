document.addEventListener("DOMContentLoaded", () => {
refreshDatos();
refreshId = setInterval(refreshDatos, 10000)
})
function refreshDatos(cont){
let valor = document.querySelector("#temp-int")
valor.innerHTML = (parseInt(valor.innerHTML) + 1)
}