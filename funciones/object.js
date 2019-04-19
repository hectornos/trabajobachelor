//Ejercicio 5
  //Sobreescribimos la clase object y creamos un método llamado implementa
  Object.prototype.implementa = function(nombreMetodo) {
    return this[nombreMetodo] && this[nombreMetodo] instanceof Function;
  }

function ejercicio5(){
  //Objeto con una funcion como parámetro, llamada funcionGuay.
  var obj1 = {
    funcionGuay : function () {
      alert("hola que ase");
    }
  };

    //Objeto con una funcion como parámetro, llamada funcionGuay2.
    var obj2 = {
      funcionGuay2 : function () {
        alert("para que quiere saber eso jaaja");
      }
    };

    alert("Que el objeto 2 implementa la funcionGuay es " + obj2.implementa("funcionGuay"));
    alert("Que el objeto 2 implementa la funcionGuay2 es " + obj2.implementa("funcionGuay2"));
    alert("Que el objeto 1 implementa la funcionGuay es " + obj1.implementa("funcionGuay"));
    alert("Que el objeto 1 implementa la funcionGuay2 es " + obj1.implementa("funcionGuay2"));
}
