const PI = 3.14;
let marca = "bh";
let radio = 30;
let rueda = 2 * PI * radio;
let esDeCarretera = true;
marca = "orbea";
radio = 40;
//let marca = "orbea";
//PI =9 ;
console.log("Marca : " + marca);
console.log("Longitud Rueda : " + rueda);
console.log("Radio : " + radio);
console.log(esDeCarretera);
//tipo compuesto, es un objeto
let bici = {
    marca : "bh",
    precio : 300,
    radio : 30,
    esDeCarretera : true,
    color : "rojo",
};
bici.color = "azul"
console.log(bici);
console.log(bici.precio);
console.log(bici.color);
//array empieza por corchetes
let colores = ["rojo","azul","blanco"];
console.log(colores);
console.log(colores[1]);
colores[2] = "negro";
console.log(colores);
//asignaciones
bici.marca = marca;
console.log(bici);
marca ="specialize";
console.log(bici.marca);
console.log(marca);
bici.color = colores[0];
console.log(bici);
//booleanos
//comparaciones = aqui se pone == ; ! es una negacion
let esGrande = bici.radio < 25;
let meGusta = bici.color == "azul";
console.log(esGrande);
console.log(meGusta);
bici.color =colores[1];
console.log(meGusta);
meGusta = bici.color != "azul";
console.log(meGusta);

//declaracion
let etiqueta
//asignacion
let etiqueta ="hola";
//intrucciones realiza cosas
console.log(etiqueta);
//expresion es lo que esta a la derecha del =
etiqueta = "horas : " + 12 + 12;
//coparaciones
//> < >= <= == !=


