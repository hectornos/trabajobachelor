function adios(){

  alert("Adiosito");
}

function dias(){
  var dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
  alert('Dias de la semana:\n' + dias.join('\n'));
}

function otro(){
  var array = [true, 5, false, 'hola', 'adios', 2];
  //Comparamos los textos, hola es mayor que adios porque compara letra por letra y ordena alfabeticamente, no compara longitud de textos.
  alert(
    "Es " +( array[3]>array[4]  )+" que el texto ('"+array[3]+"') sea mayor que el texto('"+array[4]+"'))\n"
    + "Es " +( array[4]>array[3]  )+" que el texto ('"+array[4]+"') sea mayor que el texto('"+array[3]+"'))"
  );
  //Usamos los operadores logicos para ver si se cumplent condiciones con los booleanos.
  alert(
    "Se da que array[0] || array[2] da como resultado "+ (array[0] || array[2] )+"\nPorque al menos uno es true.\nPero array[0] && array[2] da como resultado "+ (array[0] && array[2] )+"\nPorque solamente uno es true."
  );
  //He realizado las operaciones en un mismo alert separando con \n para crear lineas. Las operaciones están entre parentesis para diferenciar del + concatenador.
  alert(
    'El resultado de las operaciones es:\n'+
    'Suma: ' + array[1] + ' + ' + array[5] + ' = ' + (array[1]+array[5]) + '\n' +
    'Resta: ' + array[1] + ' - ' + array[5] + ' = ' + (array[1]-array[5]) + '\n' +
    'Producto: ' + array[1] + ' * ' + array[5] + ' = ' + (array[1]*array[5]) + '\n' +
    'Division: ' + array[1] + ' / ' + array[5] + ' = ' + (array[1]/array[5]) + '\n' +
    'Modulo: ' + array[1] + ' % ' + array[5] + ' = ' + (array[1]%array[5])
  );
}

function mayor(){
  var uno = prompt('Introduce primer numero:');
  var dos = prompt('Introduce segundo numero:');
  var tres = prompt('Introduce tercer numero:');
  //Como en los ejercicios resueltos está hecho con if, he usado una función propia de las ultimas versiones de JS
  var mayor = Math.max(uno,dos,tres);
  document.write("El mayor de los numeros es el : " + mayor);
}

function cuatro(){
  var numero = prompt('Introduce numero para obtener tabla:');
  document.write(
    "<table align='center' border='1'><tr><td colspan='5'>Tabla del " + numero + "</td></tr>"
  )
  for (i=1;i<11;i++){
    document.write("<tr><td>"+numero+"</td><td>*</td><td>"+i+"</td><td>=</td><td>"+(numero*i)+"</td></tr>")
  }
}

function cinco(){
  var codFondo = prompt('Introduce color de fondo de la tabla:(R)osa (A)zul (Y)Amarillo (V)erde');
  var codTexto = prompt('Introduce color del texto: (R)ojo (A)zul (Y)Amarillo (V)erde');
  //Con arrays asociativos donde la key coincide con el codigo del color, evitamos tener que usar switch case.
  var coloresFondo = {R:'hotpink',A:'lightblue',Y:'lightyellow',V:'lightgreen'};
  var coloresTexto = {R:'red',A:'blue',Y:'yellow',V:'green'};
  document.write(
    "<table align='center' border='1' bgcolor='"+coloresFondo[codFondo]+"' style='color: "+coloresTexto[codTexto]+";' >"
  )
  document.write(
    "<tr><td>Este es el contenido de esta sencilla tabla</td></tr></table>"
  )
}

function seis(){
  var stringNumeros = prompt('Introduce numeros separados por coma');
          
  //Con split evito multiles prompts
  var arrayNumeros = stringNumeros.split(",");
  //Dibujamos la tabla original
  document.write(
    "<table align='center' border='1'><tr><td colspan='"+stringNumeros.length+"'>Introducidos originalmente</td></tr><tr>"
  )
  for (i=0;i<arrayNumeros.length;i++) {
    document.write(
      "<td>"+arrayNumeros[i]+"</td>"
    )
  }
  document.write(
    "</tr></table>"
  )
  //Método de la burbuja...
  for (i=1;i<arrayNumeros.length;i++) {
    for (j=0;j<arrayNumeros.length -1 ; j++) {
      if (arrayNumeros[j]<arrayNumeros[j+1]) {
        //Movemos el grande un puesto hacia adelante
        var temp = arrayNumeros[j+1]
        //Necesitamos una variable temporal.
        arrayNumeros[j+1]=arrayNumeros[j];
        arrayNumeros[j] = temp;
      }
    }
  }
  //Dibujamos la tabla invertida
  document.write(
    "<table border='1'><tr><td colspan='"+stringNumeros.length+"'>Orden de mayor a menor</td></tr><tr>"
  )
  for (i=0;i<arrayNumeros.length;i++) {
    document.write(
      "<td>"+arrayNumeros[i]+"</td>"
    )
  }
  document.write(
    "</tr></table>"
  )
}

