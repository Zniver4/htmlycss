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
  
    let intervalId;
  
    function iniciarReloj() {
      let reloj = document.getElementById("reloj");
      intervalId = setInterval(() => {
        let horaActual = getHora();
        reloj.textContent = horaActual;
      }, 1000);
    }
  
    function detenerReloj() {
      clearInterval(intervalId);
    }
  
    function getHora() {
      // Función para obtener la hora actual
      let fecha = new Date();
      let hora = fecha.getHours();
      let meridiano = "AM";
  
      if (hora === 0) {
        hora = 12;
      } else if (hora > 12) {
        hora = hora - 12;
        meridiano = "PM";
      }
  
      hora = hora.toString().padStart(2, "0");
      let minuto = fecha.getMinutes().toString().padStart(2, "0");
      let segundo = fecha.getSeconds().toString().padStart(2, "0");
  
      return `${hora}:${minuto}:${segundo} ${meridiano}`;
    }
  
    // Iniciar el reloj al cargar la página
    iniciarReloj();
  });
  
