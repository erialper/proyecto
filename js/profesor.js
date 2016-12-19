

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

	/*$("#info_ejerc").hide();*/

	console.log("Se agrego elemento");
}


$("#info_ejerc button").click(
	function(){
		agregarProyecto();
		// $("input").val("");
	}
);