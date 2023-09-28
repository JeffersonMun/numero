// Función para realizar la operación
function realizarOperacion() {
    // Obtener los valores ingresados por el usuario
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    // Verificar las condiciones
    if (numero1 > numero2) {
        // Mostrar la suma de los dos números
        var resultado = numero1 + numero2;
    } else if (numero2 > numero1) {
        // Elevar al cuadrado cada número, sumarlos y mostrar el resultado
        var resultado = Math.pow(numero1, 2) + Math.pow(numero2, 2);
    } else {
        // Los números son iguales
        var resultado = "Los números son iguales";
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado").textContent = resultado;
}
