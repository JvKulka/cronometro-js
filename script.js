window.onload = function () {
    
    // variaveis
    let segundos = 00;
    let milesimos = 00;
    let somaMilesimos = document.getElementById("milesimos");
    let somaSegundos = document.getElementById("segundos");
    let botaoStart = document.getElementById("botao-start");
    let botaoStop = document.getElementById("botao-stop");
    let botaoReset = document.getElementById("botao-reset");
    let Interval ; 

    // atribuição da ação dos botoes
    botaoStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTime, 10);
    }

    botaoStop.onclick = function() {
        clearInterval(Interval);
    }

    botaoReset.onclick = function() {
        clearInterval(Interval);
        milesimos = "00";
        segundos = "00";
        somaMilesimos.innerHTML = milesimos;
        somaSegundos.innerHTML = segundos;
    }

    // função de execução do cronometro
    function startTime () {
        milesimos++;

        if(milesimos <= 9) {
            somaMilesimos.innerHTML = "0" + milesimos;
        }

        if (milesimos > 9) {
            somaMilesimos.innerHTML = milesimos
        }

        if (milesimos > 99) {
            segundos++;
            somaSegundos.innerHTML = "0" + segundos;
            milesimos = 0;
            somaMilesimos.innerHTML = "0" + 0;
        }

        if (segundos > 9) {
            somaSegundos.innerHTML = segundos;
        }

    }

}