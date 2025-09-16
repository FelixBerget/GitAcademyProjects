let app = document.getElementById("app")

start()
function start(){
    let date = new Date(randomNr(1975,2020),randomNr(0,12),randomNr(1,27),randomNr(0,24),randomNr(0,60))
    console.log(date)
    app.innerHTML=date
}

function randomNr(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}