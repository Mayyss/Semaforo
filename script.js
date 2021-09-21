"use strict"
//Criando constantes
const semaforo = document.getElementById("semaforo")
let idIntervalo

//Funções

function luzVermelho(){
    semaforo.src = "img/vermelho.png"
}

function luzAmarelo(){
    semaforo.src = "img/amarelo.png"
}

function luzVerde(){
    semaforo.src = "img/verde.png"
}

//Funções para intercalar as trocas de luzes
function vermelhoLuz(){
    return semaforo.src.includes ("vermelho")
}

function amareloLuz(){
    return semaforo.src.includes ("amarelo")
}

//Função para parar as trocas de luzes
function parar(){
    clearInterval(idIntervalo)
}

//Função para trocar as luzes
function trocarLuz(){
    if(amareloLuz()){
        luzVerde()
    }
    else if(vermelhoLuz()){
        luzAmarelo()
    }
    else {
        luzVermelho()
    }
}

//Função que executa a troca e o parar
function luzAutomatica(){
    const auto = document.getElementById("btnAutomatico")
    if (auto.textContent == "Automático"){
        idIntervalo = setInterval(trocarLuz, 1000)
        auto.textContent = "Parar"
    }
    else{
        parar()
        auto.textContent = "Automático"
    }
     
}

// Eventos
document.getElementById("btnVermelho")
    .addEventListener("click",luzVermelho)
document.getElementById("btnAmarelo")
    .addEventListener("click", luzAmarelo)
document.getElementById("btnVerde")
    .addEventListener("click", luzVerde)
document.getElementById("btnAutomatico")
    .addEventListener("click", luzAutomatica)