// 1) Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas. Mostrar ambos en pantalla.

/* let nombre = prompt("Ingrese su nombre");

let saludo = "¡Hola " + nombre + "!";

alert(saludo);

alert(saludo.toLocaleLowerCase());
alert(saludo.toUpperCase()); */


// 2) Pedir al usuario dos números y mostrar la suma y resta de ellos. Para la resta, restar siempre al más grande el más chico.

/* let numero1 = parseInt(prompt("Ingrese un número"));

let numero2 = parseInt(prompt("Ingrese otro número"));

alert("La suma de los números es: " + (numero1+numero2));

if (numero1 > numero2) {
    alert("La resta de los números es: " + (numero1-numero2));
} else {
    alert("La resta de los números es: " + (numero2-numero1));
}
 */


// 3) Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o consola (console.log). 
// Pasar el texto a MAYUSCULA y mostrar donde corresponda.

/* let texto = prompt("Ingrese un texto");
let mostrar = parseInt(prompt("¿por dónde quiere ver el resultado? ingrese el número que corresponda. \n 1= console log \n 2= alert"));

if (mostrar === 1) {
    console.log(texto.toUpperCase());
} else {
    alert(texto.toUpperCase());
} */


// 4) Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). 
// Realizar la operación y mostrar el resultado en pantalla.

/* let n1 = parseInt(prompt("Ingrese un número"));

let n2 = parseInt(prompt("Ingrese otro número"));



function calculadora (n1,n2) {
    let operacion = parseInt(prompt("Ingrese un número de operación: \n 1= SUMA \n 2= RESTA \n 3= MULTIPLICACIÓN \n 4= DIVISIÓN \n 5= POTENCIA"))

    if (operacion === 1) {
        alert("La suma de los números: " + n1 + " y " + n2 + " es de: " +(n1 + n2));

    } else if (operacion === 2) {
        alert("La resta de los números: " + n1 + " y " + n2 + " es de: " +(n1 - n2));
        
    } else if (operacion === 3) {
        alert("La multiplicación de los números: " + n1 + " y " + n2 + " es de: " +(n1 * n2));

    } else if (operacion === 4) {
        if (n2 != 0) {
            alert("La división de los números: " + n1 + " y " + n2 + " es de: " +(n1 / n2));
        } else {
            alert("No se puede tener un divisor con valor cero");
        }
        
    } else {
        alert("La potencia del número con base " + n1 + " y exponente " + n2 + " es de: " +(Math.pow(n1,n2)));
    }
}

calculadora(n1,n2); */

// 5) Vamos reutilizar la calculadora del punto 5. Pero esta vez, luego de mostrar el resultado, vamos a preguntar al usuario si desea 
// hacer otra operación o terminar. Si quiere seguir operando, volvemos a pedir valores, operación y mostrar resultado HASTA que nos 
// diga que no quiere continuar.
// Extra: investigar/googlear la función de Javascript "confirm"


/* let n1;

let n2;

function calculadora (n1,n2) {
    
    n1 = parseInt(prompt("Ingrese un número"));

    n2 = parseInt(prompt("Ingrese otro número"));
        
    let operacion = parseInt(prompt("Ingrese un número de operación: \n 1= SUMA \n 2= RESTA \n 3= MULTIPLICACIÓN \n 4= DIVISIÓN \n 5= POTENCIA"))
    
    if (operacion === 1) {
        alert("La suma de los números: " + n1 + " y " + n2 + " es de: " +(n1 + n2));
    
    } else if (operacion === 2) {
        alert("La resta de los números: " + n1 + " y " + n2 + " es de: " +(n1 - n2));
            
    } else if (operacion === 3) {
        alert("La multiplicación de los números: " + n1 + " y " + n2 + " es de: " +(n1 * n2));
    
    } else if (operacion === 4) {
         if (n2 != 0) {
            alert("La división de los números: " + n1 + " y " + n2 + " es de: " +(n1 / n2));
        } else {
                alert("No se puede tener un divisor con valor cero");
        }
            
    } else {
        alert("La potencia del número con base " + n1 + " y exponente " + n2 + " es de: " +(Math.pow(n1,n2)));
    }
    
    
    let opcion = confirm("Desea seguir realizando operaciones? clickee Aceptar o cancelar");

    
}

 do {
    calculadora(n1,n2);
} while (opcion == true); */


// 6) Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para el nuevo curso. 
// Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres en pantalla. 

/* let nombres;
let alumnos = [];

function curso () {
    
    while (nombres != "salir" && nombres != "SALIR") {
        nombres = prompt("Ingrese los nombres de los alumnos. Cuando desee finalizar, ingrese 'salir'.");
        alumnos.push(nombres)
    }
    alumnos.pop();
    return(alumnos.join("\n"));

}

alert(curso());
 */



// 7) Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición) y Nombre con la primera letra en mayúscula.


/* const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia","homero"];

for (let i = 0; i < ej7Nombres.length; i++) {
    
console.log(i + " " + (ej7Nombres[i].charAt(0).toUpperCase() + ej7Nombres[i].slice(1)));
    
} */

// 8)  Para una veterianaria. Dado el siguiente array de nombres de mascotas completar el código con las siguentes reglas de negocio:
// - Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"
// - Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"
// - Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"
// - Si es igual a "Tuerca", informar: "Entregar alimento balanceado"


