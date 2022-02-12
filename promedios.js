
alert("TIENES QUE INGRESAR 3 NOTAS");

let alumnos = []; // [["Sherlock"], ["Mycroft"]] --> [0][0], [1][0]

let promedios = [];

var cantidad = parseInt(prompt('Cuántos alumnos son? '));

function agregarAlumnos(){
    for(let i = 0; i < cantidad; i ++){
        alumnos[i] = [prompt('Dame el nombre del alumno: ')];
    }
}

function notas(posicionAlumno){
    let calif = []; // [1,2,3]
    for(let i=0; i < 3; i++){
        calif[i] = parseInt(prompt(`Dame la nota # ${i+1} del alumno ${alumnos[posicionAlumno]}`));
    }
    alumnos[posicionAlumno][1] = calif;
}
function llamar_notas(){
    for (let i = 0; i < alumnos.length; i++){
        notas(i);
    }
}


function promedio(p){
    let suma = 0;
    let prom = 0;

    for (let i = 0; i< alumnos[p][1].length; i++){
        suma += alumnos[p][1][i];
        prom = suma/alumnos[p][1].length;
    }
    return prom;
}

function llamar_promedio(){
    for (let i= 0; i < cantidad; i++){
        promedios[i] = promedio(i);
    }
}



agregarAlumnos();
llamar_notas();
llamar_promedio();




for (let i = 0; i < cantidad; i++){
    document.write(`<span> El alumno ${alumnos[i][0]} tiene como promedio ${promedios[i].toFixed(2)} </span> <br> <br> <br> <br>`);
}

