/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //  función generadorexcusas
  function generadorexcusas() {
    // arrays para cada parte de la excusa
    let quien = ["Un marciano", "Mi abuela", "Mi bebé", "My pez"];
    let accion = ["rompió", "quemó", "mojó", "cocinó"];
    let que = ["mi proyecto", "las llaves", "el coche"];
    let cuando = [
      "después de clase",
      "antes de clase",
      "después de comer",
      "durante el almuerzo",
      "mientras estaba rezando"
    ];

    // Genera índices aleatorios para cada parte de la excusa
    let randomquien = Math.floor(Math.random() * quien.length);
    let randomaccion = Math.floor(Math.random() * accion.length);
    let randomque = Math.floor(Math.random() * que.length);
    let randomcuando = Math.floor(Math.random() * cuando.length);

    // Construye la excusa usando las partes elegidas al azar
    let frase =
      quien[randomquien] +
      " " +
      accion[randomaccion] +
      " " +
      que[randomque] +
      " " +
      cuando[randomcuando] +
      ".";

    // Muestra la excusa en el HTML
    document.getElementById("excusa").innerHTML = frase;
  }

  // Llama a la función para generar una excusa
  generadorexcusas();
};
