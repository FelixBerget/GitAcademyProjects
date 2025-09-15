function fixText(txt){
    textBack = ""
    firstTime = true
    for(let i=0;i<txt.length;i++){
        if(txt[i]==" "){
            
        }
        else{
            if(firstTime==true){
                textBack += txt[i].toUpperCase()
                firstTime=false
            } 
            else{
                textBack += txt[i]
            }
        }
    }
    return textBack
}
function emailFunc(txt){
    let isEmail = false;
    for(let i=0;i<txt.length;i++){
        if(txt[i]=="@"){
            isEmail=true
        }
    }
    return isEmail
}
function emailFunc2(txt){
    let hasAlpha = false;
    let hasPunc = false;
    let isEmail = false;
    for(let i=0;i<txt.length;i++){
        if(txt[i]=="@"){
            hasAlpha=true
        }
        if(txt[i]=="."){
            hasPunc=true
        }
    }
    if(hasAlpha==true & hasPunc==true){
        isEmail=true
    }
    return isEmail
}


let tx = "hello,guys";
function spiltText(){
    let endtext = ""
    splitTx = tx.split(",")
    for(let i=0;i<splitTx.length;i++){
        if(i==0){
            endtext+=splitTx[i]
        }
        else{
            endtext+=" "+ splitTx[i]
        }
        return endtext
    }
}