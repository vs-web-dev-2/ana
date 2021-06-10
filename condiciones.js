let bici_1 = {
    marca : "bh",
    precio : 300,
    radio : 30,
    esDeCarretera : true,
    color : "rojo",
};
let bici_2 = {
    marca : "orbea",
    precio : 300,
    radio : 25,
    esDeCarretera : true,
    color : "rojo",
};
let bici_3 = {
    marca : "bh",
    precio : 350,
    radio : 25,
    esDeCarretera : true,
    color : "azul",
};
let bici_4 = {
    marca : "bh",
    precio : 400,
    radio : 30,
    esDeCarretera : false,
    color : "azul",
};
function comprarBici(bici){
cosole.log(`Me compro la ${bici.marca}de color ${bici.color}por ${bici.precio}€`) 
}
function descartarBici(bici){
    console.log(`  NO Me compro la ${bici.marca}de color ${bici.color}por ${bici.precio}€`)
}
//comprarBici(bici_1)
if(bici_1.marca == "bh"){
    comprarBici(bici_1);
}else{
    console.log("no me vale esta bici")
    console.log(bici_1);
} 
if(bici_2.marca == "bh"){
    comprarBici(bici_2);
}else{
    console.log("no me vale esta bici")
    console.log(bici_2);
} 
if(bici_3.marca == "bh"){
    comprarBici(bici_1);
}else{
    console.log("no me vale esta bici")
    console.log(bici_3);
} 
if(bici_4.marca == "bh"){
    comprarBici(bici_4);
}else{
    console.log("no me vale esta bici")
    console.log(bici_4);
} 

//otras opciones, si solo hay una instruccion
//puedes quitar las llaves
if(bici_4.marca == "bh") 
    comprarBici(bici_4);
else
    console.log("no me vale esta bici")
    console.log(bici_4);

//otro caso ternario es un if simplificado
bici_4 > 350 ? comprarBici(bici_4) : descartarBici(bici_4);

//roja o que no sea de carretera


