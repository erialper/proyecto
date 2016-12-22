

$(document).ready(function(){
    $("#sandbox").hide();
	$("#proyecto").hide()
    if ( localStorage.getItem("LogUser") === "profesor" ) {	
		$("#sandbox").show();
		$("#proyecto").show();
		$("#icon").attr('class','glyphicon glyphicon-user');
		$("#texto").text("Profesor");
		$("#sandbox").attr('href','sandbox_prof.html');
        $("#perfil").append(
            $('<a>').attr('href','perfil.html').text("Perfil")
        );
        $(".login").attr('data-target','');
        $("#errorMsj").remove();
        
	} else if ( localStorage.getItem("LogUser") === "estudiante" ) {
		$("#sandbox").show();		
		$("#icon").attr('class','glyphicon glyphicon-user');
		$("#texto").text("Estudiante");
		$("#sandbox").attr('href','sb_estd.html');
        $("#perfil").append(
            $('<a>').attr('href','perfil.html').text("Perfil")
        );
        $(".login").attr('data-target','');
        $("#errorMsj").remove();
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