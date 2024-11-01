let caixas = document.querySelectorAll(".box");
let turno ="X";
let jogoAcabou = false;
caixas.forEach(e=> {
    e.innerHTML = ""
    e.addEventListener("click", () => {
        if (!jogoAcabou && e.innerHTML === "") {
            e.innerHTML = turno;
            verificarVitoria();
            verificarEmpate();
            mudarTurno();
        }
    })
})
function mudarTurno() {
if (turno === "X") {
    turno = "O";
    document.querySelector(".bg").style.left = "85px";
} else {
    turno = "X";
    document.querySelector(".bg").style.left = "0px";
}

}
function verificarVitoria() {
    let condicoesDeVitoria = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    for (let i = 0; i < condicoesDeVitoria.length; i++) {
        let v0 = caixas[condicoesDeVitoria[i][0]].innerHTML;
        let v1 = caixas[condicoesDeVitoria[i][1]].innerHTML;
        let v2 = caixas[condicoesDeVitoria[i][2]].innerHTML;
        if (v0 !="" && v0 === v1 && v0 === v2) {
            jogoAcabou = true;  
            document.querySelector("#resultados").innerHTML = turno + " venceu";
            document.querySelector("#jogar-novamente").style.display = "inline";
            for (let j = 0; j < 3; j++) {
                caixas[condicoesDeVitoria[i][j]].style.backgroundColor = "#08D9D6"
                caixas[condicoesDeVitoria[i][j]].style.color = "#000"
            }
        }
    }
}

function verificarEmpate() {
    if (!jogoAcabou) {
        let empate = true;
        caixas.forEach(e =>{
            if (e.innerHTML === "") empate = false;
        })
        if (empate) { 
            jogoAcabou = true;
            document.querySelector("#resultados").innerHTML = "Empate";
            document.querySelectorAll("#jogar-novamente").style.display = "inline";
        }
    }
}
document.querySelector("#jogar-novamente").addEventListener("click", () => {
    jogoAcabou = false;
    turno - "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#resultados").innerHTML = "";
    document.querySelector("#jogar-novamente").style.display = "none";

    caixas.forEach(e => {
        e.innerHTML = "";
        e.style.removeProperty("backgorund-color");
        e.style.color - "#fff";
    })
})