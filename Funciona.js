//Inicio do jogo
let gerado = Math.floor(Math.random() * 100) + 1;
function gerar(){
    let Pronto = document.getElementById("Pronto").innerHTML = "Ok então, qual numero eu estou pensando?";

}
//gameplay
function comparar(){
    let chute = Number(document.getElementById("chute").value);
    let resultado = document.getElementById("resultado");

    if( chute < 1 || chute > 100 ){
        let resultado = document.getElementById("resultado").innerHTML = "Um numero entre 1 e 100...";
    }
    
    else if(gerado === undefined){
        let resultado = document.getElementById("resultado").innerHTML = "você não pode chutar nada";    
    }

    else if(chute === gerado){
        let resultado = document.getElementById("resultado").innerHTML = "Na mosca! você é um telepata?";
    }

    else if( chute < gerado ){
        let resultado = document.getElementById("resultado").innerHTML = "ta com pena de chutar? tenta mais alto!";
    }

    else if( chute > gerado ){
        let resultado = document.getElementById("resultado").innerHTML = "ei ei, chuta mais baixo...";
    }
}
