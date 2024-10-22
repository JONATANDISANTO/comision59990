/* calculadora de sueldo neto a cobrar en periodo 09/2024 dentro del Sindicato de empleados de pirulines de la Republica Argentina,
el mismo pide que se ingrese, categoria, antiguedad, dias trabajados. el mismo calculara segun los dias trabajados si 
cobrará presentismo o no, tomando en cuenta que trabaja 6 dias a la semana y en el periodo 09/2024 hay 21 dias 
de lunes a sabados, tambien se imprime en consola los siguientes valores: 

0"elige la cantidad de empleados a calcular"(ciclo for)
1"sueldo basico" 
2"antiguedad laboral"
3"calculo de cobro por antiguedad" 
4"aclara si perdiste el presentismo o si cobras dicho beneficio" 
5"imprime el sueldo bruto" 
6"imprime descuento de aporte jubilatorio"
7"imprime descuento de aporte de obra social"
8"imprime descuento de aporte sindical"
9"imprime en base a los valores anteriores el importe neto a cobrar"

segun lo corregiodo la entrega anterior modifique el  switch y realice una busqueda utilizando arrays. interactue con el html de manera basica segun las ultimas clases para que luego de la consulta se genere una planilla en formato basico de recibo de sueldo.
*/


const ANTIGUEDAD = 0.01;
const PRESENTISMO = 0.0833;
const APORTES = {
    jubilacion: 0.11,
    obraSocial: 0.03,
    sindicato: 0.02
};

let periodo = "Septiembre/2024";
let diasDeTrabajo = 21;

const categoriasSueldos = {
    vendedor: 750000,
    cocinero: 850000,
    administrativo: 780000,
    directivo: 2000000
};

let empleados = [];

let cantidadEmpleados = parseInt(prompt("¿Cuántos empleados deseas calcular?"), 10);

function agregarEmpleado(categoria, añosAntiguedad, diasTrabajados) {
    let empleado = {
        categoria: categoria,
        añosAntiguedad: añosAntiguedad,
        diasTrabajados: diasTrabajados,
        sueldoBasico: categoriasSueldos[categoria] || 0
    };
    empleados.push(empleado);
}

function calcularSueldoBruto(sueldoBasico, calculoAntiguedad, diasTrabajados) {
    if (diasTrabajados < diasDeTrabajo) {
        console.log("Este mes perdiste el presentismo.");
        return sueldoBasico + calculoAntiguedad;
    } else {
        console.log("Este mes no perdiste el presentismo. Se te aplicará un beneficio del " + (PRESENTISMO * 100) + "%.");
        return (PRESENTISMO * sueldoBasico) + calculoAntiguedad + sueldoBasico;
    }
}

function calcularSueldoNeto(sueldoBruto) {
    let descuentoJubilacion = sueldoBruto * APORTES.jubilacion;
    let descuentoObraSocial = sueldoBruto * APORTES.obraSocial;
    let descuentoSindicato = sueldoBruto * APORTES.sindicato;

    console.log("Descuento Aporte Jubilatorio: $" + descuentoJubilacion);
    console.log("Descuento Aporte Obra Social: $" + descuentoObraSocial);
    console.log("Descuento Aporte Sindical: $" + descuentoSindicato);

    return sueldoBruto - (descuentoJubilacion + descuentoObraSocial + descuentoSindicato);
}

for (let i = 0; i < cantidadEmpleados; i++) {
    let intentosCategoria = 1;
    let seleccionaCategoria;
    
    while (intentosCategoria <= 1) {
        seleccionaCategoria = prompt("Ingresa una categoría (vendedor, cocinero, administrativo, directivo)").toLowerCase();
        if (categoriasSueldos[seleccionaCategoria]) {
            break;
        }
        intentosCategoria++;
        if (intentosCategoria > 1) {
            alert("No seleccionaste una categoría válida.");
            continue;
        }
    }

    let sueldoBasico = categoriasSueldos[seleccionaCategoria];
    console.log("Tu Sueldo Básico es de: $" + sueldoBasico);

    let intentosAntiguedad = 0;
    let añosAntiguedad;
    
    while (intentosAntiguedad < 3) {
        añosAntiguedad = parseInt(prompt("Ingresa antigüedad basada en años de 0 a 40"), 10);
        if (!isNaN(añosAntiguedad) && añosAntiguedad <= 40) {
            break;
        }
        intentosAntiguedad++;
        console.log("Por favor, ingresa un número válido (0-40). Intentos restantes: " + (3 - intentosAntiguedad));
        if (intentosAntiguedad === 3) continue;
    }

    let calculoAntiguedad = añosAntiguedad * ANTIGUEDAD * sueldoBasico;
    console.log("Importe por Antigüedad: $" + calculoAntiguedad);

    let diasTrabajados = parseInt(prompt("Ingresa los días que fuiste a trabajar"), 10);
    agregarEmpleado(seleccionaCategoria, añosAntiguedad, diasTrabajados);

    let sueldoBruto = calcularSueldoBruto(sueldoBasico, calculoAntiguedad, diasTrabajados);
    console.log("Tu Sueldo Bruto a Cobrar en periodo " + periodo + " es de: $" + sueldoBruto);

    const sueldoNeto = calcularSueldoNeto(sueldoBruto);
    console.log("Total Sueldo Neto a Cobrar: $" + sueldoNeto);
}

let empleadosConAntiguedad = empleados.filter(empleado => empleado.añosAntiguedad > 10);
console.log("Empleados con más de 10 años de antigüedad:", empleadosConAntiguedad);







