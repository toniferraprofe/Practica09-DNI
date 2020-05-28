// VARIABLES
var numeroDni = prompt("Escribe los numeros del dni", "Introduce 8 números");

// Se busca el resto de la división 
var resto = (numeroDni % 23);

// en lugar de un obejeto más fácil un array
var letrasDni = [
"T",
"R",
"W",
"A",
"G",
"M",
"Y",
"F",
"P",
"D",
"X",
"B",
"N",
"J",
"Z",
"S",
"Q",
"V",
"H",
"L",
"C",
"K",
"E",
"T"
]


// RESULTADO

var resultado = `numeroDni = ${numeroDni} - ${letrasDni[resto]}`;

document.write(resultado);
console.log(resultado);