/* const ej8Mascotas = ["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];


for (let i = 0; i < ej8Mascotas.length; i++) {

    
    if (ej8Mascotas[i].length > 6 && ej8Mascotas[i] === "Gertrudis") {
        console.log(ej8Mascotas[i] + " Nombre largo" + " y vacunar contra la rabia");
        
    } else if (ej8Mascotas[i].length > 6) {
        console.log(ej8Mascotas[i] + " Nombre largo");

    } 
    
    if (ej8Mascotas[i].length <= 3) {
        console.log(ej8Mascotas[i] + " Nombre corto");
        
    } else if (ej8Mascotas[i] === "Fido") {
        console.log(ej8Mascotas[i] + " Vacunar contra la rabia");

    } else if (ej8Mascotas[i] === "Tuerca") {
        console.log(ej8Mascotas[i] + " Entregar alimento balanceado");

    }
} */





// 9) Un restaurant desea mejorar su sistema de reserva para mostrar a los clientes un aproximado de costos. 
// - Cada menor de edad pagará el menú $450 y cada adulto, $700. 
// - Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura. 
// Mostrar por pantalla la cantidad de comensales y el costo total a pagar. 


/* const ej9restaurant = [25,17,18,44,12,9,36,50]

function restaurant () {
    
    let adultos = [];
    let menores = [];
    let subtotal;
    let total;
    
    for (let i = 0; i < ej9restaurant.length; i++) {

        if (ej9restaurant[i] < 18) {
            menores.push(ej9restaurant);
            console.log(menores);
            console.log(ej9restaurant[i] + " debe pagar: 450");
            
        } else {
            adultos.push(ej9restaurant);
            console.log(adultos);
            console.log(ej9restaurant[i] + " debe pagar: 700");
            
        }

    }
    
    subtotal = ((menores.length * 450) + (adultos.length * 700));
    

    if (adultos.length > 4) {
        total = (subtotal-((subtotal) * 0.1));
        alert("El total de comensales es de: " + ej9restaurant.length + "\n y el total a abonar es de: $" + total);

    } else {
        total = (subtotal);
        alert("El total de comensales es de: " + ej9restaurant.length + "\n y el total a abonar es de: $" + total);
    
    }

    
}

restaurant(); */


// 10) De un consultorio médico nos piden automatizar el proceso de recepción de los pacientes. 
 // Para ello:
 // - Ingresar código de paciente (Number XXX, 3 dígitos de 1 a 999). // YA ESTA
 // - Si el código ingresado esta entre 1 y 99, es un paciente VIP. // YA ESTA
 // - Preguntarles "Como valoran la calidad del servicio? (1..10)". Guardar el resultado ingresado. // YA ESTA
 // - Agregar el código de paciente adelante en la cola (array) de turnos. // YA ESTA

 // - Si el código ingresado esta entre 100 y 500, es un paciente de prepaga. // YA ESTA
 // - Agregar el código de paciente al final de la cola (array) de turnos. // YA ESTA

 // - Si el código ingresado esta entre 501 y 999, es un paciente nuevo. // YA ESTA
 // - Preguntarles "Desea pasarse a VIP?". Si la respuesta es afirmativa, guardar el código de paciente. // YA ESTA
 // - Agregar el código de paciente al final de la cola (array) de turnos  // YA ESTA
    
 // - Si todos los pacientes fueron ingresados, informar en pantalla:
 // - Calidad del servicio VIP. Informar valor promedio, valor máximo y valor mínimo.  // YA ESTA
 // - Ingreso al consultorio: Mostrar en pantalla el orden de ingreso x código de paciente.  // YA ESTA
 // - Pasarse a VIP: Mostrar en pantalla todos los códigos de pacientes que desean ser VIP  // YA ESTA
 // - Nota: Escribir código con funciones para facilitar su lectura.


 /* let codigo;
 let turnos;
 let calidad;
 let vip;
 let turnosvip;
 //let valormax;

 function consultorio() {
    turnos = [];
    calidad = [];
    vip = [];
    turnosvip =[]; 

    while (codigo != 0) {
    codigo = parseInt(prompt("Ingrese su código de paciente. Para finalizar, ingrese '0'"));
    
    if (codigo >= 1 && codigo <= 99) {
        
        let servicio = parseInt(prompt("¿Cómo valora la calidad del servicio? del 1 al 10. Siendo 1 un muy mal servicio y 10 un excelente servicio."));
        if (servicio >= 1 && servicio <= 10) {
            calidad.push(servicio);
            console.log(codigo);
            turnosvip.push(codigo);
        } else {
            alert("Por favor, ingrese un número del 1 al 10.");
        }
        
        
        

    } else if (codigo >= 100 && codigo <= 500) {
        
        turnos.push(codigo);
        console.log(codigo);

     } else if (codigo >= 501 && codigo <= 999) {
        
        turnos.push(codigo);
        let opcionvip = confirm("¿Desea pasarse a VIP? Clickee Aceptar o Cancelar");
        console.log(codigo);

        if (opcionvip === true) {
            vip.push(codigo);
            
        }
        
    } 
    
 }


 let ordenturnos = turnosvip.concat(turnos);

 
    
 alert("Calidad del servicio VIP:" + "\nPromedio: " + promediototal(calidad) + "\nValor máximo: " + valormaximo(calidad) + "\nValor mínimo: " + valorminimo(calidad));
 alert("Ingreso al consultorio" + "\nListado de turnos: " + ordenturnos);
 alert("Pasarse a VIP: " + "\nPacientes que desean ser VIP: " + vip);


}

consultorio();
 



function valormaximo (calidad) {
   let valormax = Math.max.apply(null,calidad);
    return valormax;
}


function promediototal (calidad) {
    let suma = calidad.reduce((previous, current) => current += previous);
    let promedio = (suma / calidad.length);
    return promedio;
}


function valorminimo (calidad) {
    let valormin = Math.min.apply(null,calidad);
    return valormin;
} */

