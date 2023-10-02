function calcula100() {
    let prompi1 = prompt("Ingresa el primer número");
    let prompi2 = prompt("Segundo número");

    let dist1 = 100 - prompi1;
    let dist2 = 100 - prompi2;

    console.log("El más próximo a 100 es: " + (Math.abs(dist1) < Math.abs(dist2) ? prompi1 : prompi2) );
}


function hora() {
    let prompi1 = prompt("Horas?");
    let prompi2 = prompt("Minutos?");
    let prompi3 = prompt("Segundos?");

    let fecha = new Date();
    fecha.setHours(prompi1);
    fecha.setMinutes(prompi2);
    fecha.setSeconds(prompi3);

    fecha.setSeconds(fecha.getSeconds()+1);

    console.log(`Hora ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}


function fecha() {
    let prompi1 = prompt("Año?");
    let prompi2 = prompt("Mes?");
    let prompi3 = prompt("Día?");

    let fechaString = `${prompi1}/${prompi2}/${prompi3}`;
    let fechaDate = new Date(fechaString);
    console.log(fechaDate);
}


function convertirDias() {
    let prompi = prompt("Ingrese número de días");

    let days = 0;
    let months = 0;
    let years = 0;
    let temp;

    temp = prompi % 360;
    years = (prompi - temp) / 360;

    days = temp % 30;
    months = (temp - days) / 30;
    
    console.log(`Hay ${years} años, ${months} meses y ${days} días`);
}