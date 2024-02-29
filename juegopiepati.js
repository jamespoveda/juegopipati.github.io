var opciones = ["piedra", "papel", "tijera"];
var opciones = [0, 1, 2];
var Maquina;
function aleatorio(minimo, maximo){
    var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}
function usuario(eleccionUsuario){
    eleccionUsuario = parseInt(eleccionUsuario);
    Maquina = aleatorio(0,2);
    
    if(eleccionUsuario == 0){//el usuario eligio piedra 
        if(opciones[Maquina] == 1){//si la maquina eligio papel 
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
        }else{
            if(opciones[Maquina] == 2){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
            }else{
                if(opciones[Maquina] == 0){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
                }
            }
        }
    }if(eleccionUsuario == 1){//el usuario eligio papel 
        if(opciones[Maquina] == 2){
            document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
        }else{
            if(opciones[Maquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';
                
            }else{
                if(opciones[Maquina] == 1){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron papel.</h3>'; 
                }
            }
        }
    }
    
    if(eleccionUsuario == 2) {//el usuario eligio tijera 
        if(opciones[Maquina] == 1){
            document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
        
        }else{
            if(opciones[Maquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>'; 
            }else{
                if(opciones[Maquina] == 2) {
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
                }
            }
        }
    }
    
    document.getElementById('efecto').style.display = "";
    }function quitarEfecto() {
        document.getElementById('efecto').style.display = "none";
    }
