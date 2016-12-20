
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
});


$("#myModal .modal-body button").click(
	function(){
		inicio();
		// $("input").val("");
	}
);


function inicio(){
	
	if ( $("#usrname").val() === "" || $("#psw").val() === "") {
		console.log("campos vacios");
		return;		
	} 
	else if ( $("#usrname").val() === "profesor" && $("#psw").val() === "profesor") {	
		$("#icon").attr('class','glyphicon glyphicon-user');
		$("#texto").text("Profesor");
		$("#sandbox").attr('href','sandbox_prof.html');
		limpiarCampos();
		$("#myModal").modal('toggle');
	} 
	else if ( $("#usrname").val() === "estudiante" && $("#psw").val() === "estudiante") {
		$("#icon").attr('class','glyphicon glyphicon-user');		
		$("#texto").text("Estudiante");
		limpiarCampos();
		$("#myModal").modal('toggle');
	} 
	else {
		console.log("login incorrecto");
		limpiarCampos();
	}	

	/*
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

	/*$("#info_ejerc").hide();*/
	/*
	console.log("Se agrego elemento");
	*/
}

function limpiarCampos(){
	$("#usrname").val("");
	$("#psw").val("");
}
