function funcioncita() {
    alert("Hola Jorge");
};

function raulito() {
    alert("He dicho que no pases, atrevido");
};

function michi() {
    alert("deja al michi en paz >:(");
}

function alerta2() {
    alert("hola que tal por que ingresas texto aqui?");
}

function getVal() {
    const val = document.querySelector('input').value;
    //console.log(val);
    alert(val);
}

function tabla() {
    const val = document.getElementById('multi').value;
    for (var i = 1; i<11; i++) {
        console.log(val + "x" + i + "=" + i*val);
    }
}