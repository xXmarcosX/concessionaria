var contador = 1;
  var img1 = "image/2-lamborghini-huracan-policia_1.jpg";
  var img2 = "image/car-1.jpg";
  var img3 = "image/mercedes.jpg";
  var tempo = 6000;
  var exibir = setInterval("Exibindo()", tempo);

  function Exibindo() {
    document.getElementById("carrossel").style.opacity = 0; 
    setTimeout(function () {
      document.images["slide"].src = eval("img" + contador);
      document.getElementById("carrossel").style.opacity = 1; 
    }, 500); 

    if (contador == 1)
      document.querySelector("figcaption").innerHTML = "";
    else if (contador == 2)
      document.querySelector("figcaption").innerHTML = "";
    else
      document.querySelector("figcaption").innerHTML = "";

    if (contador < 3)
      contador++;
    else
      contador = 1;
  }
  exibir = setInterval("Exibindo()", tempo);
