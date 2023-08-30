alert ("Bienvenido a la calculadora de Puntaje de Alvarado para apendicitis aguda")

let migracionFID = ingresarMigracionFID();
let anorexia = ingresarAnorexia();
let nauseas = ingresarNauseas();
let dolorFID = ingresarDolorFID();
let dolorRebote = ingresarDolorRebote();
let fiebre = ingresarFiebre();
let leucocitosis = ingresarLeucocitosis();
let desviacionIzquierda = ingresarDesviacionIzquierda();

let puntuacionMigracionFID = puntuarMigracionFID();
let puntuacionAnorexia = puntuarAnorexia();
let puntuacionNauseas = puntuarNauseas();
let puntuacionDolorFID = puntuarDolorFID();
let puntuacionDolorRebote = puntuarDolorRebote();
let puntuacionFiebre = puntuarFiebre();
let puntuacionLeucocitosis = puntuarLeucocitosis();
let puntuacionDesviacionIzquierda = puntuarDesviacionIzquierda();

let puntaje = calcularpuntaje();

if(puntaje<5){
    alert(puntaje + " Puntos. \nRiesgo Bajo de Apendicitis Aguda");
}else if(puntaje>=5 && puntaje<8){
    alert(puntaje + " Puntos. \nRiesgo Medio de Apendicitis Aguda");
}else if(puntaje>=8){
    alert(puntaje + " Puntos. \nRiesgo Alto de Apendicitis Aguda");
}
        










