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

