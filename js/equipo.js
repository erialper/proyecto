function cargar(){
	$(".col-sm-9 hr").empty()
	var url = "json/profesores.json"
	$.getJSON(url,function(resul){
		resul.forEach(function(item){
			if(item.coordinador=="True"){
				if(item.img==""){
					$(".col-sm-9 hr").append("<div class=\"panel panel-default\"  style=\"margin-top:20px;\"><div class=\"panel-body\"><img src=\"images\\profile.png\" class=\"img-rounded\" style=\"width:25%;float:left;margin-right:2%;\"><strong>"+ item.nombres + "</strong><br><strong>" + item.apellidos + "</strong><br>" + item.correo +"</div></div>")
				}else{
					$(".col-sm-9 hr").append("<div class=\"panel panel-default\"  style=\"margin-top:20px;\"><div class=\"panel-body\"><img src="+ item.img +" class=\"img-rounded\" style=\"width:25%;float:left;margin-right:2%;\"><strong>"+ item.nombres + "</strong><br><strong>" + item.apellidos + "</strong><br>" + item.correo +"</div></div>")
				}
			}
		})
	})
}
$(document).ready(cargar)
