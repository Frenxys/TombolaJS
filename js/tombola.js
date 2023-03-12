let numeri=[];//numeri generati
let numero=0;
function stampaTabellone(){
    document.write('<div class="grid-container">');
    for(let i=0; i<9; i++){
        for(let j=1; j<=10; j++){
            numero=j+(i*10);
            if(numeri.includes(numero)){
                document.write("<div id='occupato' >"+numero+"</div>");
            }else{
                document.write("<div id='libero' >"+numero+"</div>");
            }
            
        }
        //document.write("<br>");
    }
    document.write('</div>');
}
function pescaNumero(){
    do{
        n = Math.floor(Math.random() * 90) + 1;
    }while(numeri.includes(n))
    numeri.push(n);
    console.log(n);
    stampaTabellone();
}
stampaTabellone();
