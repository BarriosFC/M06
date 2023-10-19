function rombo() {
    let diagonal = parseInt(prompt("Diagonal del rombo?"));

    let table = document.createElement("table");
    for (let i = 1; i<=diagonal; i++) {
        let tr = document.createElement("tr");
        for (let j = 1; j<=diagonal; j++) {
            let td = document.createElement("td");
            td.style.height="20px";
            td.style.width="20px";

            if (j>(diagonal+1)/2-i && j<=(diagonal)/2+i && i<=(diagonal+1)/2 || 
                j>i-(diagonal+1)/2 && j<=diagonal-(i-(diagonal+1)/2) && i>(diagonal+1)/2) {
                    td.style.backgroundColor = "red";
            }
            
            td.style.border = "1px solid black";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

function extension() {
    let text = prompt("Ingrese nombre del archivo");
    let oso = text.split('.');
    console.log(`La extensión es: .${oso[oso.length-1]}`);
}

function compara() {
    let text = prompt("Ingrese frase").toLowerCase();
    let contA = 0;
    let contB = 0;
    let resul = "";

    for (let i=0; i<text.length; i++) {
        if (text[i] == 'a') { contA++; }
        if (text[i] == 'b') { contB++; }
    }

    if (contA == contB) {
        resul = "Misma cantidad de A's que de B's";
    } else if (contA > contB) {
        resul = "Mayor cantidad de A's que de B's";
    } else {
        resul = "Mayor cantidad de B's que de A's";
    }
    console.log(resul);
}