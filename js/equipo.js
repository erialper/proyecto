function cargar(){
	$(".col-sm-9 hr").empty()
	var url = "json\\profesores.json"
	$.getJSON(url,function(resul){
		resul.forEach(function(item){
			if(item.coordinador=="True"){
				console.log(item.img)
				$(".col-sm-9 hr").append("<div class=\"panel panel-default\"><div class=\"panel-body\"><img src="+ item.img +" class=\"img-rounded\" style=\"width:25%;float:left;margin-right:2%;\">"+ item.nombres + "<br>" + item.apellidos + "<br>" + item.correo +"</div></div>")
			}
		})
	})
}
$(document).ready(cargar)
