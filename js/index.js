/* calculadora de sueldo neto a cobrar en periodo 09/2024 dentro del Sindicato de empleados de pirulines de la Republica Argentina,
el mismo pide que se ingrese, categoria, antiguedad, dias trabajados. el mismo calculara segun los dias trabajados si 
cobrará presentismo o no, tomando en cuenta que trabaja 6 dias a la semana y en el periodo 09/2024 hay 21 dias 
de lunes a sabados, tambien se imprime en consola los siguientes valores: 

1"sueldo basico" 
2"antiguedad laboral"
3"calculo de cobro por antiguedad" 
4"aclara si perdiste el presentismo o si cobras dicho beneficio" 
5"imprime el sueldo bruto" 
6"imprime descuento de aporte jubilatorio"
7"imprime descuento de aporte de obra social"
8"imprime descuento de aporte sindical"
9"imprime en base a los valores anteriores el importe neto a cobrar"

*/


const ANTIGUEDAD = 0.01;
const PRESENTISMO = .0833;
const APORTES = {
    jubilacion: 0.11,
    obraSocial: 0.03,
    sindicato: 0.02
};
let periodo = "Septiembre/2024"
let diasDeTrabajo = 21
let seleccionaCategoria = prompt("Ingresa una categoría (vendedor, cocinero, administrativo, directivo)");

let sueldoBasico;

switch (seleccionaCategoria.toLowerCase()) { 
  case "vendedor":
    sueldoBasico = 750000;
    break;
  case "cocinero":
    sueldoBasico = 850000;
    break;
  case "administrativo":
    sueldoBasico = 780000;
    break;
  case "directivo":
    sueldoBasico = 2000000;
    break;
  default:
    alert("No seleccionaste una opción válida");
}

if (sueldoBasico) {
  console.log("Tu Sueldo Basico es de:" + "$" + sueldoBasico);
}
  

  let añosAntiguedad = parseInt(prompt("Ingresa antigüedad basada en años de 0 a 40"), 10);

if (isNaN(añosAntiguedad)) {
    console.log("Por favor, ingresa un número válido.");
} else if (añosAntiguedad >= 41) {
    console.log("Por favor, ingresa un número menor o igual a 40.");
} else {
    console.log("Años de antigüedad ingresados: " + añosAntiguedad);
}

    let calculoAntiguedad = (añosAntiguedad * ANTIGUEDAD * sueldoBasico)
    console.log("Importe por Antiguedad:" + "$" + calculoAntiguedad);

    let diasTrabajados = parseInt(prompt("Ingresa los días que fuiste a trabajar"), 10);

    if (isNaN(diasTrabajados)) {
        console.log("Por favor, ingresa un número válido para los días trabajados.");
    } else {
        let sueldoBruto; // Definimos la variable sueldoBruto
    }
        if (diasTrabajados < 21) {
            sueldoBruto = sueldoBasico + calculoAntiguedad; // Sueldo sin presentismo
            console.log("Este mes perdiste el presentismo.");
        } else {
            sueldoBruto = (PRESENTISMO * sueldoBasico) + calculoAntiguedad + sueldoBasico; // Sueldo con presentismo
            console.log("Este mes no perdiste el presentismo. Se te aplicará un beneficio del " + (PRESENTISMO * 100) + "%.");
        }
    
        console.log("Tu Sueldo Bruto a Cobrar en periodo:" +  periodo + "es de:" + "$" + sueldoBruto);
  
    let descuentoJubilacion = sueldoBruto * APORTES.jubilacion;
    let descuentoObraSocial = sueldoBruto * APORTES.obraSocial;
    let descuentoSindicato = sueldoBruto * APORTES.sindicato;
    

    

    console.log("Descuento Aporte Jubilatorio:" + "$" + descuentoJubilacion);
    console.log("Descuento Aporte Obra Social:" + "$" + descuentoObraSocial);
    console.log("Descuento Aporte Sindical:" + "$" + descuentoSindicato);
    
    let sueldoNeto = sueldoBruto - (descuentoJubilacion + descuentoObraSocial + descuentoSindicato);
    console.log("Total Sueldo Neto a Cobrar en:" + "$" + sueldoNeto);








