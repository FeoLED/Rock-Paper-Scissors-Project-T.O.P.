let puntajeHumano = 0;
let puntajeMaquina = 0;
function resetearJuego() {
  puntajeHumano = 0;
  puntajeMaquina = 0;
  nuevaEleccionGente.textContent = "";
  nuevaEleccionMaquina.textContent = "";
  nuevoResultadoRonda.textContent = "";
  nuevoPuntaje.textContent = "";
  document.querySelector(".mensajeFinJuego").innerHTML = "";
  document.querySelector(".mostrarGanador").innerHTML = "";
  let botones = document.querySelectorAll(".btnPiedra, .btnPapel, .btnTijera");
  botones.forEach((boton) => {
    boton.disabled = false;
  });
}
function eleccionMaquina(){
  let num = Math.floor(Math.random()*10);
  if(num<4){
    return "Piedra";
  }else if(num>=4 && num<7){
    return "Papel";
  }else{
    return "Tijera";
  } 
}

let gente;
//DECLARAMOS LOS ELEMENTOS PARA MOSTRAR LA ELECCION DE LOS JUGADORES
let mostrarEleccionGente = document.querySelector(".eleccionGente");
let nuevaEleccionGente = document.createElement("p");
mostrarEleccionGente.appendChild(nuevaEleccionGente);
let mostrarEleccionMaquina = document.querySelector(".eleccionMaquina");
let nuevaEleccionMaquina = document.createElement("p");
mostrarEleccionMaquina.appendChild(nuevaEleccionMaquina);
//DECLARAMOS LOS ELEMENTOS PARA MOSTRAR EL RESULTADO DE LA RONDA
let mostrarResultadoRonda = document.querySelector(".resultadoRonda");
let nuevoResultadoRonda = document.createElement("p");
mostrarResultadoRonda.appendChild(nuevoResultadoRonda);
//DEBERIAMOS MOSTRAR LOS PUNTAJES A MEDIDA QUE SE JUEGA
let mostrarPuntajes = document.querySelector(".mostrarPuntaje");
let nuevoPuntaje = document.createElement("p");
mostrarPuntajes.appendChild(nuevoPuntaje);

function manejarBotones(){
  //MANEJADOR DE BOTONES
  let botones = document.querySelectorAll("button");
  botones.forEach((boton)=>{
    boton.addEventListener("click", (e)=>{
      //CONDICIONAL PARA FINALIZAR JUEGO CUANDO UN JUGADOR LLEGA A 5 PUNTOS
      if((puntajeHumano===5)||(puntajeMaquina===5)){
        let mostrarGanador = document.querySelector(".mostrarGanador");
        let nuevoGanador = document.createElement("h2");
        if(puntajeHumano>puntajeMaquina){
          nuevoGanador.textContent = "Ganaste el juego!";
        }else if(puntajeHumano<puntajeMaquina){
          nuevoGanador.textContent = "Ha ganado la máquina!";
        }
        mostrarGanador.appendChild(nuevoGanador);

      
        let mostrarFinJuego = document.querySelector(".mensajeFinJuego");
        mostrarFinJuego.innerHTML = `
          <p>Juego terminado!</p>
          <button id="reset-btn" style="margin:10px">Jugar de nuevo</button>
        `;
        document.getElementById("reset-btn").addEventListener("click", resetearJuego);
        botones.forEach((boton) => {
          boton.disabled = true;
        });
        return;
      }

    //ACA MUESTRA LA ELECCION DEL JUGADOR
    gente = e.target.textContent;
    let msje = "Elegiste " + gente;
    nuevaEleccionGente.textContent = msje;
    //ACA MUESTRA LA ELECCION DE LA MAQUINA
    let maqui = eleccionMaquina();
    nuevaEleccionMaquina.textContent = "Máquina elige " + maqui;
    //ACA MUESTRA EL RESULTADO DE LA RONDA
    let resultado = ronda(gente, maqui);
    nuevoResultadoRonda.textContent = resultado;
      
    //ACA, DETERMINA QUIEN GANA UNA RONDA Y SUMA LOS PUNTAJES
    if(resultado.includes("Ganaste")){
      puntajeHumano++;
    }else if(resultado.includes("Perdiste")){
      puntajeMaquina++;
    }
    // //DEBERIAMOS MOSTRAR LOS PUNTAJES A MEDIDA QUE SE JUEGA
    nuevoPuntaje.textContent = "Tú: " + puntajeHumano + "; Máquina: " + puntajeMaquina;
    });
  });
};
 
function ronda(gente, eleccionMaquina){
  if((gente=="Papel")&&(eleccionMaquina=="Piedra")){
    return "Ganaste esta ronda";
  }else if((gente=="Papel")&&(eleccionMaquina=="Tijera")){
    return "Perdiste esta ronda";
  }else if((gente=="Piedra")&&(eleccionMaquina=="Tijera")){
    return "Ganaste esta ronda";
  }else if((gente=="Piedra")&&(eleccionMaquina=="Papel")){
    return "Perdiste esta ronda";
  }else if((gente=="Tijera")&&(eleccionMaquina=="Papel")){
    return "Ganaste esta ronda";
  }else if((gente=="Tijera")&&(eleccionMaquina=="Piedra")){
    return "Perdiste esta ronda";
  }else if(gente==eleccionMaquina){
    return "Empate";
  }
};

manejarBotones();
