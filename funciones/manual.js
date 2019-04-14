function revelarunidad(){
  //Vamos a cambiar la imagen que se muestra
  var imagen = document.getElementById("imagencilla");
  var imagenCont = "<img height=241 width=700 src='../../imagenes/manual/ejercicioUnidadb.png' usemap='#image-map'><map name='image-map'><area target='' alt='unidad3' title='unidad3' coords='577,27,630,9' shape='rect'><area target='' alt='temario' title='temario' onclick='revelartemario()' coords='518,25,571,7' shape='rect'></map>";
  imagen.innerHTML=imagenCont;
}

function revelartemario(){
  //Vamos a cambiar la imagen que se muestra
  var imagen = document.getElementById("imagencilla");
  var imagenCont = "<img height=241 width=700 src='../../imagenes/manual/ejerciciotemario.png' usemap='#image-map'><map name='image-map'><area target='' alt='unidad3' title='unidad3' onclick='revelarunidad()' coords='577,27,630,9' shape='rect'><area target='' alt='temario' title='temario' coords='518,25,571,7' shape='rect'></map>";
  imagen.innerHTML=imagenCont;
}

