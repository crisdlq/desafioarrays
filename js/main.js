

 function ingresoDatos(mensaje) {
    let dato = prompt(mensaje);
    console.log(dato);
    return dato;
}

let usuario = ingresoDatos("Ingrese su Nombre y Apellido");
let sueldo = ingresoDatos("Ingrese su sueldo neto en pesos");
let porcentaje = ingresoDatos ("Ingrese el porcentaje de su sueldo que le gustaria destinar a DCA en Crypto");
let total = (sueldo/100)*porcentaje;
 

function login(){
if(!usuario || !sueldo || !porcentaje){
    alert("Por Favor Ingresa todos los datos requeridos")
}else{
    alert("Bienvenido " + usuario + ", segun los datos proporcionados te gustaria destinar $" + total + " de tu sueldo mensual a cryptomonedas, la cotizacion de BTC de hoy, acumularias la cantidad de _____ por mes");
}};

login(); 


//Objeto
/* const datosUsuario = {
    Nombre: usuario ,
    Sueldo: sueldo ,
    Porcentaje:porcentaje,
    Total: (sueldo/100)*porcentaje,

    
};

console.log(datosUsuario); */



//activar si es necesario:
/* console.log(datosUsuario.Nombre);
console.log(datosUsuario.Sueldo);
console.log(datosUsuario.Porcentaje);
console.log(datosUsuario.Total); */

//Arrays Activado



 const datosUsuario = [usuario, sueldo , porcentaje,total ];

console.log(datosUsuario);
//Mostrar el Total a destinar:
console.log(datosUsuario[3]); 
