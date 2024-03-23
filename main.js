
let peliculas = [
    { titulo: "Jurassic Park", clasificacion: "Mayores de 10 años" },
    { titulo: "Titanic", clasificacion: "Mayores de 13 años" },
    { titulo: "The Dark Knight", clasificacion: "Mayores de 13 años" },
    { titulo: "The Matrix", clasificacion: "Mayores de 16 años" },
    { titulo: "Pulp Fiction", clasificacion: "Mayores de 18 años" },
    { titulo: "Harry Potter and the Philosopher's Stone", clasificacion: "Mayores de 10 años" },
    { titulo: "Finding Nemo", clasificacion: "Mayores de 3 años" },
    { titulo: "Forrest Gump", clasificacion: "Mayores de 13 años" },
    { titulo: "The Godfather", clasificacion: "Mayores de 18 años" },
    { titulo: "Inception", clasificacion: "Mayores de 18 años" },
    { titulo: "The Shawshank Redemption", clasificacion: "Mayores de 18 años" },
    { titulo: "Schindler's List", clasificacion: "Mayores de 18 años" }
];


function buscarPeliculasPorClasificacion(clasificacion) {
    return peliculas.filter(pelicula => pelicula.clasificacion === clasificacion);
}

function mostrarRecomendaciones(edad, cantidad) {
    let clasificacion = edad < 18 ? "Menores de 18 años" : "Mayores de 18 años";
    let peliculasRecomendadas = buscarPeliculasPorClasificacion(clasificacion);

    console.log("En base a tu edad de " + edad + ", te recomendamos lo siguiente:");

    for (let i = 0; i < cantidad; i++) {
        let numeroDeRecomendacion = i + 1;
        let recomendaciones = peliculasRecomendadas.filter(pelicula => pelicula.clasificacion === clasificacion);
        if (recomendaciones.length > 0) {
            let pelicula = recomendaciones[i % recomendaciones.length];
            console.log("Recomendación #" + numeroDeRecomendacion + ": " + pelicula.titulo);
        } else {
            console.log("No hay recomendaciones disponibles para esta clasificación.");
            break;
        }
    }
}

let edadIngresada = parseInt(prompt("Ingresa tu edad:"));
let cantidadRecomendaciones = parseInt(prompt("¿Cuántas recomendaciones quieres ver?"));

mostrarRecomendaciones(edadIngresada, cantidadRecomendaciones);