function identificar(){
  //(1) Numero de enlaces
  //Numero de enlaces del body
  var cuerpo = document.getElementById("cuerpo");
  var enlaces1 = cuerpo.getElementsByTagName("a");
  var numEnlaces1 = enlaces1.length;
  var resultado1a = document.getElementById("resultado1a");
  resultado1a.innerHTML = 'Numero de enlaces del body: ' +numEnlaces1; 
  //Numero de enlaces de todo el DOM
  var enlaces = document.getElementsByTagName("a");
  var numEnlaces = enlaces.length;
  var resultado1b = document.getElementById("resultado1b");
  resultado1b.innerHTML = 'Numero de enlaces del DOM: ' +numEnlaces; 
  //(2) Seleccionamos el penultimo enlace del body.
  var penultimo = enlaces1[numEnlaces1-1];
  var resultado2 = document.getElementById("resultado2");
  resultado2.innerHTML = 'Penultimo enlace del body: ' +penultimo; 
  //(3) Enlazan a 'http://prueba'
  var cont = 0;
  for (var i=0; i<7; i++) {
    if (enlaces1[i]=='http://prueba/'){
      cont++;
    }
  }
  var resultado3 = document.getElementById("resultado3");
  resultado3.innerHTML = '¿Cuantos enlazan a http://prueba/: ' +cont; 
  //(4) Numero de enlaces del tercer párrafo.
  var parrafos = cuerpo.getElementsByTagName("p");
  var parrafo3 = parrafos[2];
  var enlacesTercer = parrafo3.getElementsByTagName("a");
  var numEnlaces3 = enlacesTercer.length;
  var resultado4 = document.getElementById("resultado4");
  resultado4.innerHTML = 'Enlaces del tercer párrafo: ' +numEnlaces3; 
}

function ocultar(){
  var adicional = document.getElementById("adicional");
  adicional.style.visibility = "hidden";
}

function mostrar(){
  var adicional = document.getElementById("adicional");
  adicional.style.visibility = "visible";
  var enlace = document.getElementById("enlace");
  enlace.style.visibility = "hidden";
}

function anadir2() {
  var elemento = document.createElement("li");
  var alea = Math.random();
  var lista = document.getElementById("lista");
  var nuevoElemento = "<li class='list-group-item'>Texto de prueba:" + alea+"</li>";
  lista.appendChild(elemento);
  lista.innerHTML = lista.innerHTML + nuevoElemento;
}


function anadir() {
  var elemento = document.createElement("li");
  var alea = Math.random();
  var lista = document.getElementById("lista");
  elemento.classList.add('list-group-item');
  elemento.innerHTML="hola:"+ alea;
  lista.appendChild(elemento);
}

//Resolución ejercicio 6
function coordenadas() {
  // Adaptada de http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
  var dimensiones = [];

  if (typeof (window.innerWidth) == 'number') {
      // No es IE
      dimensiones = [window.innerWidth, window.innerHeight];
  } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
      //IE 6 en modo estandar (no quirks)
      dimensiones = [document.documentElement.clientWidth, document.documentElement.clientHeight];
  } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
      //IE en modo quirks
      dimensiones = [document.body.clientWidth, document.body.clientHeight];
  }

  return dimensiones;
}

function ratonClick(){
  document.onclick=infor;
}

function infor(){
    var dimensiones = coordenadas();
    var xold = dimensiones[0];
    var yold = dimensiones[1];
    var x = window.event.clientX;
    var y = window.event.clientY;
    if ((xold-x) > xold/2) {
      var ancho = "izquierda";
    } else {
      var ancho = "derecha";
    }
    if ((yold-y)>yold/2) {
      var alto = "arriba";
    } else {
      var alto = "abajo";
    }
    alert(alto+' --- '+ancho);
}
//-------------------------------------------------------------

//Resolucion ejercicio 5
function ratonMove(){
  document.onmousemove=infor2;
  document.onkeypress=infor3;
}

function infor2(){
  var dimensiones = coordenadas();
  var xold = dimensiones[0];
  var yold = dimensiones[1];
  var x = window.event.clientX;
  var y = window.event.clientY;
  document.getElementById("coordenadas").innerHTML="El raton está en: "+x+'--'+y;
  document.getElementById("barray").innerHTML=y;
  document.getElementById("barrax").innerHTML=x;
  var porcentajex = (x/xold)*100;
  var porcentajey = (y/yold)*100;
  document.getElementById("barrax").style="width: "+porcentajex+"%";
  document.getElementById("barray").style="width: "+porcentajey+"%";
}

function infor3(){
  //Esta funcion se captura al apretar una tecla
  var tecla = window.event.key;
  //Identificada la letra mandamos su contenido.
  document.getElementById("tecla").innerHTML="La tecla es la: "+tecla;


}
//------------------------------------------------

//Resolucion ejercicio 4

function revelar(enlaceId){
  var inicio= enlaceId.lastIndexOf('_');
  var fin= enlaceId.length;
  var parrafo = "contenidos_" + enlaceId.substring(inicio+1,fin);
  var contenido = document.getElementById(parrafo);
  if (contenido.style.visibility == 'hidden') {
    contenido.style.visibility = "visible";
    document.getElementById(enlaceId).innerHTML="Ocultar contenidos";
  } else {
    contenido.style.visibility = "hidden";
    document.getElementById(enlaceId).innerHTML="Mostrar contenidos";
  }
}

//-----------------------

