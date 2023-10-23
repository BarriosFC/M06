function frases() {
    let frase1 = prompt("Ingresa primera frase");
    let frase2 = prompt("Ingresa segunda frase");

    if (frase1.length == frase2.length) {
        console.log("Las frases tienen la misma longitud");
    } else {
        console.log((frase1.length>frase2.length ? "La primera" : "La segunda") + " frase es más larga");
    }
}

function repeticiones() {
    let frase = prompt("Ingrese frase");
    let letra = prompt("Letra a comprobar?");
    let contador = 0;

    for (let i=0; i<frase.length; i++) {
        if(frase[i] == letra) contador++;
    }
    if (contador>1 && contador<5) {
        console.log(`La letra '${letra}' está ${contador} veces en el texto.`);
    } else {
        console.log(`La letra ${letra} está menos de 2 o más de 4 veces en el texto`);
    }
}

function borra() {
    let texto = prompt("Ingrese un texto");
    let char = parseInt(prompt("Posición del caracter a eliminar?"));
    let texto2 = "";
    
    for (let i=0; i<texto.length; i++) {
        if (i != char) {
            texto2 += texto[i];
        }
    }
    document.write(texto2);
}

function multiText() {
    let text = prompt("Ingrese un texto");
    let regexp = /[aeiouáéíóúàèìòùäëïöü]/gi;

    document.write(`Majúsculas: ${text.toUpperCase()}<br/>`);
    document.write(`Minúsculas: ${text.toLowerCase()}<br/>`);
    document.write(`Longitud: ${text.length}<br/>`);
    document.write(`Número de palabras: ${text.split(" ").length}<br/>`);
    document.write(`Las vocales son: ${text.match(regexp)}<br/>`);
    document.write(`El número de vocales es: ${text.match(regexp).length}<br/>`);
    document.write(`El texto reduciéndose:<br/>`);
    reductor(text);
}

function reductor(texto) {
    let index = 0;
    for(let i=0; i<texto.length; i++) {
        document.write(`${texto.substring(index)}<br/>`);
        index++;
    }
}


function timeOut() {
    let hora = prompt("HH:MM?");
    let horaArray = hora.split(":");
    if (parseInt(horaArray[0])>23 || parseInt(horaArray)[0]<0 || 
            parseInt(horaArray[1])>59 || parseInt(horaArray[1])<0) {
        return console.log("Hora inválida");
    }

    let minutosTotales = 60 * 24;

    let minutosActuales = parseInt(horaArray[0]) * 60 + parseInt(horaArray[1]);

    if (minutosTotales - minutosActuales == 1440) {
        console.log("Feliz año nuevo!!!");
    } else {
        console.log(`Faltan ${minutosTotales-minutosActuales} minutos para año nuevo`);
    }
}