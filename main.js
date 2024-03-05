

function clasificarPorEdad(edad,numero) {
    if (edad <= 18) {
        console.log("Recomendacion #" + numero);
    } else {
        console.log("Recomendacion #" + numero);
    }
}

let edadIngresada = prompt("Ingresa tu Edad:");
let anuncios = prompt("Cuantas recomendaciones quieres ver:");
// console.log("edadIngresada " + edadIngresada);
// console.log("anuncios " + anuncios);
console.log("En base a tu edad de " + edadIngresada + ", te recomendamos lo siguiente :");
for (let i = 0; i < anuncios; i++) {
    let numeroDeRecomendaciones = i + 1;
    clasificarPorEdad(edadIngresada, numeroDeRecomendaciones);
}