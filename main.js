// let presupuesto = prompt("Ingresa tu presupuesto:");
// let precio = prompt("Ingresa El precio del primer producto:");
// //let precio = prompt("Ingresa El precio del segundo producto:");

// console.log(precio);
// console.log(presupuesto);


function clasificarPorEdad(edad,numero) {
    // Clasificar a la persona en los grupos según su edad
    if (edad <= 18) {
        console.log("Grupo 1: Menor de 18 años");
    } else {
        console.log("Recomendacion: " + numero);
    }
}

// Ejemplo de uso con un bucle
let edadIngresada = prompt("Ingresa tu Edad:");
let anuncios = prompt("Cuantas recomendaciones quieres ver:");
// console.log("edadIngresada " + edadIngresada);
// console.log("anuncios " + anuncios);

for (let i = 0; i < anuncios; i++) {
    let numeroDeRecomendaciones = i + 1;
    clasificarPorEdad(edadIngresada, numeroDeRecomendaciones);
}