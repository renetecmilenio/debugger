/* La tarea de esta función es encontrar que alumno de la lista tiene un promedio mayor a 8, se hace recorriendo el array[] alumno por alumno validando el pormiedio y lo agrega a otra lista   */


// LISTA DE TODOS LOS ALUMNOS CON SU NOMBRE, EDAD Y PROMEDIO EN UN ARRAY/ARREGLO (este fomrato simula lo que recibirias de una API real solo que en ese caso se llama "Json" es un lenuaje estandar para intercambio de datos)
let alumnos = [
    { nombre: "Juan", edad: 20, promedio: 8.5 },
    { nombre: "María", edad: 21, promedio: 7.8 },
    { nombre: "Pedro", edad: 19, promedio: 9.2 },
    { nombre: "Ana", edad: 22, promedio: 8.0 }
];


//FUNCIÓN QUE RECORRE/ITERA TODO EL ARRAY DE OBJETOS [{},{},{},{}] MEDIANTE LA SENTENCIA FOR OF Y RETORNA OTRA LISTA CON LOS ESTUDIANTES QUE SI PASARON LA CONDICIÓN
//LA FUNCIÓN SI RECIBE EL PARÁMETRO ALUMNOS
function encontrarEstudiantesConBuenPromedio(alumnos) {
    // LA LISTA DE ESTUDIANTES QUE SI PASARON EMPIEZA VACÍA
    let buenosEstudiantes = [];

    //MÉTODO FOR OF PARA RECORRER EL ARRAY DE ALUMNOS
    for (let estudiante of alumnos) {
        if (estudiante.promedio > 8.0) {
            //MÉTODO PUSH DE LOS ARRAYS AGREGA EL ELEMENTO POR CADA ITERACIÓN SIMEPRE Y CUANDO CUMPLA CON LA CONDICIONAL 
            buenosEstudiantes.push(estudiante.nombre);
        }
    }

    // LA FUNCIÓN RETORNA LOS BUENOS ALUMNOS
    return buenosEstudiantes;
}

// GUARDAS LA FUNCIÓN YA CON LOS RESULTADOS DE LA FUNCIÓN EN UNA VARIABLE
let buenosEstudiantes = encontrarEstudiantesConBuenPromedio(alumnos);

// Mostrar los nombres en un párrafo con id="alumnos"
let parrafoAlumnos = document.getElementById("alumnos");

// AL ELEMENTO QUE GUARDAMOS EN VARIABLE (parrafosAlumnos) LE AGREGAMOS LA INFOMRMACIÓN con el metodo innerHTML para que procese las etiquetas HTML en este caso <strong> y se encuentras SEPARADOS POR COMAS (,) CON EL MÉTODO JOIN DE LOS ARRAYS

// ***intenta cambiar innerHTML por innerText para que comprendas la diferencia***
parrafoAlumnos.innerHTML = "Estudiantes con promedio mayor a 8.0: " + "<strong>" + buenosEstudiantes.join(", ") + "</strong>"