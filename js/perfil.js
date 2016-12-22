/*
function agregarProyecto(){
	
	if ( $("#descrip").val() === "" || $("#titulo").val() === "" || $("#autor").val() === "" || $("#etiq").val() === "" ) {
		console.log("campos vacios");
		return;		
	}

	$('#lista_Gener ul').append(
	    $('<li>').attr('class','list-group-item list-group-item-info').append(
	        $("#titulo").val()
	    )
	)	
	
	$('#lista_Prof ul').append(
	    $('<li>').attr('class','list-group-item list-group-item-info').append(	        
	        $("<a>").attr('href','#').append(
	        	$('<span>').attr('class', 'label label-warning').append("Edit")
	        ),$("<a>").attr('href','#').append(
	        	$('<span>').attr('class', 'label label-danger').append("Delete")
	        ), $("#titulo").val()
	    )
	)

	$("#descrip").val("");
	$("#titulo").val("");
	$("#autor").val("");
	$("#etiq").val("");

	console.log("Se agrego elemento");
}


$("#info_ejerc button").click(
	function(){
		agregarProyecto();
		// $("input").val("");
	}
);
*/

function cargar(){
	var url = "json/profesores.json"
	var cont = 0;
	$.getJSON(url,function(resul){
		resul.forEach(function(item){

			if ( localStorage.getItem("LogUser") === "profesor" ) 
			{	
				if (item.nombres == "Marco Antonio") {
					$("#nickUser").append(						
						$("<img>").attr({
							"src":item.img,
							"class":"img-rounded",
							"style":"width:15% ; margin-right:2%"
						}),
						$("<strong>").text("Profesor")
					);

					$("#dataUser").append( item.nombres + " " + item.apellidos + "<br>" + 
											item.correo + "<br>" + 
											"sept. 15 de 1989." + "<br>" + 
											"10 Ejercicio." + "<br>" + 
											"Nivel: Avanzado.");
					/*
					$("#dataUser").append(
						$("<br>"),
						$("<button>").attr({ 
							"type":"button",
							"class":"btn btn-default btn-sm",
							"id":"signout"
						}).text("Cerrar sesión")
					);
					*/
					// console.log( $("#signout") );

				}
			} 
			else if ( localStorage.getItem("LogUser") === "estudiante" ) 
			{
				cont++;
				if (cont == 1) {
					$("#nickUser").append(
							$("<img>").attr({
								"src":"images/profile.png",
								"class":"img-rounded",
								"style":"width:15% ; margin-right:2%"
							}),
							$("<strong>").text("Estudiante")
						);

					$("#dataUser").append( "Nombre Estudiante" + "<br>" + 
											"estudiante@espol.edu.ec" + "<br>" + 
											"enero 1 de 1995." + "<br>" + 
											"10 Ejercicio resueltos." + "<br>" + 
											"Nivel: Medio.");	
					/*
					$("#dataUser").append(
						$("<br>"),
						$("<button>").attr({ 
							"type":"button",
							"class":"btn btn-default btn-sm",
							"id":"signout"
						}).text("Cerrar sesión")
					);
					*/			
				}	
			}			
		})
	})
}


function cerrarSesion(){
	if ( localStorage.getItem("SignUp") == 1 ) {
		$("#icon").attr('class','glyphicon glyphicon-log-in');
		$("#texto").text("Iniciar sesión");
		$("#sandbox").attr('href','#');
	    $("#perfil").empty();
	    $(".login").attr('data-target','#myModalLogin');
	    localStorage.setItem("SignUp", 0 );
	    localStorage.setItem("LogUser","");
	    $("#errorMsj").attr("class","alert alert-success").text("Terminó sesión con exito...!!");
	} else{
		$("#errorMsj").attr("class","alert alert-danger").text("Ya se encuentra cerrada la sesion.");
	}
}


$("#signout").click(
	function(){
		cerrarSesion();
	}
);

$(document).ready(
	function(){
		cargar();
	}
);


