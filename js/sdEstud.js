var arch;
function cargarP(){
	$("#lis").empty();
	$("#lis").append($("<li>",{"class":"active","id":"prin"}).append($("<a>",{"href":"#"}).text("Principiante")));
	$("#lis").append($("<li>",{"id":"med"}).append($("<a>",{"href":"#"}).text("Intermedio")));
	$("#lis").append($("<li>",{"id":"avaz"}).append($("<a>",{"href":"#"}).text("Avanzado")));
	$("#cuer").empty();
	$("#cuer").append("<h4><small>Intermedio</small></h4><hr style=\"margin-bottom:20px;\">");
	arch.forEach(function(item){
		if(item.difi == "Principiante"){
			agregarP(item);
		}
	});
}
function cargarM(){
	$("#lis").empty();
	$("#lis").append($("<li>",{"id":"prin"}).append($("<a>",{"href":"#"}).text("Principiante")));
	$("#lis").append($("<li>",{"class":"active","id":"med"}).append($("<a>",{"href":"#"}).text("Intermedio")));
	$("#lis").append($("<li>",{"id":"avaz"}).append($("<a>",{"href":"#"}).text("Avanzado")));
	$("#cuer").empty();
	$("#cuer").append("<h4><small>Intermedio</small></h4><hr style=\"margin-bottom:20px;\">");
	arch.forEach(function(item){
		if(item.difi == "Intermedio"){
			agregarI(item);
		}
	});
}
function cargarA(){
	$("#lis").empty();
	$("#lis").append($("<li>",{"id":"prin"}).append($("<a>",{"href":"#"}).text("Principiante")));
	$("#lis").append($("<li>",{"id":"med"}).append($("<a>",{"href":"#"}).text("Intermedio")));
	$("#lis").append($("<li>",{"class":"active","id":"avaz"}).append($("<a>",{"href":"#"}).text("Avanzado")));
	$("#cuer").empty();
	$("#cuer").append("<h4><small>Intermedio</small></h4><hr style=\"margin-bottom:20px;\">");
	arch.forEach(function(item){
		if(item.difi == "Avanzado"){
			agregarA(item);
		}
	});
<<<<<<< HEAD

=======
>>>>>>> origin/master
}

function agregarP(item){
	$("#cuer").append($("<div>",{"class":"panel panel-info","id":"pan"}).append($("<div>",{"class":"panel-heading","id":"cab"}).text(item.titulo)));
<<<<<<< HEAD
	$("#cab").append($("<a>",{"href":"sb_estd2.html"}).append($("<button>",{"class":"btn btn-info"}).text(">")));
=======
	$("#cab").append($("<a>",{"href":"sb_estd2?"+item.id+".html"}).append($("<button>",{"class":"btn btn-info"}).text(">")));
>>>>>>> origin/master
	$("#pan").append($("<div>",{"class":"panel-body","id":"panc"}).text("Autor: "+ item.autor));
	$("#panc").append($("<p>").text(item.descri));
	$("#panc").append($("<p>",{"style":"font-weight: bold;"}).text("Resuelto por: "+item.nEstd));
	item.etiquetas.split(",").forEach(function(o){
		$("#panc").append($("<span>",{"class":"bg-primary","style":"padding: 2px 5px 2px 5px;margin-right:1%;"}).text(o));
	});
<<<<<<< HEAD
	var i = item.id;
	localStorage.setItem("id",i);

=======
	
>>>>>>> origin/master
}

function agregarI(item){
	$("#cuer").append($("<div>",{"class":"panel panel-warning","id":"pan"}).append($("<div>",{"class":"panel-heading","id":"cab"}).text(item.titulo)));
<<<<<<< HEAD
	$("#cab").append($("<a>",{"href":"sb_estd2.html"}).append($("<button>",{"class":"btn btn-warning"}).text(">")));
=======
	$("#cab").append($("<a>",{"href":"sb_estd2?"+item.id+".html"}).append($("<button>",{"class":"btn btn-warning"}).text(">")));
>>>>>>> origin/master
	$("#pan").append($("<div>",{"class":"panel-body","id":"panc"}).text("Autor: "+ item.autor));
	$("#panc").append($("<p>").text(item.descri));
	$("#panc").append($("<p>",{"style":"font-weight: bold;"}).text("Resuelto por: "+item.nEstd));
	item.etiquetas.split(",").forEach(function(o){
		$("#panc").append($("<span>",{"class":"bg-primary","style":"padding: 2px 5px 2px 5px;margin-right:1%;"}).text(o));
	});
<<<<<<< HEAD
	var i = item.id;
	localStorage.setItem("id",i);
	
=======
>>>>>>> origin/master
}

function agregarA(item){
	$("#cuer").append($("<div>",{"class":"panel panel-danger","id":"pan"}).append($("<div>",{"class":"panel-heading","id":"cab"}).text(item.titulo)));
<<<<<<< HEAD
	$("#cab").append($("<a>",{"href":"sb_estd2.html"}).append($("<button>",{"class":"btn btn-danger"}).text(">")));
=======
	$("#cab").append($("<a>",{"href":"sb_estd2?"+item.id+".html"}).append($("<button>",{"class":"btn btn-danger"}).text(">")));
>>>>>>> origin/master
	$("#pan").append($("<div>",{"class":"panel-body","id":"panc"}).text("Autor: "+ item.autor));
	$("#panc").append($("<p>").text(item.descri));
	$("#panc").append($("<p>",{"style":"font-weight: bold;"}).text("Resuelto por: "+item.nEstd));
	item.etiquetas.split(",").forEach(function(o){
		$("#panc").append($("<span>",{"class":"bg-primary","style":"padding: 2px 5px 2px 5px;margin-right:1%;"}).text(o));
	});
<<<<<<< HEAD
	var i = item.id;
	localStorage.setItem("id",i);
=======
>>>>>>> origin/master
}

$(document).ready(function(){
	url = "json/ejercicios.json";
	$.getJSON(url,function(resp){
		arch = resp;
		arch.forEach(function(item){
			if(item.difi == "Principiante"){
					agregarP(item);
			}
		})
	})
	$("#prin").click(cargarP);
	$("#med").click(cargarM);
	$("#avaz").click(cargarA);
<<<<<<< HEAD
})


=======
	
})

>>>>>>> origin/master
