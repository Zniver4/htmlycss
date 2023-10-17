document.addEventListener("DOMContentLoaded", function () {
    var modo = localStorage.getItem("modo");
  
    if (modo === "oscuro") {
      activarModoOscuro();
    }
  
    var boton = document.getElementById("modo-boton");
    boton.addEventListener("click", function () {
      if (modo === "claro") {
        activarModoOscuro();
        modo = "oscuro";
      } else {
        activarModoClaro();
        modo = "claro";
      }
  
      localStorage.setItem("modo", modo);
    });
  
    function activarModoOscuro() {
      const body = document.body;
  
      body.style.backgroundColor = "#1a1a1a";
      body.style.color = "#ffffff";
  
      const elements = document.querySelectorAll(".modo-oscuro");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#1a1a1a";
        elements[i].style.color = "#ffffff";
      }
    }
  
    function activarModoClaro() {
      const body = document.body;
  
      body.style.backgroundColor = "#09533b";
      body.style.color = "#ffffff";
  
      const elements = document.querySelectorAll(".modo-claro");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "#09533b";
        elements[i].style.color = "#ffffff";
      }
    }
  });

