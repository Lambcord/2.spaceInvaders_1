//Creamos la posición inicial de la nave
var posXNave = 610;
var posYNave = 660;
var proyectilActivo = false;
var posXProyectil = posXNave +30;
var posYProyectil = posYNave;

//Creamos la función para mover la nave con las flechas del teclado
function movNave(){
    if (keyIsDown(37) && posXNave > 0) {
        posXNave = posXNave-10;
      }
      if(keyIsDown(39) && posXNave < (1280-60)){
        posXNave = posXNave +10;
        
      }
      if (keyIsDown(38) && posYNave > 0) {
        posYNave = posYNave -10;
      }
      if (keyIsDown(40) && posYNave < (720 - 20)){
        posYNave = posYNave +10;
      }
}

//Creamos la función para disparar
function disparos (){
    if (keyIsDown(32)) {
        proyectilActivo = true; //Copilot
      }
      
}

//Creamos una función desactivar el proyectil 
function finProyectil() {
    if (posYProyectil == 0) 
        proyectilActivo = false;
}
    
    
    

//Esta funcion se ejecuta únicamente la primera vez que ejecutamos el juego (crea el fondo)
function setup (){
    createCanvas (1280, 720)
background (255,255,255)
}

//Esta función se ejecuta cada frame  (32 BARRA ESPACIADORA)
function draw (){
    background (0,0,0) //Se vuelve a pintar el background para que no se queden dibujadas las distintas posiciones de la nave
    fill (135,108,148)
    rect(posXNave,posYNave,60,50)
    noFill ()
    movNave();
    disparos();
    //Creamos un bucle para el proyectil 
    if (proyectilActivo) {
        fill(255, 255, 255);
        ellipse(posXProyectil, posYProyectil, 7, 7);
        noFill();
        posYProyectil-= 1

    }
    finProyectil()
}


 


