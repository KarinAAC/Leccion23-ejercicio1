window.addEventListener('load', function() {
  var contenedor = document.getElementById("div-general");
  contenedor.style.position = "relative";
  contenedor.style.width = "100%";
  contenedor.style.height = "700px";


  var divRojo = document.createElement("div");
  divRojo.style.background = "#F21A1A";
  divRojo.style.width = "30%";
  divRojo.style.height = "380px";
  divRojo.style.margin = "80px";
  divRojo.style.postion = "absolute";
  divRojo.style.display = "inline-block";


  var divMorado = document.createElement("div");
  divMorado.style.background = "#935CC9";
  divMorado.style.width = "60%";
  divMorado.style.height = "250px";
  divMorado.style.postion = "absolute";
  divMorado.style.margin = "70px";


  var divAmarillo = document.createElement("div");
  divAmarillo.style.background = "#EBF21A";
  divAmarillo.style.width = "50%";
  divAmarillo.style.height = "110px";


   contenedor.appendChild(divRojo);
   divRojo.appendChild(divMorado);
   divMorado.appendChild(divAmarillo);

   var divAzul = document.createElement("div");
   divAzul.style.background = "#4C1AF2";
   divAzul.style.width = "30%";
   divAzul.style.height = "380px";
   divAzul.style.margin = "80px";
   divAzul.style.position = "relative";
   divAzul.style.display = "inline-block";

   var divVerde = document.createElement("div");
   divVerde.style.background = "#2CD54E";
   divVerde.style.width = "50%";
   divVerde.style.height = "214px";
   divVerde.style.position = "relative";
   divVerde.style.margin = "90px";

   var divNegro = document.createElement("div");
   divNegro.style.background = "#090E0A";
   divNegro.style.width = "24%";
   divNegro.style.height = "90px";
   divNegro.style.position = "absolute";
   divNegro.style.top ="0";

   contenedor.appendChild(divAzul);
   divAzul.appendChild(divVerde);
   divAzul.appendChild(divNegro);
});
