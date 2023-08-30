function ingresarMigracionFID (){
    let migracionFID = prompt("Migración del dolor abdominal a cuadrante inferior derecho. (SI/NO)").toUpperCase();

    while (migracionFID != "SI" && migracionFID!= "NO") {
        alert ("Debe indicar SI o NO");
        migracionFID = prompt("Migración del dolor abdominal a cuadrante inferior derecho. (SI/NO)").toUpperCase();
    }
    return migracionFID;
}
function ingresarAnorexia (){
    let anorexia = prompt("Anorexia. (SI/NO)").toUpperCase();
    while (anorexia != "SI" && anorexia!= "NO") {
        alert ("Debe indicar SI o NO");
        anorexia = prompt("Anorexia. (SI/NO)").toUpperCase();
    }
    return anorexia;
}
function ingresarNauseas (){
    let nauseas = prompt("Náuseas y/o vómitos. (SI/NO)").toUpperCase();

    while (nauseas != "SI" && nauseas!= "NO") {
        alert ("Debe indicar SI o NO");
        nauseas = prompt("Náuseas y/o vómitos. (SI/NO)").toUpperCase();
    }
    return nauseas;
}
function ingresarDolorFID (){
    let dolorFID = prompt("Dolor abdominal en cuadrante inferior derecho. (SI/NO)").toUpperCase();
    while (dolorFID != "SI" && dolorFID!= "NO") {
        alert ("Debe indicar SI o NO");
        dolorFID = prompt("Dolor abdominal en cuadrante inferior derecho. (SI/NO)").toUpperCase();    }
    return dolorFID;
}
function ingresarDolorRebote (){
    let dolorRebote = prompt("Dolor abdominal al rebote o descompresion. (SI/NO)").toUpperCase();

    while (dolorRebote != "SI" && dolorRebote!= "NO") {
        alert ("Debe indicar SI o NO");
        dolorRebote = prompt("Dolor abdominal al rebote o descompresion. (SI/NO)").toUpperCase();
    }
    return dolorRebote;
}
function ingresarFiebre (){
    let fiebre = prompt("Fiebre, T°>38°C. (SI/NO)").toUpperCase();
    while (fiebre != "SI" && fiebre!= "NO") {
        alert ("Debe indicar SI o NO");
        fiebre = prompt("Fiebre, T°>38°C. (SI/NO)").toUpperCase();    }
    return fiebre;
}
function ingresarLeucocitosis (){
    let leucocitosis = prompt("Leucocitosis en laboratorio. (SI/NO)").toUpperCase();
    while (leucocitosis != "SI" && leucocitosis!= "NO") {
        alert ("Debe indicar SI o NO");
        leucocitosis = prompt("Leucocitosis en laboratorio. (SI/NO)").toUpperCase();    }
    return leucocitosis;
}
function ingresarDesviacionIzquierda (){
    let desviacionIzquierda = prompt("Desviación a la izquierda de fórmula leucocitaria en laboratorio. (SI/NO)").toUpperCase();

    while (desviacionIzquierda != "SI" && desviacionIzquierda!= "NO") {
        alert ("Debe indicar SI o NO");
        desviacionIzquierda = prompt("Desviación a la izquierda de fórmula leucocitaria en laboratorio. (SI/NO)").toUpperCase();
    }
    return desviacionIzquierda;
}
function puntuarMigracionFID(){
    let puntuacionMigracionFID = 0; 
    if(migracionFID === "SI"){
        puntuacionMigracionFID = 1;
    }else{
        puntuacionMigracionFID = 0;
    }
    return puntuacionMigracionFID;
}
function puntuarAnorexia(){
    let puntuacionAnorexia = 0;    
    if(anorexia === "SI"){
        puntuacionAnorexia = 1;
    }else{
        puntuacionAnorexia = 0;
    }
    return puntuacionAnorexia;
}
function puntuarNauseas(){    
    let puntuacionNauseas = 0;
    if(nauseas === "SI"){
        puntuacionNauseas = 1;
    }else{
        puntuacionNauseas = 0;
    }
    return puntuacionNauseas;    
}
function puntuarDolorFID(){
    let puntuacionDolorFID = 0;
    if(dolorFID === "SI"){
        puntuacionDolorFID = 1;
    }else{
        puntuacionDolorFID = 0;
    }
    return puntuacionDolorFID;
}
function puntuarDolorRebote(){
    let puntuacionDolorRebote = 0;    
    if(dolorRebote === "SI"){
        puntuacionDolorRebote = 2;
    }else{
        puntuacionDolorRebote = 0;
    }
    return puntuacionDolorRebote;
}
function puntuarFiebre(){
    let puntuacionFiebre = 0;
    if(fiebre === "SI"){
        puntuacionFiebre = 1;
    }else{
        puntuacionFiebre = 0;
    }
    return puntuacionFiebre;
}
function puntuarLeucocitosis(){
    let puntuacionLeucocitosis = 0;
    if(leucocitosis === "SI"){
        puntuacionLeucocitosis = 2;
    }else{
        puntuacionLeucocitosis = 0;
    }
    return puntuacionLeucocitosis;
}
function puntuarDesviacionIzquierda(){
    let puntuacionDesviacionIzquierda = 0;    
    if(desviacionIzquierda === "SI"){
        puntuacionDesviacionIzquierda = 1;
    }else{
        puntuacionDesviacionIzquierda = 0;
    }
    return puntuacionDesviacionIzquierda;
}

function calcularpuntaje(){
    let puntaje = (puntuacionMigracionFID+puntuacionAnorexia+puntuacionNauseas+puntuacionDolorFID+puntuacionDolorRebote+puntuacionFiebre+puntuacionLeucocitosis+puntuacionDesviacionIzquierda);
    return puntaje;
}

    








  