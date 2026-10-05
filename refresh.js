document.addEventListener("DOMContentLoaded", () => {
    refreshDatos();
    refreshId = setInterval(refreshDatos, 10000)
})
 
function refreshDatos(cont){
    let valor = document.querySelector("#temp-int")
    valor.innerHTML = (parseInt(valor.innerHTML) + 1)
 
    let hum = document.querySelector("#hum-int")
    hum.innerHTML = (parseInt(hum.innerHTML) + 1)
 
    let wind = document.querySelector("#wind-int")
    wind.innerHTML = (parseInt(wind.innerHTML) + 1)
 
    let fire = document.querySelector("#fire-int")
    fire.innerHTML = (parseInt(fire.innerHTML) + 1)
}
 