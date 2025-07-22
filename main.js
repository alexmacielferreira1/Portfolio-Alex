const dataDoevento = new Date("Mar 25, 2026 00:00:00");
const timeStampDoEvento = dataDoevento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000*60*60*24;
    const horaEmMs = 1000*60*60;
    const minutosEmMs = 1000*60;
    const segundosEmMs = 1000;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / segundosEmMs);

    document.getElementById('contador').innerHTML = `${diasAteOEvento} dias, ${horasAteOEvento} horas, ${minutosAteOEvento} minutos, e ${segundosAteOEvento} segundos`;

    if (distanciaAteOEvento< 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = `0 dias! o evento já começou ou terminou!`
    }
}, 1000);