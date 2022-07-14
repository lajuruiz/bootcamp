
//CONDICIONALES

/*Supongamos que trabajas para Google. Te piden hacer un programa para
que Google Home aprenda a prender y a apagar la luz. Para eso, crea una
variable llamada lamparaPrendida. Comienza pensando que la lámpara ya
está prendida, así que asígnale el valor 1. Luego crea un condicional que le
permita a Google Home saber qué hacer para prender y apagar la
lámpara. Usa console.log() para imprimir por pantalla lo que debería decir
Google Home. (prendido 1, apagado 0)  */

/* let variableLamparaPrendida=prompt("introduce un numero"); */

let variableLamparaPrendida=1

if(variableLamparaPrendida===1){
    console.log("La lampara esta prendida")
}else{
    console.log("La lampara esta apagada")
}

/* Trabajas ahora para una fábrica de ascensores. Define el procedimiento
para que podamos abrir y cerrar las puertas de un ascensor. Usa
console.log() para avisarle a los usuarios que harán las puertas,
es decir Puertas abriendo, puertas cerrando. */

let puertas=0;

if(puertas<=0){
    console.log("puertas abriendo")
}
else if(puertas>0){
    console.log("puertas cerrando")
} else{
    console.log("no se abre el ascensor!!!!")
}


/* crear condicional para validar si una persona puede votar
>18 ya ha votado
<18 Es menor de edad no vota
=18 tiene 18 primera vez que vota
 */

let edad=+prompt("introduce la edad");
//estrictamente igual
if( edad ===18){
    console.log("va a votar por primera vez")
}
else if(edad>18){
    console.log("Es mayor de edad ya ha votado varias veces")
}
else{
    console.log("no puede votar es menor de edad")
}


/* Finalmente, tu decides trabajar programando una máquina para dar acceso al cine. Debes hacer un procedimiento que use console.log() 
para informar a los usuarios si pueden ver una película PG18. Las condiciones son:
○ Si tienes menos de 12 años: “No puedes ingresar”
○ SI tienes entre 13 y 17 años: “Puedes ingresar con un adulto responsable
○ Si tienes más de 18 años: “Puedes ingresar” */

let edades=prompt("introducir edad");
if( edades <=12){
    console.log("No puedes ingresar")
}
else if(edades>=13 && edades<=17){
    console.log("Puedes ingresar con un adulto responsable")
}
else{
  console.log("Puedes ingresar")  
}


//CONDICIONAL TERNARIO: 

let edadesx=12;
var resultado=edadesx===18?"puedes votar":"no puedes votar"
console.log(resultado)

//RETO:
let jugadorX;
let maquina;

function piedraPapelTijera(jugadorX, maquina){
    if(jugadorX=="tijera" && maquina == "papel" ){
        console.log("Gana jugadorX")
    }
    else if(jugadorX== "tijera" && maquina =="piedra"){
        console.log("Gana maquina")
    }
    else if(jugadorX=="tijera" && maquina=="tijera"){
        console.log("Hay un empate")
    }
    else if(jugadorX=="piedra" && maquina =="papel"){
        console.log("Gana maquina")
    }
    else if(jugadorX=="piedra" && maquina =="tijera"){
            console.log("Gana jugadorX")
    }
    else if(jugadorX=="papel" && maquina =="papel"){
        console.log("Hay un empate")
    }
    else if(jugadorX=="papel" && maquina =="tijera"){
        console.log("Gana maquina")
    }
    else if(jugadorX=="papel" && maquina =="piedra"){
        console.log("Gana jugadorX")
    }
    else{
        console.log("No hay nadie jugando")
    }
}

piedraPapelTijera("papel", "tijera")
//////////////////////////////////////////////////////////////////////////

//CICLOS
/* Una juguetería te contrata para que programes un Loro que juega a 
Tingo Tango. Desearía que la pruebes imprimiendo 32 veces en pantalla: Tingo! */

for(let loro=1; loro<=32; loro++){
    if(loro>32){
       console.log("Tango") 
    }
    else{
        console.log("tingo")
    }
}

/* Eres Betty, la fea. Don Armando te pide que maquilles los informes del año pasado y que imprimas los gastos de cada mes aumentándole un 10% más.
Hint: todos los meses tuvieron el mismo gasto (100), así que usa una sola
variable y aumenta en 10%. Don Armando espera que el informe se vea así:
○ Gastos mes 1: x
○ Gastos mes 2: x
○ Gastos mes 3: x….
○ Gastos mes 12: x */

let gasto=100 *0.1;
gasto=10;

for(i=1; i<=12;i++){
    console.log("Gastos mes " + i + " fue: $" + gasto)
}




//repaso con arrays
//for
var estudiantes=["maria", "gloria", "susan"];
function saludar(estudiante){
    console.log(`Hola ${estudiante}`)
    }
for(var i=0; i< estudiantes.length; i++){
    saludar(estudiantes[i])
}

//for of 
var estudiantes=["maria", "gloria", "susan"];
function saludar(estudiante){
    console.log(`Hola ${estudiante}`)
    }

for(var estudiante of estudiantes){
         saludar(estudiante)
}


/* Imprima todos los números del 1 al 45, pero haga lo siguiente:
Que diga para los múltiplos 3 “Hola somos los múltiplos de 5”
Que diga para los múltiplos de 5 “Hola, somos los múltiplos de 5”
Que diga para los múltiplos de 3 y 5 : _“Hola, somos los múltiplos de 3 y 5”
 */

for (let i=0; i<=45; i++){
    if(i%3 ==0 && i%5==0) {
        console.log("Hola, somos los múltiplos de 3y 5:" + i)
    }
    else if (i%3 ==0){
        console.log("Hola somos los múltiplos de 3:" + i)
    }
    else if( i%5==0){
    console.log("Hola, somos los múltiplos de 5:" + i)
    }
}


//while
var estudiantes=["maria", "gloria", "susan"];
function saludar(estudiante){
    console.log(`Hola ${estudiante}`)
    }
var i=0;
while(i< estudiantes.length){
    saludar(estudiantes[i])
    i++
}

