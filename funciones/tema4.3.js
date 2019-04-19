//Ejercicio 1
function calcular() {
  //Esto puede provenir de una base de datos.
    var iva = 0.16;
    var empresas = {
      seas : {
        nombre: 'seas',
        direccion: 'violeta parra',
        telefono: '976242342',
        nif: 6354238,
      },
      cocacola : {
        nombre: 'coca cola',
        direccion: 'camino las torres',
        telefono: '976242342',
        nif: 9183423,
      },
      colgate : {
        nombre: 'colgate',
        direccion: 'paseo cuellar',
        telefono: '87452344',
        nif: 4657845,
      },
    };
  
    var importe = 0;
    var empresa= document.getElementById("empresa").value;
    var albaran = {
      "empresa" : empresas[empresa],
      "cliente" : {
        "nombre" : document.getElementById("nombre").value,
        "direccion" : document.getElementById("dir").value,
        "telefono" : document.getElementById("tel").value,
        "nif" : document.getElementById("nif").value,
      },
      "articulos" : [
        {
          "nombre": document.getElementById("producto1").value,
          "cantidad": document.getElementById("cantidad1").value,
          "precio":document.getElementById("precio1").value,
        },
        {
          "nombre": document.getElementById("producto2").value,
          "cantidad": document.getElementById("cantidad2").value,
          "precio":document.getElementById("precio2").value,
        }
      ],
      "resumen": {
        "importe" : importe,
        "iva" : iva,
        "pago" :'tarjeta'
      }
  
    };
  
    for (var i=0; i<albaran["articulos"].length; i++){
      
      importe = importe + ((albaran["articulos"][i]["cantidad"])*(albaran["articulos"][i]["precio"]));
    }
  
    var importeIva = importe*(1+iva);
    albaran["resumen"]["importe"]=importeIva;
  
    //Mostramos por pantalla
    document.getElementById("emp").innerHTML=albaran["empresa"]["nombre"];
    document.getElementById("empdir").innerHTML=albaran["empresa"]["direccion"];
    document.getElementById("emptel").innerHTML=albaran["empresa"]["telefono"];
    document.getElementById("empnif").innerHTML=albaran["empresa"]["nif"];
    document.getElementById("cli").innerHTML=albaran["cliente"]["nombre"];
    document.getElementById("clidir").innerHTML=albaran["cliente"]["direccion"];
    document.getElementById("clitel").innerHTML=albaran["cliente"]["telefono"];
    document.getElementById("clinif").innerHTML=albaran["cliente"]["nif"];
    document.getElementById("importe").innerHTML=albaran["resumen"]["importe"];
  
  
  
  }
  
  
  
  
  

//Ejercicio 3
//Sobreescribimos el metodo para recortar a una longitud...

String.prototype.recortar = function (longitud) {
  if (longitud && !isNaN(longitud)) {
    if (this.length > longitud) {
      return this.substring(0,longitud);
    } else {
      return this;
    }
  } 
}

String.prototype.recortar2 = function (longitud, palabra) {
  if (longitud && !isNaN(longitud)) {
    if ((this.length - palabra.length) > longitud) {
      return this.substring(0,longitud-palabra.length)+palabra;
    } else if (this.length > longitud) {
      return this.substring(o,longitud);
    } else {
      return this;
    }
  } 
}


function ejercicio3a(){
var cadena = document.getElementById("texto").value;
var longitud = document.getElementById("long").value;
var resultado = cadena.recortar(longitud);
document.getElementById("res").value=resultado;
}

function ejercicio3b(){
var cadena2 = document.getElementById("texto2").value;
var longitud2 = document.getElementById("long2").value;
var palabra = document.getElementById("pal").value;
var resultado2 = cadena2.recortar2(longitud2,palabra);
document.getElementById("res2").value=resultado2;
}



//Ejercicio 2

function anadir(){
  
  Array.prototype.anadir = function (elemento) {
    this[this.length] = elemento;
  }
  var numerito1 = document.getElementById("numerito1").value;
  var array1 = document.getElementById("array1").value.split(",");
  array1.anadir(numerito1);
  alert('Añadimos un elemento al final : ' + array1);
}

function repetido(){
  Array.prototype.repetido = function (elemento) {
    for (var i = 0; i< this.length; i++) {
      //Recorremos el array y miramos si el elemento existe.
      if (this[i] === elemento) {
        return true;
      }
    }
    return false;
  }
}

function anadir2(){
  var numerito2 = document.getElementById("numerito2").value;
  var array2 = document.getElementById("arrayb").value.split(",");
  let repetido = false;
  for (var i = 0; i< array2.length; i++) {
    var valor1 = parseInt(array2[i]);
    var valor2 = parseInt(numerito2);
    //Recorremos el array y miramos si el elemento existe.
    if (valor1 === valor2) {
      repetido = true;
    }
  }

  //Si no existe hacemos algo parecido a lo de antes.
  if (!repetido){

    Array.prototype.anadir = function (elemento) {
      this[this.length] = elemento;
    }
    
    array2.anadir(numerito2);
    alert('Añadimos un elemento al final, porque no se repite: ' + array2);
  } else {
    alert('Valor repetido');
  }
}


//Ejercicio 4

Array.prototype.sin = function (elemento) {
  var filtrado = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] !== elemento) {
      filtrado.push(this[i]);
    }
  }
  return filtrado;
}

function ejercicio4(){
  var array = document.getElementById("array").value.split(",");
  var filtrado = array.sin(document.getElementById("numero").value);
  alert(filtrado);
}

//PARTE DE AJAX

function verfooter(){
  var ajaxReq = new XMLHttpRequest();
  ajaxReq.onreadystatechange = function (){
    if (ajaxReq.readyState == 4 && ajaxReq.status == 200){
      document.getElementById("footer").innerHTML = ajaxReq.responseText;
    }
  }
  //La respuesta que se quiere visualizar en info es la siguietne.
  ajaxReq.open("GET","../templates/footer.html",true);
  ajaxReq.send();
}

function verheader(){
  var ajaxReq = new XMLHttpRequest();
  ajaxReq.onreadystatechange = function (){
    if (ajaxReq.readyState == 4 && ajaxReq.status == 200){
      document.getElementById("header").innerHTML = ajaxReq.responseText;
    }
  }
  //La respuesta que se quiere visualizar en info es la siguietne.
  ajaxReq.open("GET","../templates/header.html",true);
  ajaxReq.send();
}


