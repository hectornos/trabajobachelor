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

