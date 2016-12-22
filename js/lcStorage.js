

$(document).ready(function(){
    if ( localStorage.getItem("LogUser") === "profesor" ) {	
		$("#icon").attr('class','glyphicon glyphicon-user');
		$("#texto").text("Profesor");
		$("#sandbox").attr('href','sandbox_prof.html');
	} else if ( localStorage.getItem("LogUser") === "estudiante" ) {	
		$("#icon").attr('class','glyphicon glyphicon-user');
		$("#texto").text("Estudiante");
		$("#sandbox").attr('href','sb_estd.html');
	}
});




/*
// Funcion Cargar y Mostrar datos
$(document).ready( function() {
    $('#boton-cargar').click(function(){                       
        // Obtener datos almacenados
        var nombre = localStorage.getItem("Nombre");
        var apellido = localStorage.getItem("Apellido");
        // Mostrar datos almacenados     
        document.getElementById("nombre").innerHTML = nombre;
        document.getElementById("apellido").innerHTML = apellido; 
    });   
});
*/