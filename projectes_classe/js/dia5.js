function converter() {
    let prompisaurio = prompt("Ingrese C ó F (valor que introducirá luego))");
    let prompinodon = prompt("Ingrese la temperatura");

    if (prompisaurio == "C") { 
        let fDegrees = ((9/5)* parseInt(prompinodon) +32).toFixed(1);
        console.log(`${prompinodon}ºC son ${fDegrees}ºF`);
    } else if (prompisaurio == "F") { 
        let cDegrees = ((parseInt(prompinodon)-32)/(9/5)).toFixed(1);            ;
        console.log(`${prompinodon}ºF son ${cDegrees}ºC`);
    } else {
        console.log("Letra no válida");
    }
}

function numbers() {
    let prompi = parseInt(prompt("Ingrese un número en sistema decimal"));

    let temp1 = prompi;
    let temp2 = prompi;
    let temp3 = prompi;

    let tempvar1 = "";
    let tempvar2 = "";
    let tempvar3 = "";


    while(temp1>1) {
        tempvar1 = temp1%2 + tempvar1;
        temp1 = Math.floor(temp1/2);  
    }
    tempvar1 = "" + temp1 + tempvar1 + "";


    while(temp2>7) {
        tempvar2 = temp2%8 + tempvar2;
        temp2 = Math.floor(temp2/8);  
    }
    tempvar2 = "" + temp2 + tempvar2 + "";


    while(temp3>15) {
        tempvar3 = hexa(temp3%16) + tempvar3;
        temp3 = Math.floor(temp3/16);
    }
    tempvar3 = "" + hexa(temp3) + "" + tempvar3 + "";


    console.log(`${prompi} en binario es ${tempvar1}`);
    console.log(`${prompi} en octal es ${tempvar2}`);
    console.log(`${prompi} en hexadecimal es ${tempvar3}`);
}


function hexa(numero) {
    switch (numero) {
        case 10: return "A";
        case 11: return "B";
        case 12: return "C";
        case 13: return "D";
        case 14: return "E";
        case 15: return "F";
        default: return numero;
    }
}


function multiBase(numero, base) {
    let tempvar = "";

    while(numero>(base-1)) {
        tempvar = hexa(numero%base) + tempvar;
        numero = Math.floor(numero/base);
    }
    tempvar = "" + hexa(numero) + "" + tempvar + "";
    return tempvar;
}

function tresEnUno() {
    let prompi = parseInt(prompt("Ingrese un número en base decimal"));

    console.log(`${prompi} en base 2 es ` + multiBase(prompi, 2));
    console.log(`${prompi} en base 8 es ` + multiBase(prompi, 8));
    console.log(`${prompi} en base 16 es ` + multiBase(prompi, 16));
}

