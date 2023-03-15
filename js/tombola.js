let numeri=[];//numeri generati
let numero=0;
tabella=document.getElementById("tabella")
function stampaTabellone(){
    for(let i=0; i<9; i++){
        for(let j=1; j<=10; j++){
            numero=j+(i*10);
            if(numeri.includes(numero)){
                tabella.innerHTML+="<div id='occupato' >"+numero+"</div>";
            }else{
                tabella.innerHTML+="<div id='libero' >"+numero+"</div>";
            }
        }
    }
}
function pescaNumero(){
    let n = Math.floor(Math.random() * 90) + 1;
    if(!numeri.includes(n)){
        numeri.push(n);
        console.log(n);
        tabella.innerHTML="";
        stampaTabellone();
    }else{pescaNumero()}
}
function reset(){
    numeri=[];
    tabella.innerHTML="";
    stampaTabellone();
}
function rossi(){
    for(let i=1; i<=90; i++){
        numeri.push(i);
    }
    tabella.innerHTML="";
    stampaTabellone();
}
stampaTabellone();

