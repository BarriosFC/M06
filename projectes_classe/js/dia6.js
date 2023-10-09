function telefonica() {
    let prompi1 = prompt("Duración (horas)?");
    let prompi2 = prompt("Duración (minutos)?");
    let prompi3 = prompt("Duración (segundos)?");

    let costeBasico = 0.10;

    let costeMinutos = parseInt(prompi1)*60 + parseInt(prompi2) + parseInt(prompi3)/60;

    let costeFinal = (costeMinutos *0.05 + costeBasico).toFixed(2);

    console.log(`Cost total: ${costeFinal}€`);
}


function colores() {
    let rojo = parseInt(prompt("Rojo? (0-255)"));
    let verde = parseInt(prompt("Verde? (0-255)"));
    let azul = parseInt(prompt("Azul? (0-255)"));

    console.log(`El valor Hexadecimal de (${rojo},${verde},${azul}) es 
                #${toHexa(rojo)}${toHexa(verde)}${toHexa(azul)}`);
}

function toHexa(numero) {
    let jorge = numero.toString(16);
    return jorge.length == 2 ? jorge : "0" + jorge;
}

function dinerito() {
    var precio = parseFloat(prompt("Precio?"));
    var ingreso = parseFloat(prompt("Dinero entregado?"));

    var vuelto = ingreso - precio;
    let resto = 0;

    const billetes = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let cantidades = [  0,   0,   0,  0,  0,  0, 0, 0, 0,   0,   0,   0,    0,    0,    0];

    console.log("Su vuelto es:");
    for(i = 0; i<cantidades.length; i++) {  // 0.02 es 1 de 0.01
        if (vuelto >= billetes[i]) {
            resto = vuelto % billetes[i];
            cantidades[i] = Math.floor(vuelto/billetes[i]);
            vuelto = resto.toFixed(2);
        }
        if (cantidades[i]>0) { console.log(`${cantidades[i]} de ${billetes[i]}`);}
    }
    console.log(`Total: ${(ingreso-precio).toFixed(2)}`);
}