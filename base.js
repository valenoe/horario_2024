// Función para resaltar el cuadro correspondiente a la hora actual
function resaltarCuadroHoraActual() {
    var ahora = new Date();
    
    var hora = ahora.getHours();
    var minutos = ahora.getMinutes();
    var diaSemana = ahora.getDay();
    
    //var claseHora = 'hora-' + hora.toString().padStart(2, '0') + minutos.toString().padStart(2, '0');
    //alert(claseHora);
    var claseHora = '';

    if(hora <8 || hora > 20){
        claseHora= "fuera_de_horario";
    } else {
        if (hora < 9 || (hora === 9 && minutos < 30)) {
            claseHora = 'hora-0830';
        } else if (hora < 10 || (hora === 10 && minutos < 40)) {
            claseHora = 'hora-0940';
        } else  if (hora < 12 ) {
            claseHora = 'hora-1050';
        } else if (hora < 13 || (hora === 13 && minutos < 10)) {
            claseHora = 'hora-1200';
        } else if (hora < 14 || (hora === 14 && minutos < 20)) {
            claseHora = 'hora-1310';
        } else if (hora < 15 || (hora === 15 && minutos < 30)) {
            claseHora = 'hora-1420';
        } else if (hora < 16 || (hora === 16 && minutos < 40)) {
            claseHora = 'hora-1530';
        } else if (hora < 17 || (hora === 17 && minutos < 50)) {
            claseHora = 'hora-1640';
        } else if (hora < 19) {
            claseHora = 'hora-1750';
        } else{
            claseHora = 'hora-1900';
        }
    }
    /*var hoy = claseHora+'-lunes';
console.log(hoy);*/
    switch(diaSemana){
        case 1:
            claseHora = claseHora+'-lunes';
            break;
        case 2:
            claseHora = claseHora+'-martes';
            break;
        case 3:
            claseHora = claseHora+'-miercoles';
            break;
        case 4:
            claseHora = claseHora+'-jueves';
            break;
        case 5:
            claseHora = claseHora+'-viernes';
            break;
    }
    console.log(claseHora);
    

   


    // Remover resaltado de todos los cuadros
    var cuadros = document.querySelectorAll('td');
    cuadros.forEach(function(cuadro) {
        cuadro.classList.remove('resaltado');
    });

    // Agregar resaltado al cuadro correspondiente a la hora actual
    var cuadroHoraActual = document.getElementsByClassName(claseHora);
    if (cuadroHoraActual.length > 0) {
        cuadroHoraActual[0].classList.add('resaltado');
    }
}


function actualizaReloj(){
    var ahora = new Date();
    var fecha = ahora.toLocaleDateString();
    var hora = ahora.toLocaleTimeString();
    document.getElementById('reloj').innerHTML = fecha + '<br>' + hora;
    
}

setInterval(actualizaReloj, 1000);
setInterval(resaltarCuadroHoraActual, 60000); // Actualizar cada minuto
        resaltarCuadroHoraActual();
