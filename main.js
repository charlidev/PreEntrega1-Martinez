let numPersonas = Number(prompt('Cuantas personas están registradas? '));
let suma = 0;
let edades=0;
for (let i=1; i<=numPersonas; i++){
    edades = Number(prompt('Cual es la edad de la persona #'+i+'? '));
    suma += edades;
}
let res = suma/edades;
prompt('El promedio de edad de las personas registradas es: '+res);