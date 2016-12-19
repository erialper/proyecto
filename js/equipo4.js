function cargar(){
	$(".table tbody").empty()
	var url = "json\\aydtarea.json"
	var i = 0
	$.getJSON(url,function(resul){
		resul.forEach(function(item){
			i++
			$(".table tbody").append($("<tr></tr>").append("<td>"+ i +"</td><td>"+ item.nombres + "</td><td>" + item.apellidos + "</td><td>" + item.correo + "</td><td>" + item. paralelo + "</td><td>" + item.aula + "</td><td>"+ item.horario + "</td>"))
		})
		
	})
	
}

$(document).ready(cargar)
