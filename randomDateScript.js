let app = document.getElementById("app")

start()
function start(){
    let month = randomNr(0,12)
    let day = 0
    if(month == 2){
        day = randomNr(1,27)
    }
    else if(month%2==0){
        day = randomNr(1,30)
    }
    else{
        day = randomNr(1,31)
    }
    let date = new Date(randomNr(1975,2020),month,day,randomNr(0,24),randomNr(0,60))
    console.log(date)
    app.innerHTML=date
}

function randomNr(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}