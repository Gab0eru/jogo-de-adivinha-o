//Inicio do jogo
function start(){
    let numEscolhido = Math.floor(Math.random() * 100) + 1;
}
//
function verficar(){
    if(chute < 1 || chute > 100){
        resultado.textContent = "Qual parte de entre 1 até 100 você não entendeu1!?"
        return;
    }

    else if( numEscolhido == chute){
        resultado.textContent = "Na mosca!";
    }

    else if(numEscolhido != chute){
        resultado.textContent = "tente de novo";
    }

    DocumentTimeline.getElementById("numEscolhido").innerHTML = " "; + numEscolhido.toFixed(1);
}