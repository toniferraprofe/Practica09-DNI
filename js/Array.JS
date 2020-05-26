//metodo en los Arrays

var articulos = [
    { nombre: 'aspiradora', precio: 320 },
    { nombre: 'x-box', precio: 520 },
    { nombre: 'microhondas', precio: 150 },
    { nombre: 'secadora', precio: 440 },
    { nombre: 'pc', precio: 1320 },

];

//FILTER = crea un filtro, en este caso inferior a 400

var articulosMenosCuatrocientos = articulos.filter(function(articulo){
    return articulo.precio < 400;
});

//FIN

//MAP - Devuelve los nombres de los articulos listados en articulos, no modifica nada
var articulosNombre = articulos.map(function(articulo) {
    return articulo.nombre;
    
});

//FIN

//FIND

var buscarPC =articulos.find(function(articulo){
    return articulo.nombre === 'pc';
});

//Fin


//FOREACH - No crea ningun array nuevo

articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});


//SOME - Genera una nueva variable Booleana
//devuelve true o false

var articulosBaratos = articulos.some(function (articulo) {
    return articulo.precio <= 180;

});


//Arrays

//objeto

var persona01 = {
    nombre : 'Pepe',
    edad : 54,
    altura : 1.76,
};

function lanzarpantalla(persona) {
    document.write(persona.nombre.toUpperCase() + "<br>");
    console.log(persona.nombre.toUpperCase());
}

//FIN


//Nueva forma JS - CON OBJETOS Menos codigos

var persona01 = {
    nombre : 'Pepe',
    edad : 54,
    altura : 1.76,
};

var persona02 = {
    nombre : 'Juan',
    edad : 33,
    altura : 1.66,
};

function lanzarPantallaNew ({nombre}) {
    document.write(nombre.toUpperCase() + '<br>'); //Cuidado las mayusculas
}




//Nueva forma JS - con OBJETOS

var persona01 = {
    nombre : 'Pepe',
    edad : 54,
    altura : 1.76,
};

var persona02 = {
    nombre : 'Juan',
    edad : 33,
    altura : 1.66,
};

function lanzarPantallaNew ({ edad }) { //
    document.write(edad.toUpperCase() + '<br>'); //Cuidado las mayusculas
}

//Este falla porque "objeto" no está definido.
//lo mismo sucede con EDAD, no puede poner en mayusculas la edad


//ESTE SI FUNCIONA porque pide solo la edad, no pone toUpperCase

var persona01 = {
    nombre : 'Pepe',
    edad : 54,
    altura : 1.76,
};

var persona02 = {
    nombre : 'Juan',
    edad : 33,
    altura : 1.66,
};

function lanzarPantallaNew ({ edad }) {
    document.write(edad + '<br>'); //Cuidado las mayusculas
}






//Nueva forma JS

var persona01 = {
    nombre : 'Pepe',
    edad : 54,
    altura : 1.76,
};

var persona02 = {
    nombre : 'Juan',
    edad : 33,
    altura : 1.66,
};

function lanzarPantallaNew ({ edad }) {
    document.write(edad + '<br>'); //Cuidado las mayusculas
}

var persona03 = {
    nombre : 'Miguel',
    edad : 19,
    altura : 1.36,
};
function lanzarPantallaNew02(persona) {
    //var persona = persona.nombre; //esto es lo mismo que
    var { nombre } = persona; //Este parece mejor

document.write(nombre + "<br>");

}

















