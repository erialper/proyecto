var proy;

$(document).ready(function(){
	u="json/proyecto.json"
	$.getJSON(u, function(r){
		proy=r.proyectos;
		proy.forEach(function (p) {
			footer=$("<div>",{"class":"panel-footer"});
			p.tags.forEach(function (t) {
				footer.append($("<a>", {"href":"#", "class":"etiqueta"}).text(t))
			});
			$("#divDondeVanLosPanels").append($("<div>", {"class":"panel panel-default"})
				.append($("<div>",{"class":"panel-heading"})
					.append($("<h3>").text("titulo: "+p.titulo)))
				.append($("<div>",{"class":"panel-body"})
					.append($("<p>").text(p.descripcion))
					.append($("<p>").text("Fecha de Entrega "+p.fechaEntrega))
					.append($("<a>",{"href":"#"}).text("Archivo adicional")))
				.append(footer));
		});
	});
});


