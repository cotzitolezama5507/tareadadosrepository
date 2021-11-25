//Código JavaScript
//Josue Israel Lezama Canul
function Jugador(nombre){
    this.nombre = nombre;
    this.caraDado1 = 0;
    this.caraDado2 = 0;
}

function JuegoDados(numeroJuego, j1, j2){
    this.numeroJuego = numeroJuego;
    this.jugador1 = j1;
    this.jugador2 = j2;

    this.tirarDados = function() {
        this.jugador1.caraDado1 =Math.floor(Math.random() * 6) + 1; //usar random(1,6)
        this.jugador1.caraDado2 = Math.floor(Math.random() * 6) + 1; //usar random(1,6)

        this.jugador2.caraDado1 = Math.floor(Math.random() * 6) + 1; //usar random(1,6)
        this.jugador2.caraDado2 = Math.floor(Math.random() * 6) + 1; //usar random(1,6)
    }

    this.determinaGanador = function() {
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {
            return this.jugador1.nombre;
        }
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7) ) {
            return this.jugador2.nombre;
        }
        else return "Drawgame";
    }

}
let juegoJugador1=0;
let juegoJugador2=0;
let ganadorNombre="";
let player1 = new Jugador();
let player2 = new Jugador();
player1.nombre="Lu";
player2.nombre="Montse";
let i=1;
let banderaGanador=false;
let empate=0;
let ganadorTorneo="";

do{     
    let juego1 = new JuegoDados(i, player1, player2);
    juego1.tirarDados();
    let ganador = juego1.determinaGanador();
    
    if(ganador ===player1.nombre){
        ganadorNombre = player1.nombre
        juegoJugador1++
    }
    if(ganador ===player2.nombre){
        ganadorNombre = player2.nombre
        juegoJugador2++
    }
    if(ganador ==="Drawgame"){
        empate++
        ganadorNombre = "Drawgame"
    }
        console.log("Winner of the game "+ i +" is: " + ganadorNombre);
        if (juegoJugador1 ===3 || juegoJugador2===3){
            
            banderaGanador=true;
            if(juegoJugador1===3){
                ganadorTorneo=player1.nombre;
            }else{
                ganadorTorneo=player2.nombre;
                
            }
        }
    i=i+1;
} while(banderaGanador===false);
console.log("Number of game: "+i);
console.log("Winner of the tournament: "+ ganadorTorneo);
console.log("CONGRATULATION");





//Determinar el primer ganador de 3 juegos y cuantos juegos hubo
