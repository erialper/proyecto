

$(document).ready(function(){
    console.log( $("#perfil") );
    if ( localStorage.getItem("LogUser") === "profesor" ) {	
		$("#icon").attr('class','glyphicon glyphicon-user');
		$("#texto").text("Profesor");
		$("#sandbox").attr('href','sandbox_prof.html');
        $("#perfil").append(
            $('<a>').attr('href','perfil.html').text("Perfil")
        );
        $(".login").attr('data-target','');
        
	} else if ( localStorage.getItem("LogUser") === "estudiante" ) {	
		$("#icon").attr('class','glyphicon glyphicon-user');
		$("#texto").text("Estudiante");
		$("#sandbox").attr('href','sb_estd.html');
        $("#perfil").append(
            $('<a>').attr('href','perfil.html').text("Perfil")
        );
        $(".login").attr('data-target','');
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