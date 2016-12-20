var ayud;

function showMap(url) {
	$("#mapFrame").attr("src", url);
	console.log(url);
}

$(document).ready(function () {
	url="json/ayudantias.json"
	$.getJSON(url, function (resp) {
		ayud=resp.ayudantias;
		ayud.forEach(function (item, index) {
			$("#tableAyudantias tbody").append($("<tr>")
				.append($("<th>").text(item.dia))
				.append($("<th>").text(item.horaInicio))
				.append($("<th>").text(item.horaFin))
				.append($("<th>").text(item.ayudante))
				.append($("<th>").text(item.aula))
				.append($("<th>").text(item.edificio))
				.append($("<th>").append($("<button>",{"type":"button", "class":"btn btn-primary", "data-toggle":"modal", "data-target":"#myModal"})
					.text("Mapa")
					.click(function () {
						showMap(item.mapa);
					}))));
		});
	});
})

 