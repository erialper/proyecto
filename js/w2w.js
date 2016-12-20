var sched;

function mostrarSemana(parcial, semana) {
	console.log("Parcial: "+parcial, " semana: "+semana);
	sched.parcial[parcial].semana[semana].clase.forEach(function (c, i) {
		$("#seccionClases").empty();
		$("#seccionClases").append($("<h2>").text("Clase "+(i+1)));
		$("#seccionClases").append($("<h3>").text(c.tema));
		$("#seccionClases").append($("<h4>").text(c.descripcion));
		if (c.leccion || c.taller || c.deber){
			$("#seccionClases").append($("<ul>",{"id":"listaObjetivos"}))
		}
		if (c.leccion) {
			$("#listaObjetivos").append($("<p>", {"class":"text-warning"}).text("Se tomará una Lección"));
		}
		if (c.taller) {
			$("#listaObjetivos").append($("<p>",{"class":"text-info"}).text("Se realizará un taller"));
		}
		if (c.deber){
			$("#listaObjetivos").append($("<p>", {"class":"text-info"}).text("Se revisará el deber"));
		}
		if (c.controlLectura) {
			$("#seccionClases").append($("<div>",{"id":"divLectura"})
				.append($("<p>").text("Lectura: ").append($("<a>", {"href":c.linkLectura}).text(c.lectura))
					.append($("<a>",{"href":"#ocultarLectura", "class":"", "data-toggle":"collapse"}).text("Ocultar")))								
				.append($("<div>",{"id":"ocultarLectura", "class":"embed-responsive embed-responsive-4by3 collapse"})
					.append($("<iframe>", {"src":c.linkCap}))))
		}
		if(c.diapositiva){
			$("#seccionClases").append($("<div>",{"class":"divDiapositiva"})				
				.append($("<div>",{ "class":"embed-responsive embed-responsive-4by3"})
					.append($("<iframe>", {"src":c.linkDiapositiva})))
				)
		}
		if(c.video){
			$("#seccionClases").append($("<div>",{"class":"divVideo"})			
				.append($("<div>",{ "class":"embed-responsive embed-responsive-4by3"})
					.append($("<iframe>", {"src":c.linkVideo})))
				)
		}
	});
}

function mostrarClase(parcial, semana, clase) {
	console.log("Parcial: "+parcial, " semana: "+semana+" clse: "+clase);
	c=sched.parcial[parcial].semana[semana].clase[clase];
	$("#seccionClases").empty();	
	$("#seccionClases").append($("<h3>").text(c.tema));
	$("#seccionClases").append($("<h4>").text(c.descripcion));
	if (c.leccion || c.taller || c.deber){
			$("#seccionClases").append($("<ul>",{"id":"listaObjetivos"}))
		}
	if (c.leccion) {
		$("#listaObjetivos").append($("<p>", {"class":"text-warning"}).text("Se tomará una Lección"));
	}
	if (c.taller) {
		$("#listaObjetivos").append($("<p>",{"class":"text-info"}).text("Se realizará un taller"));
	}
	if (c.deber){
		$("#listaObjetivos").append($("<p>", {"class":"text-info"}).text("Se revisará el deber"));
	}
	if (c.controlLectura) {
		$("#seccionClases").append($("<div>",{"id":"divLectura"})
			.append($("<p>").text("Lectura: ").append($("<a>", {"href":c.linkLectura}).text(c.lectura)))
			.append($("<a>",{"href":"#ocultarLectura", "class":"btn btn-default", "data-toggle":"collapse"}).text("X"))
			.append($("<div>",{"id":"ocultarLectura", "class":"collapse in"})
				.append($("<div>",{"class":"embed-responsive embed-responsive-4by3"})
					.append($("<iframe>", {"src":c.linkCap})))))
	}
	if(c.diapositiva){
		$("#seccionClases").append($("<div>",{"class":"divDiapositiva"})
			.append($("<a>",{"href":"#ocultarDiapositiva", "class":"btn btn-default", "data-toggle":"collapse"}).text("X"))
			.append($("<div>",{"id":"ocultarDiapositiva", "class":"collapse in"})
				.append($("<div>",{ "class":"embed-responsive embed-responsive-4by3"})
					.append($("<iframe>", {"src":c.linkDiapositiva})))))
	}
	if(c.video){
		$("#seccionClases").append($("<div>",{"class":"divVideo"}) 
			.append($("<a>",{"href":"#ocultarDiapositiva", "class":"btn btn-default", "data-toggle":"collapse"}).text("X"))
			.append($("<div>",{"id":"ocultarDiapositiva", "class":"collapse in"})
				.append($("<div>",{ "class":"embed-responsive embed-responsive-16by9"})
					.append($("<iframe>", {"src":c.linkVideo})))))
	}
}

$(document).ready(function(){
	url="json/w2w.json"
	$.getJSON(url, function(resp){
		sched=resp.data;
		resp.data.parcial.forEach(function(par, i){
			$("#listPanel").append($("<a>",{"href":"#semanas"+(i+1), "class":"list-group-item list-group-item-success", "data-toggle":"collapse", "data-parent":"#asideSemanas"})
				.text("Parcial "+ (i+1)))
			.append($("<div>", {"class":"collapse", "id":"semanas"+(i+1)}));
			par.semana.forEach(function(sem, index){
				$("#semanas"+(i+1)).append($("<a>",{"href":"#p"+(i+1)+"clases"+(index+1), "class":"list-group-item", "data-toggle":"collapse", "data-parent":"#semanas"+(i+1)})
					.text("Semana "+ (index+1)))
				.append($("<div>", {"class":"collapse", "id":"p"+(i+1)+"clases"+(index+1)}));
				sem.clase.forEach(function (cla, j) {
					$("#p"+(i+1)+"clases"+(index+1)).append($("<a>",{"href":"#", "class":"list-group-item", "data-parent":"#p"+(i+1)+"clases"+(index+1)})
						.text(cla.descripcion)
						.click(function () {
							mostrarClase(i, index, j);
						}));
				});
			});
		});
		mostrarClase(0,0,0);
	});
});