/* 1. Declara un array que vamos a llamar “estudiantes” con los siguientes
valores: Ana, Manuela, Raúl, Carolina, María, Antonio, Cristina
2. Con un ciclo recorre el array e imprime en consola los estudiantes cuyo
nombre empiece por ‘A’.
3. Con otro ciclo recorre el array e imprime en consola los estudiantes cuyo
nombre tenga más de 6 letras. */

//1
let estudiantes=["Ana", "Manuela", "Raúl", "Carolina", "María", "Antonio", "Cristina"];
//2
for(let i=0; i<estudiantes.length; i++){
    if(estudiantes[i][0] ==="A"){
        console.log(estudiantes[i]);
    }else{
        console.log("No hay estudiantes que empiecen por A");
    }
}
    
//tambien seria no poner el else y asi se imprimen los dos por la A

let students=["Ana", "Manuela", "Raúl", "Carolina", "María", "Antonio", "Cristina"];

for(let i=0; i<students.length; i++){
    if(students[i].length>=6){
        console.log(students[i])
    }
}


//objetos

/* 1. Declara un objeto que represente una mascota que tenga los siguientes
atributos: nombre, tipo de animal, edad, nombre del dueño y juguetes.
2. El atributo juguetes debe contener un arreglo de valores que hagan
referencia a todos los juguetes de la mascota.
3. Crea 2 mascotas más.
4. Imprime en consola los nombres de las 3 mascotas con el nombre de su
dueño.
5. Ej: Ayudante de Santa es la mascota de Homero Simpson. */

//1 y 2
let mascotas={
    perro1:{nombre:"Django",tipoDeAnimal:"Perro", Edad:2, nombreDelDueno:"Laura",juguetes:["Peluches","pelotas","Cuerdas"] },
    perro2:{nombre:"Kevin",tipoDeAnimal:"Perro",Edad:1,nombreDelDueno:"Jennifer",juguetes:["Huesos","pelotas","Cuerdas"] },
    perro3:{nombre:"miranda",tipoDeAnimal:"Perro",Edad:1,nombreDelDueno:"Sara",juguetes:["Huesos","pelotas","Cuerdas"]}
};


console.log("El perro: " + mascotas.perro1.nombre + " es el consentido " + mascotas.perro1.nombreDelDueno )

console.log(mascotas.perro2.nombre  + mascotas.perro2.nombreDelDueno)

console.log(mascotas.perro3.nombre + mascotas.perro3.nombreDelDueno )

/* Reto: Métodos del Array
1. Declara un array que tenga los números del 1 al 30, utilizando un método
del array.
2. Debes aplicar un método del array para filtrar todos los números que
sean múltiplos de 3.
3. Debes aplicar un método del array para filtrar todos los números que
sean múltiplos de 5.
4. Debes aplicar un método para crear un nuevo arreglo que contenga el
valor de cada número multiplicado por 2.
5. Declara un array que tenga valores de diferentes tipos de datos, y utiliza
un método que nos diga si todos los tipos de datos son iguales o no. */

//1.

let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

let num=[];
let resultNum=num.splice(30,0, "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30");


let numb =Array.from(Array(31).keys()).slice(1,31)
console.log(numb)

//keys= El método keys() devuelve un nuevo objeto Array Iterator que contiene las claves de índice con las que acceder a cada elemento en el array.

let numbe=Array(30).fill(undefined).map(function(x,idx){
    return idx +1 
});

console.log(numbe);


/* 3. Debes aplicar un método del array para filtrar todos los números que sean múltiplos de 3.




4. Debes aplicar un método para crear un nuevo arreglo que contenga el valor de cada número multiplicado por 2. */

let numberss=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

let arrayNumberss=numberss.map(function(num){
    return num * 2
})

console.log(arrayNumberss)