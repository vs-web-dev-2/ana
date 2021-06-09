function calcularIva(importe, impuesto=21){
    return importe * impuesto /100;
}
console.log(calcularIva(10));

function calcularImporte(importe, iva){
    return importe + iva
}
let importe = 10;
let iva = calcularIva(importe, impuesto=21);
let importeTotal =calcularImporte(importe, iva);

console.log("El iva de  " + importe + " es " + iva + " y el importe total es "+ importeTotal);
console.log(
    `El IVA de ${importe} es ${iva}
        y el total es  ${importeTotal}`
  );
