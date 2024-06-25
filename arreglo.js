/* ESTE PEQUEÑO EJERICIO LO QUE HACE ES IR CONTANDO DEL 1 AL 10 E IMPRIMIRLOS EN LA INTERFAZ DEL USIUARIO*/

// SE EMPIEZA DEFINIENDO UN ARRAY VACIO
let numeros = [];

/* CON EL BUCLE FOR EMPIEZA DEFINIENDO LA VARIABLE (i) CON VALOR DE 1 Y VA AUMENTANDO EN 1 CADA ITERACIÓN, RECUERDA SIEMPRE PONER UN LIMITE YA QUE SI DEJA INFINITO PUEDE CRASHEAR LA COMPUTADORA, con el método push de los arrays vas agregando el valor de la variable al array vacio  */
for (let i = 1; i < 11; i++) {
    numeros.push(i);
}

// obtienes la referencia de un elemento del DOM puede ser div o parrafo etc.
let divArreglo = document.getElementById("arreglo");

// empiezas almacenando en un contenedor vacio la información del array
let contenidoHTML = "";

/*  con cada iteración se va almacenando el valor de cada elemento (numero) dentro del contenidoHTML  y agrega un salto de línea (br) */
numeros.forEach(numero => {
    contenidoHTML += "Elemento " + numero + "<br>";
});

// Con la propiedad innerHTML agrega cualquier contenido html al elemento especificado en este caso a divarreglo le incertamos a manera de html el elemento que definimos en variable => contenidoHTML
divArreglo.innerHTML = contenidoHTML;