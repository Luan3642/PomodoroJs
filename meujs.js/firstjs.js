
function comecarContar(){
    var btn = document.getElementById('botao');
    var relogio = new Date();
    var atualiza = relogio.getMinutes();
    var clock = document.getElementById('relogio');

    setInterval(function(){
        clock.innerHTML = atualiza;
    })

    
    
    
        
}