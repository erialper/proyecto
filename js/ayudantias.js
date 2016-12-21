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
				.append($("<td>").text(item.dia))
				.append($("<td>").text(item.horaInicio))
				.append($("<td>").text(item.horaFin))
				.append($("<td>").text(item.ayudante))
				.append($("<td>").text(item.aula))
				.append($("<td>").text(item.edificio))
				.append($("<td>").append($("<button>",{"type":"button", "class":"btn btn-primary", "data-toggle":"modal", "data-target":"#myModal"})
					.text("Mapa")
					.click(function () {
						showMap(item.mapa);
					}))));
		});
	});
})

 