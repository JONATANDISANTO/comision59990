/* calculadora de sueldo neto a cobrar en periodo 09/2024 dentro del Sindicato de empleados de pirulines de la Republica Argentina,
el mismo pide que se ingrese, categoria, antiguedad, presentismo.*/


const ANTIGUEDAD = 0.01;
const PRESENTISMO = .0833;
const APORTES = {
    jubilacion: 0.11,
    obraSocial: 0.03,
    sindicato: 0.02
};
let periodo = "Septiembre/2024"

let seleccionaCategoria = prompt("Ingresa una categoría (vendedor, cocinero, administrativo, directivo)");

let sueldoBasico;

switch (seleccionaCategoria.toLowerCase()) { 
  case "vendedor":
    sueldoBasico = 30000;
    break;
  case "cocinero":
    sueldoBasico = 35000;
    break;
  case "administrativo":
    sueldoBasico = 32000;
    break;
  case "directivo":
    sueldoBasico = 50000;
    break;
  default:
    alert("No seleccionaste una opción válida");
}

if (sueldoBasico) {
  alert("El resultado es: " + sueldoBasico);
}
  

  let añosAntiguedad = parseInt(prompt("Ingresa antigüedad basada en años de 0 a 40"), 10);

if (isNaN(añosAntiguedad)) {
    console.log("Por favor, ingresa un número válido.");
} else if (añosAntiguedad >= 41) {
    console.log("Por favor, ingresa un número menor o igual a 40.");
} else {
    // Continúa con los cálculos del recibo de sueldo
    console.log("Años de antigüedad ingresados: " + añosAntiguedad);
}

let calculoAntiguedad = (añosAntiguedad * ANTIGUEDAD * sueldoBasico)
    console.log(calculoAntiguedad);
/*let sueldoBruto = (presentismo + añosAntiguedad + sueldoBasico);
console.log("Tu sueldo bruto es de " + sueldoBruto);*/








