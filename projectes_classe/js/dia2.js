
function tabla() {
    let prompi = prompt("Ingrese un numero y mire la consola compadre");
    if (prompi > 10 || prompi < 1) {
        alert("El número debe ser entre 1 y 10 (inclusive)");
        return;
    }
    console.log(`Tabla del ${prompi}`);
    for (var i = 1; i<11; i++) {
        console.log(`${prompi}x${i}=${prompi*i}`);
    }
}


function fibonacci() {
    const value1 = document.getElementById('fibo').value;
    let tempvar;
    let a = 0;
    let b = 0;
    let c = 1;

    //a = 2     b = 3   c = 5   tempvar = a+b 
    // 1-2-2-3-4

    for (var i = 0; i<value1; i++) {
        //tempvar = a + b;
        console.log(`fibo[${i+1}]=${c}`);
        a = b;
        b = c;
        c = a+b;
        
    }
}