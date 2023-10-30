function adivina() {
    const jorge = Math.floor(Math.random()*100);
    let contador = 1;
    let prompi;
    let control = false;
    do {
        prompi = parseInt(prompt("Ingrese un número entero entre 1 y 100"));
        if (prompi == jorge) {
            control = true;
            break;
        }
        if(prompi) {
            console.log(prompi>jorge ? `Jorge es menor que ${prompi}` : `Jorge es mayor que ${prompi}`);
        }
        contador++;
    } while (prompi);
    console.log(control? `Lo has adivinado en ${contador} intentos!` : "Game Over");
}



function dimecres() {
    let year1 = parseInt(prompt("Ingrese primer año del rango entre 2000 y 2050"));
    let year2 = parseInt(prompt("Ingrese segundo año del rango entre 2000 y 2050"));
    if(year1<2000 || year2>2050) { 
        alert("Parámetros inválidos");
        return;
    }
    let yearvar;

    while(year1<=year2) {
        yearvar = new Date(`${year1}`+'-01-01');
        if(yearvar.getDay() == 3) {
            alert(`El primer día dentro del rango que empieza en miércoles es ${year1}`);
            return;
        }
        year1++;
    }
    alert("Ningún año en el rango ingresado empieza un día miércoles");
}



function vocales() {
    let palabra = prompt("Ingrese una palabra y comprueba si es pentavocálica");
    let regexp = [/[aàáä]/gi, /[eèéë]/gi, /[iìíï]/gi, /[oòóö]/gi, /[uùúü]/gi];

    for (let i=0; i<regexp.length; i++) {
        if (!palabra.match(regexp[i])) {
            alert(`La palabra ${palabra} NO ES pentavocálica`);
            return;
        }
    }
    alert(`La palabra ${palabra} ES pentavocálica`);

}