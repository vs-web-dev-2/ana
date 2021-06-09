//calcular importe total de la compra
//6 camisas 10 la camisa
//2 Zapatillas 30 cada par con un 20 % de descuento

//importe camisas
function calcularImporteCamisas(impCamisa, numeroCamisas) {
    return impCamisa * numeroCamisas
}
let impCamisa = 10
let numeroCamisas =6
let imporCamisasTotal = calcularImporteCamisas(impCamisa, numeroCamisas)
console.log("El importe total de las " + numeroCamisas + "  camisas hacen un total de : " + imporCamisasTotal);
console.log();

//calculo del descuenteo de las Zapatillas
function calcularDescuento(impZapatilla,porcentajeDescuento){
    return impZapatilla * porcentajeDescuento /100
}
let impZapatilla = 30;
let porcentajeDescuento = 20;
let descuento = calcularDescuento(impZapatilla,porcentajeDescuento);
console.log(`El descuento que se ha hecho por cada zapatilla es ${descuento}`);
console.log();
//calculo de los 2 pares de zapatillas con el descuento
function calcularImpoZapasDescuento(importeZ, numeroZ, descuento){
    return (importeZ - descuento) * 2
}
let importeZ = 30
let numeroZ = 2
let importeZapasDes = calcularImpoZapasDescuento(importeZ, numeroZ, descuento);
console.log(`El importe total de las Zapatillas es  ${importeZapasDes} €
con un descuento de ${descuento} € por cada zapatilla`);
console.log();

//calculo de la compra total
function calcularTotalCompra(imporCamisasTotal,importeZapasDes){
    return (imporCamisasTotal + importeZapasDes)
}
let totalCompra = calcularTotalCompra(imporCamisasTotal,importeZapasDes)
console.log("El total de la compra ha sido " +  totalCompra + " €");


