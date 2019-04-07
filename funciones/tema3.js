//Ejercicio 1

function limita(elEvento, maximoCaracteres) { 
  var elemento = document.getElementById("texto")
  var evento = elEvento || window.event; 
  var codigoCaracter = evento.charCode || evento.keyCode; 
  if (codigoCaracter == 37 || codigoCaracter == 39) { 
    return true; 
  } 
    if (codigoCaracter == 8 || codigoCaracter == 46) { 
      return true; 
    } else if (elemento.value.length >= maximoCaracteres) { 
    return false; 
    } else { 
    return true; 
    } 
  }

  //Funcion que se aplica cuando hay foco en el textarea.
  function areatexto(){
    document.onkeypress=limita;
  }

  function limita(maximoCaracteres){
    var elemento = document.getElementById("texto");
    var evento = window.event; 
    var codigoCaracter = evento.charCode || evento.keyCode;
    if (codigoCaracter == 37 || codigoCaracter == 39) { 
      return true; 
    } 
      if (codigoCaracter == 8 || codigoCaracter == 46) { 
        return true; 
      } else if (elemento.value.length >= maximoCaracteres) { 
      return false; 
      } else { 
      return true; 
      } 
  }

  function actualiza(maximoCaracteres){
    var elemento = document.getElementById("texto");
    var longitud = elemento.value.length;
    var longMax = maximoCaracteres;
    var resto = longMax-longitud;
    document.getElementById("ayuda").innerHTML="Te quedan " + resto + " caracteres";
  }

  //Ejercicio 2

  function validar() {
    if (isNaN(document.getElementById("nombre").value)){
      var bol = true;
    } else {
      var bol = false;
    }
    if (isNaN(document.getElementById("edad").value)){
      var bol = false;
    } else {
      bol = validarEntero(document.getElementById("edad").value);
    }
    if (document.getElementById("elegir").value == ""){
      var bol = false;
    }
    if (bol){
      alert("Todo ha ido bien");
    } else {
      alert("Revisa los campos introducidos");
    }
    return bol;
  }

  function validarEntero(edad){
    if (edad>18){
      return true;
    } else {
      return false;
    }
  }

  //Ejercicio 3
  function validarFecha(){
    //Primero comprobamos el formato.
    var fecha = document.getElementById("fecha").value;
    var regexp = /^([0-9]{2}-[0-9]{2}-[0-9]{4})$/;
    booleano = regexp.test(fecha);
    //Luego dividimos en dias meses y años.
    var dias = fecha.substring(0,2);
    var dia = parseInt(dias);
    var largos = [1,3,5,7,8,10,12];
    var cortos = [4,6,9,11];
    var meses = fecha.substring(3,5)
    var mes = parseInt(meses);
    var anios = fecha.substring(6, 10);
    var anioActual = new Date().getFullYear();
    //Comprobamos que estamos en el rango de años.
    var bol = false;
    if (anios > 1900 && anios < anioActual ){
      //Comprobamos que estamos en el rango de meses.
      if (parseInt(meses)>0 && parseInt(meses)<13){
        //Mes largo 31 dias
        if (largos.includes(mes)){
          if (dia>0 && dia<32){
            var bol = true;
          }
          //Meses de 30 dias
        } else if (cortos.includes(mes)) {
          if (dia>0 && dia<31){
            var bol = true;
          }
          //Mes de 28 dias
        } else {
          if (dia>0 && dia<29){
            var bol = true;
          }
        }
      }
    }
    alert('Fecha correcta!!!')
  }

  
  //Ejercicio 4
    
    function alarma(){
			//Pomnemos la fecha directamente en variables.
      dia =5;
      mes=3;
      anio=2019;
			variable3 = setInterval(Carrousel,100);
		}
		function Carrousel(){
      var anioActual = new Date().getFullYear();
      var diaActual = new Date().getDate();
      var mesActual = (new Date().getMonth())+1;

      //Suponemos meses de 30 dias para simplificar.
			if (dia<30){
        if (anio == anioActual && mes == mesActual && dia==diaActual){
          document.getElementById("fechahoy").innerHTML='Fecha de hoy!!!!!!';
        } else {
          dia++;
        }
      } else {
        if (mes<12){
          dia=1;
          mes++;
        } else {
          mes=1;
          anio++;
        }
      }
			document.getElementById("contador").innerHTML=dia+"-"+mes+"-"+anio;
		}