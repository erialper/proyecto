var sched;

function mostrarSemana(parcial, semana) {
	$("contenido").empty;
	console.log("Parcial: "+parcial, " semana: "+semana);
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