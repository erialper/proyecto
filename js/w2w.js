var sched;

function mostrarSemana(parcial, semana) {
	console.log("Parcial: "+parcial, " semana: "+semana);
	sched.parcial[parcial].semana[semana].clase.forEach(function (c, i) {
		$("#clase"+(i+1)).empty();
		$("#clase"+(i+1)).append($("<h2>").text("Clase "+(i+1)));
		$("#clase"+(i+1)).append($("<h3>").text(c.tema));
		if (c.controlLectura) {
			$("#clase"+(i+1)).append($("<p>").text("Lectura: ").append($("<a>", {"href":c.linkLectura}).text(c.lectura)))
		}
		if (c.leccion) {
			$("#clase"+(i+1)).append($("<p>").text("Se tomará una Lección"));
		}
		if (c.taller) {
			$("#clase"+(i+1)).append($("<p>").text("Se realizará un taller"));
		}
		if (c.deber){
			$("#clase"+(i+1)).append($("<p>").text("Se revisará el deber"));
		}
	});
}

$(document).ready(function(){
	url="json/w2w.json"
	$.getJSON(url, function(resp){
		sched=resp.data;
		resp.data.parcial.forEach(function(par, i){
			liParc=$("<li>",{"id":"liParc"+(i+1)}).append($("<a>", {"href":"#", "id":"aparc"+(i+1)}).text("Parcial "+ (i+1)));
			$("#listParc").append(liParc)
			ulSem=($("<ul>", {"id":"ulSemanas"+(i+1)}))
			liParc.append(ulSem)
			par.semana.forEach(function(sem, index){
				aSem=$("<a>", {"href":"#", "id":"asem"+(index+1)}).text("Semana "+ (index+1))
				liSem=$("<li>",{"id":"liSem"+(index+1)}).append(aSem);
				ulSem.append(liSem);
				aSem.click(function () {
					mostrarSemana(i,index);
				});
				//console.log("Semana: ", i+1);
				/*sem.clase.forEach(function(item, i){
					console.log("Clase: ", i+1);
					console.log("Tema: ", item.tema);
					console.log("Lectura: ", item.lectura);
					console.log("Control de Lectura: ", item.controlLectura);
					console.log("Leccion: ", item.leccion);
					console.log("Taller: ", item.taller);
					console.log("Deber: ", item.deber);
					console.log("Proyecto: ", item.proyecto);
				});*/
			});
		});
	});
});