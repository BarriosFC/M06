function creaTabla() {
    let var1 = parseInt(prompt("Filas?"));
    let var2 = parseInt(prompt("Columnas?"));

    let table = document.createElement("table");
    for (let i = 1; i<=var1; i++) {
        let tr = document.createElement("tr");
        for (let j = 1; j<=var2; j++) {
            let td = document.createElement("td");
            let txt = document.createTextNode(`${i}.${j}`);
            td.appendChild(txt);
            td.style.border = "1px solid black";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

function creaTablaMulti() {
    let var1 = parseInt(prompt("Filas?"));
    let var2 = parseInt(prompt("Columnas?"));

    let table = document.createElement("table");
    for (let i = 1; i<=var1; i++) {
        let tr = document.createElement("tr");
        for (let j = 1; j<=var2; j++) {
            let td = document.createElement("td");
            let txt = document.createTextNode(`${i*j}`);
            td.appendChild(txt);
            td.style.border = "1px solid black";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}


function creaPiramide() {
    let var2 = parseInt(prompt("Base de la pirámide?"));
    let var1 = (var2/2)+1;

    let table = document.createElement("table");
    for (let i = 1; i<=var1; i++) {
        let tr = document.createElement("tr");
        for (let j = 1; j<=var2; j++) {
            let td = document.createElement("td");
            td.style.height="20px";
            td.style.width="20px";

            if (j>(var2+1)/2-i && j<=(var2)/2+i) {
                td.style.backgroundColor = "red";
            }
            
            td.style.border = "1px solid black";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}




12345
12345
12345