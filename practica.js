function nombreCompleto (name, lastName) {
    return name + ' ' + lastName
}

function saludo(name, lastname, username){
    const completeName = nombreCompleto(name, lastname);
    
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");
}

if (tipoDeSuscripcion == 'Free'){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == 'ExpertDuo'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// Esta es la función para sumar

function sumar (num1, num2) {
    var resultado = num1 + num2;
    console.log("La suma es: " + resultado)
}

// Esta es la función para multiplicar

function multiplicar (n1, n2) {
    var resultado = n1 * n2;
    return resultado;
}

// Llamada a la función y almacenamiento del resultado

var resultadoMultiplicacion = multiplicar(4, 2);
console.log("El resultado de la multiplicación es: " + resultadoMultiplicacion);

// Esta es la función para calcular el área del círculo

function calcularAreaCirculo (radio) {
    var area = Math.PI * radio * radio;
    return area;
}

var radioCirculo = 5;
var areaCirculo = calcularAreaCirculo(radioCirculo);
console.log("El área del círculo es: " + areaCirculo);

// Ejemplo de una función para verificar si un número es par

function esNumeroPar (numero) {
    if (numero % 2 === 0){
        return true;
    } else {
        return false;
    }  
}

var numeroEjemplo = 4;
var esPar = esNumeroPar (numeroEjemplo);
console.log("¿El nùmero es par?" + esPar);  

// Ciclo While

let i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

// let i = 10;

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}

let respuesta;

while (respuesta != '4') {
    let pregunta = prompt('Cuánto es 2 + 2')
    respuesta = pregunta;
}    

// FUncion para hacer un ejercicio de array

function imprimirPrimerElementoArray(arr) {
    console.log(arr[0])
}

imprimirPrimerElementoArray(['Juanita', 'Rigoberto', 'Natilla'])

// FUncion para hacer un ejercicio de array 2

function imprimirElementoPorElemento(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

imprimirElementoPorElemento(['Juanita', 'Rigoberto', 'Natilla'])

// Ejercicio de objetos

const obj = {
    nombre: 'Fulanito',
    edad: 3,
    comidasFavoritas: ['Pollo frito','vegetales'],        
}; 

Object.values(obj)

function imprimirElementoPorElementoObjetos(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

imprimirElementoPorElementoObjetos(obj)

//Solucion de bonus

function  conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free'){
        console.log("Solo puedes tomar los cursos gratis");
        return;
    } 
    
    if (suscripcion == 'Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    } 
    
    if (suscripcion == 'Expert'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    } 
    
    if (suscripcion == 'ExpertDuo'){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    } 

    console.warn('Este tipo de suscripción no existe')

}

conseguirTipoSuscripcion('Free')

// Solucion bonus 2

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',      
};

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion])
        return;
    }

    console.warn('Este tipo de suscripción no existe')
}