function siete(){
  var oculto = Math.floor(Math.random() * 11);
  var intento = "";
  var acertar = false;
  var oportunidades = 5;
  var i = 0;
  while (!acertar && i<oportunidades) { 
    intento = prompt("Introduce un numero de 1 al 10, tienes "+oportunidades+" intentos ("+oculto+")");
    if (oculto == parseInt(intento)){
      acertar = true;
      alert('HAS ACERTADO!!');
    } else {
      (parseInt(intento) > oculto) ? alert('Te has pasado') : alert('Te has quedado corto');
    }
    i++;
  }
  if (!acertar) {
    alert('HAS PERDIDO, OOOOH')
  }
}

	function Carrousel(incremento){
    var imagenInicial = document.getElementById("imagen").src;
    var nombreImagen = imagenInicial.substring((imagenInicial.lastIndexOf("/"))+1 , (imagenInicial.lastIndexOf(".")));
    var cont = parseInt(nombreImagen) + parseInt(incremento);		
    if (cont > 3) {
      cont=1;
    }	else {
      if (cont < 1) {
        cont = 3;
      }
    }
    document.getElementById("imagen").src="../../imagenes/Unidad1/"+cont+".png";
  }
  

  function Carrousel2(){
    var imagen = Math.floor(Math.random() * 3) + 1;
    document.getElementById("imagen").src="../../imagenes/Unidad1/"+imagen+".png";
  }

function dies(){
	//Listado de imagenes
  var imagenes = ["1","2","3"];
  //Imagen seleccionada en ese momento.
  var imagenInicial = document.getElementById("imagen").src;
  var nombreImagen = imagenInicial.substring((imagenInicial.lastIndexOf("/"))+1 , (imagenInicial.lastIndexOf(".")));
  var desplegable = document.getElementById("opciones");
  for (var i=0; i<imagenes.length; i++){
    //Creamos un hijo al desplegable por cada elemento del array
    var option = document.createElement("option");
    //Obtenemos el nombre para ponerle y se lo ponemos.
    var img = imagenes[i];
    option.textContent = img;
    option.value = img;
    //Lo incluimos en el listado.
    desplegable.appendChild(option);
  }
    var imagenActual = document.getElementById("imagen").src;
    var nombreActual = imagenActual.substring((imagenActual.lastIndexOf("/"))+1 , (imagenActual.lastIndexOf(".")));
    var opcionSeleccionada = desplegable.options[desplegable.selectedIndex].value;
    if (opcionSeleccionada != nombreActual){
      document.getElementById("imagen").src="../../imagenes/Unidad1/"+opcionSeleccionada+".png";
      document.getElementById("Errores").innerText = "";
    } else {
      document.getElementById("Errores").innerText="Ya estas viendo esta foto.";
    }
}

function diez(){
	//Listado de imagenes
  var imagenes = ["1","2","3"];
  //Imagen seleccionada en ese momento.
  var imagenInicial = document.getElementById("imagen").src;
  var nombreImagen = imagenInicial.substring((imagenInicial.lastIndexOf("/"))+1 , (imagenInicial.lastIndexOf(".")));
  var desplegable = document.getElementById("opciones");
  for (var i=0; i<imagenes.length; i++){
    //Creamos un hijo al desplegable por cada elemento del array
    var option = document.createElement("option");
    //Obtenemos el nombre para ponerle y se lo ponemos.
    var img = imagenes[i];
    option.textContent = img;
    option.value = img;
    //Lo incluimos en el listado.
    desplegable.appendChild(option);
  }
}

function seleccionar(){
  var desplegable = document.getElementById("opciones");
  var imagenActual = document.getElementById("imagen").src;
  var nombreActual = imagenActual.substring((imagenActual.lastIndexOf("/"))+1 , (imagenActual.lastIndexOf(".")));
  var opcionSeleccionada = desplegable.options[desplegable.selectedIndex].value;
  if (opcionSeleccionada != nombreActual){
    document.getElementById("imagen").src="../../imagenes/Unidad1/"+opcionSeleccionada+".png";
    document.getElementById("Errores").innerText = "";
  } else {
    document.getElementById("Errores").innerText="Ya estas viendo esta foto.";
  }
}


function validar() {
   //Iniciamos los valores de las variables.
   var nom = document.getElementById("form").elements[0].value;
   var edad = document.getElementById("form").elements[1].value;
   var direccion = document.getElementById("form").elements[2].value;
   var cod = document.getElementById("form").elements[3].value;
  var booleano = true;
 
  //Validar nombre y apellido.

  if (nom == ""){
    booleano = false;
  }
  var regexp = /^[a-zA-Z]*$/;
  booleano = regexp.test(nom);
  //Validar edad.
  if (isNaN(edad) || parseInt(edad)<0 || parseInt(edad)>120){
    booleano = false;
  }
 
  //Validar direccion.
  if (direccion.length > 100) {
    booleano = false;
  }
  //Validar codigo postal.
  if ((cod).length > 5) {
    booleano = false;
  }
  if (booleano) {
    alert("Formulario correcto!!!")
  } else {
    alert("Formulario incorrecto....")
  }
  return booleano;
}

