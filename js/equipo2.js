function cargar(){
	$(".table tbody").empty()
	var url = "json/profesores.json"
	$.getJSON(url,function(resul){
		resul.forEach(function(item){
			if(item.img==""){
				$(".table tbody").append($("<tr></tr>").append("<td><img src=\"images/profile.png\" class=\"img-circle\" width=\"60px\" height=\"60px\"></td><td>"+ item.nombres + "</td><td>" + item.apellidos + "</td><td>" + item.correo + "</td><td>" + item. paralelo + "</td><td>" + item.oficina + "</td>"))
			}else{
				$(".table tbody").append($("<tr></tr>").append("<td><img src="+ item.img +" class=\"img-circle\" width=\"60px\" height=\"60px\"></td><td>"+ item.nombres + "</td><td>" + item.apellidos + "</td><td>" + item.correo + "</td><td>" + item. paralelo + "</td><td>" + item.oficina + "</td>"))
			}
			$("td").css("text-align","center");
		})
	})	
}

$(document).ready(cargar)
