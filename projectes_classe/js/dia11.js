function dias() {
    let hoy = new Date();
    let inicio = new Date('2023-01-01');
    let diffDias = Math.floor((hoy-inicio)/(1000*60*60*24));
    let diasdelaño = hoy.getFullYear % 4 == 0 ? 366 : 365;
    let porcenDia = (hoy.getHours()*3600 + hoy.getMinutes()*60 + hoy.getSeconds())/(24*3600);
    let porcentajeTranscurrido = ((parseInt(diffDias)+parseFloat(porcenDia))/diasdelaño);


    // 1.
    console.log(`Hoy es ${hoy.getDate()} del mes ${hoy.getMonth()+1} del año ${hoy.getFullYear()}`);
    // 2.
    console.log(`El número de semana actual es ${Math.ceil(diffDias/7)}`);
    // 3. 
    console.log(`El porcentaje de días transcurridos del año es ${(porcentajeTranscurrido*100).toFixed(2)}%`);
    // 4.
    console.log(`EL porcentaje de días que quedan en el año es ${(100-(porcentajeTranscurrido*100)).toFixed(2)}%`);
    // 5.
    console.log(`Ahora son las ${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`);
    // 6.
    console.log(`El porcentaje del día transcurrido es ${(porcenDia*100).toFixed(2)}%`);
    // 7.
    console.log(`El porcentaje del día restante es ${(100-(porcenDia*100)).toFixed(2)}%`);

}

/*
    codigo de barras, puede ser de 8 o 13 digitos. 
    si da un numero menor a 8 digitos, se llena de 0 a la izquierda
    lo mismo si es mayor a 8, llena hasta 13
    si es mas de 13 es invalido

    el ultimo digito es de control
    12345 -> 00012345   // 5 es control
        se mira de atras hacia adelante, los numeros en posicion impar (o sea el 2 y 4)
        se multiplican por 3, y los de posicion par se multiplican por 1. 
        1*1 + 2*3 + 3*1 + 4*3 = 22
        el digito de control es la diferencia entre el resultado y el proximo multiplo de 10
        30 - 22 = 8     8 =/= 5     numero incorrecto
*/
function codigo() {
    let prompi = prompt("Ingrese un número");
    let acum = 0;
    let control = 1;
    let lastDigit = parseInt(prompi[prompi.length-1]);
    if (null == prompi) {
        console.log('Número no válido');
        return;
    }
    if (prompi.length < 8 ) {
        prompi = prompi.padStart(8, '0');
    } else if (prompi.length==8) {
        //
    } else if (prompi.length<13) {
        prompi = prompi.padStart(13, '0');
    } else if (prompi.length==13) {
        //
    } else if (prompi.length>13) {
        console.log('Número no válido');
        return;
    }
 
    //codigos 
    for (let i= prompi.length-2; i>=0; i--, control++) {
        if (control % 2 == 1) {
            acum += parseInt(prompi[i])*3;
        } else {
            acum += parseInt(prompi[i]);
        }
    }
   
    let check = acum % 10;
    if (check == 0) {
        check = 10;
    }

    if (10-check == lastDigit) {
        console.log(`${prompi} -> es correcto`);
    } else {
        console.log(`${prompi} -> es incorrecto`);
    }
}