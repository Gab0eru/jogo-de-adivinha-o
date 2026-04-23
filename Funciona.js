//Inicio do jogo
    let gerado;
function gerar(){
    let gerado = Math.floor(Math.random() * 100) + 1;
    console.log ("numero gerado:", gerado);
    let Pronto = document.getElementById("Pronto").innerHTML = "Pronto";
}
//gameplay
function verificar() {
    let chute = Number(document.getElementById("chute").value);
    let resultado = document.getElementById("resultado");


    if( chute < 1 || chute > 100 ){
        resultado.textContent = "entre 1 até 100..."
        return;
    }
    
    else if(chute === undefined){
        resultado.textContent = "clique em 'Vamos!' primeiro"
        return;
    }

    else if(chute === gerado){
        resultado.textContent = "Excelente! você é um telepata?"
    }

    else if( chute < gerado ){
        resultado.textContent = "ta com pena de chutar? tenta mais alto meu bom!";
    }

    else if( chute > gerado ){
        resultado.textContent = "chuta mais baixo meu nengue...";
    }
//saida
}
