let app = document.getElementById("app")

start()
function start(){
app.innerHTML = `
<div id="s">This app uses a script file</div>
<div id="g">We are trying it with different styles</div>
<img src="" alt="must have forgot the image"/>
<button onclick="redo()">Click to change view</button> `
}               

function redo(){
    app.innerHTML=`
<div id="s">This app uses a script file</div>
<div id="g">Wow a change</div>
<img src="" alt="no image unfortunatley"/>
<button onclick="again()">Click to change view</button>                `
}

function again(){
    app.innerHTML=`
<div id="s">This app uses a script file as said before</div>
<div id="g">Another change!</div>
<img src="" alt="yeah there is no image"/>
<button onclick="start()">Click to change view</button>                `
}

function giveRapVerse(){
    return "I like to rap, snap and own a cap. Going to Italy is silly."
}
function changeColor(){
    let s = document.getElementById("s")

    s.style.color="yellow"
}

function checkIfStyleHasChanged(){
    if(s.style.color=="yellow"){
        return true
    }
    else{
        return false
    }
}