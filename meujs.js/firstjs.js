
function comecarContar(){
    let btn = document.getElementById('botao');
   
    let clock = document.getElementById('relogio');

    /*
    setInterval(function(){ 
       let min = clock.innerText;
       min--;
       clock.innerText = min;  
    }, 1000);
     

    */  

    const contadorDePomodoro = 25 * 60
    let contador = contadorDePomodoro;

    function calcula(quantidadeTotalSegundo){
        let minutos = Number.parseInt(quantidadeTotalSegundo / 60);
        let segundos = quantidadeTotalSegundo % 60

        return [minutos, segundos];
    }

    setInterval(function(){
        contador = contador - 1 ;
        const guardaValor = calcula(contador);

        clock.innerText = guardaValor.join(":");

        

    }, 1000);

   
}