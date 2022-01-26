const visor = document.querySelector("div.campo_minado_bg");
const start = document.querySelector("button#start");

start.addEventListener("click", ()=>{
    visor.classList.remove("inativo");
    start.classList.add("inativo");
});

let al;
function bombSelect(){
    al = parseInt(Math.random()*100);
    return al;
}
let campos = [];
for (let i = 0; i < 105; i++) {
    campos[i] = document.createElement("div");
    campos[i].classList.add("campo");
}
campos[bombSelect()].classList.add("bomb");
campos.forEach((e,p)=>{
    visor.appendChild(e);
});

const campos_div = document.querySelectorAll("div.campo");

function resetGame(){
    campos_div.forEach((e)=>{
        e.classList.remove("point");
        e.classList.remove("bomb");
    });
}

function markedPoint(div){
    if(div.classList.contains("bomb")){
        alert("Fim de Jogo");
        resetGame();
    }else{
        div.classList.add("point");
        div.removeEventListener("click", ()=>{ markedPoint(e); });
    }
}

campos_div.forEach((e)=>{
    e.addEventListener("click", ()=>{ markedPoint(e); });
});