var proy;

$(document).ready(function(){
	u="json/proyecto.json"
	$.getJSON(u, function(r){
		proy=r.proyectos;
		proy.forEach(function (p) {
			footer=$("<div>",{"class":"panel-footer"});
			p.tags.forEach(function (t) {
				footer.append($("<a>", {"href":"#"}).text(t))
			});
			$("#divDondeVanLosPanels").append($("<div>", {"class":"panel panel-default"})
				.append($("<div>",{"class":"panel-heading"})
					.append($("<h3>").text("titulo: "+p.titulo)))
				.append($("<div>",{"class":"panel-body"})
					.append($("<p>").text(p.descripcion))
					.append($("<p>").text("Fecha de Entrega "+p.fechaEntrega))
					.append($("<a>",{"href":p.archivo}).text("Archivo adicional")))
				.append(footer));
		});
	});
});



      $ ( ".form_datetime" ). datetimepicker ({
        Formato: "aaaa dd MM - hh: ii" , 
        autoclose: verdad , 
        todayBtn: verdad , 
        pickerPosition : "de abajo a la izquierda" 
    });