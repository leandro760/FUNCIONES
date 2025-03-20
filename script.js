/*
Encapsulacion o agrupacion de codigo(cualquier tipo de codigo)
Funciones regulares (tradicionales)
  -Funcion declarativa: Una funcion que tiene un alcance global (no importa donde se define)
  this
  -Funcion de expresión: Es una funcion que solo se puede invocar despues de su definición
Funciones flechas (ECMAScrpt 6+)
  -Funciones de expresón: Es una funcion que solo se puede invocar despues de su definición
  no this
  -(spread operator, destructuración)
Funciones anonimas: Una funcion sin nombre que se ejecuta una unica vez dentro de su invocación

TODAS las funciones reciben parametros
TODAS las funciones pueden retornar valores

 */


// Regular declarativa 
// function nombreDeLaFuncion(){
// }
// function calcularSalario() {
//     let valorHora = Number(prompt('Ingrese el valor de la hora: '))
//     let cantidadHoras = Number(prompt('Ingrese la cantidad de horas: '))
//     console.log('El salario es: ' + (cantidadHoras * valorHora));
// }
// calcularSalario()// este es el llamado a invocacion


// Regular expresion
// const calcularSalario = function () {
//   let valorHora = Number(prompt('Ingrese el valor de la hora: '))
//   let cantidadHoras = Number(prompt('Ingrese la cantidad de horas: '))
//   console.log('El salario es: ' + (cantidadHoras * valorHora));
// }
// calcularSalario()// este es el llamado a invocacion y como es de expresion solo se puede invocar despues de su definicion

// Funcion flecha
// const calcularSalario = () => {
//   let valorHora = Number(prompt('Ingrese el valor de la hora: '))
//   let cantidadHoras = Number(prompt('Ingrese la cantidad de horas: '))
//   console.log('El salario es: ' + (cantidadHoras * valorHora));
// }
// calcularSalario()//este es el llamado a invocacion y como es de expresion solo se puede invocar despues de su definicion

// setTimeout(()=>{
//   console.log('Esto es una funcion anonima flecha')
// }, 3000)

// setTimeout(function(){
//   console.log('Esto es una funcion anonima regular')
// }, 1000)

/*
Las funciones anonimas normalmente se asocian a eventos o callbacks
*/

/*Hacer un algoritmo que calcule la nomina de n empleados
1 - Funcion que calcule el salario bruto (sin deducciones)
2 - Funcion que calcule el salario neto (deducciones)
3 - Funcion que calcule deduccciones
4 - Funcion que calcule auxilio de trasporte
(Retorno)
*/

// let local
// var global

function calcularSalarioBruto() {
  let valorHora = Number(prompt('Ingrese el valor de la hora'))
  let cantidadHoras = Number(prompt('Ingrese la cantidad de horas'))
  return valorHora * cantidadHoras
}

function calcularDeducciones(salarioEmpleado) {
  return salarioEmpleado * 0.08
}
function calcularSalarioNeto(salarioEmpleado, deduccionesEmpleado, auxilioTransporte) {
  console.log(salarioEmpleado - deduccionesEmpleado + auxilioTransporte);
  console.log(`El empleado tiene un salario bruto de: ${salarioEmpleado}, con una deduccion de 
  ${deduccionesEmpleado} y un auxilio de transporte de: ${auxilioTransporte}. El salario total a pagar es: 
  ${salarioEmpleado - deduccionesEmpleado + auxilioTransporte}`);
}
function calcularAuxilioTransporte(salarioEmpleado) {
  /*SMMLV 1.423.500 * 2 */
  if (salarioEmpleado <= 2847000) {
    return 200000
  } else {
    return 0
  }
}

let contarEmpleados = 0;
const totalEmpleados = 5;

while (contarEmpleados < totalEmpleados){
console.log(`\nProcesando empleado ${contarEmpleados + 1}`);

let salarioEmpleado = calcularSalarioBruto()
let deduccionesEmpleado = calcularDeducciones(salarioEmpleado)
let auxilioTransporte = calcularAuxilioTransporte(salarioEmpleado)

calcularSalarioNeto(salarioEmpleado, deduccionesEmpleado, auxilioTransporte)
contarEmpleados++;
}

console.log("\nProceso de salarios completado para 5 empleados.");
