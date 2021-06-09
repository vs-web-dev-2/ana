function saludar(){
    console.log("Hola mundo");
}
//llamo  a la funcion
saludar();

//otro ejemplo

function saludarPorNombre(nombre){
    console.log("Hola " + nombre);
}
//llamo la funcion
saludarPorNombre("Ana");
let amigo="Miguel";
saludarPorNombre(amigo);
//otro ejemplo
function saludarElavorado(nombre,saludo ="Hola"){
console.log(saludo + "," + nombre);
}
saludarElavorado("Sergio","Buenos días");
saludarElavorado("Dosil");

//funciones operaciones

function calcularCircunferencia(r){
    //2 * PI * r
    const PI =3.14
    return 2 * PI * r ;
}
let circunferencia =calcularCircunferencia(5);
console.log(circunferencia);
let radio =20;
circunferencia =calcularCircunferencia(radio);
console.log(circunferencia);
let r = 30;
circunferencia =calcularCircunferencia(r);
console.log(circunferencia);
const PI = 9;
circunferencia =calcularCircunferencia(100);
console.log(circunferencia);

//otro ejemplo
function calcularSuperficie(lado){
    return lado * lado;
}
console.log(calcularSuperficie(9));
//otro ejemplo
const lados = 9;
function calcularPerimetro(lado) {
    const lados = 4;
    console.log("lados local :" + lados);
    return  lado * lados;
}
console.log(calcularPerimetro(5));
console.log("lados global :" + lados);



