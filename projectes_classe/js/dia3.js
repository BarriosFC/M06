// mediante bucle 

function potencia() {
    let value1 = prompt("Numero");
    let value2 = prompt("exponente");
    let jorge = 1;

    console.time();
    for (var i = 0; i < value2; i++) {
        jorge = jorge * value1;
    }
    console.timeEnd();
    console.log(jorge);

    console.time();
    console.log(Math.pow(value1, value2));
    console.timeEnd();
}

function mitja() {
    let value1 = prompt("Primer número");
    let value2 = prompt("Segundo número");
    let value3 = prompt("Tercer número");

    let array = [parseInt(value1, 10), parseInt(value2, 10), parseInt(value3, 10)];
    //array.sort();
    array.sort((a, b) => a - b);

    let mitja = 0;
    for (let i = 0; i<array.length; i++) {
        mitja = mitja + array[i];
    }
    mitja = mitja / 3;
    
    console.log(`Mitja = ${mitja}`);
    console.log(`Menor = ${array[0]}`);
    console.log(`Major = ${array[array.length-1]}`);
    console.log(`Mitjana = ${array[array.length % 2 == 0 ? 
                            array.length / 2 -1 : (array.length-1) / 2]}`);
}
