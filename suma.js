/*Esta pequeña función lo único que tiene uqe hacer es hacer la suma de dos numeros ingresados por el usuario, se debe validar que no pongan letras y que no pueda tener más de 10 caracteres */


//SE ESTABLECE LA FUNCIÓN DECLARADA O NOMBRADA (NO RECIBE PARÁMETROS)
function sumarNumeros() {
    // Obtener los valores de los campos de tipo texto
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

    
    // Validar longitud máxima de 10 caracteres
    /* La propiedad lenght es propiamente de los tipos de datos strings, es por eso que se debe poner antes de hacer el cambio a números si no no va a funcionar */
    if (num1.length > 10 || num2.length > 10) {
        alert("Los números no pueden tener más de 10 caracteres.");
        return;
    }
    
    // Convertir los valores a números enteros
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    // Verificar si los valores ingresados son números válidos con la función isNaN, que determina si un valor no es número retorna true, con el operador lógico OR || decimos que si cualquier valor que ingrese el usuario no es número mandamos la alerta con el mensaje
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor ingresa números válidos en ambos campos."); 
        /* la palabra reservada "return" detiene la ejecución de javascript si no retorna ningun dato */ 
        return;
    }

    // Guardamos el resultado en una variable
    let resultado = num1 + num2;

    // Mostrar el resultado en el elemento <p> con id="resultado"
    document.getElementById("resultado").innerText = "La suma de " + num1 + " y " + num2 + " es: " + resultado;
}