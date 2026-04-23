function gerar(){
   let gerado = Math.floor(Math.random() * 100) + 1;
   document.getElementById("gerado").innerHTML = "resultado " + gerado;
}