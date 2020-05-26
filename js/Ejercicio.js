var letraDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
//las Arrays [] empiezan en 0
var numeroDNI = Number(prompt("Escribe los numeros del dni"));
var numeroDNI = 8;

var divideDNI23 = (numeroDNI % 23);
    //console.log(divideDNI23); me mostrara el resto 




function calculoletraDNI(divideDNI23) {
    if (divideDNI23 <= 24) {
        document.write(`DNI= ${numeroDNI} + ${divideDNI23.letraDNI}`);

    }
    else {
        document.write('El numero del DNI introducido no es correcto');

    }


}

//el resultado de la variable divideDNI23 debo restarle 1 (-1) ya que la array empieza en 0

//no funcionam no me lo calcula


