$(function () {
    $('#datetimepicker1').datetimepicker();

    var jqxhr = $.getJSON("json/proyecto.json", function (data) {
        console.log(data);
    })

    console.log(jqxhr);
    // Perform other work here ...

    // Set another completion function for the request above

});

$(document).ready(function () {
	$("form").submit(function () {
		alert("Enviado")
	})
})