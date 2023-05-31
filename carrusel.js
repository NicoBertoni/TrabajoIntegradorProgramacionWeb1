let carrImg = ["imagenes/Peliculas/Alien1.png","imagenes/Peliculas/Beetlejuice.jpg","imagenes/Peliculas/Episodio5.jpg","imagenes/Peliculas/TheThing.jpg"];
let contImg = 0;

function imagenAnt(){
    if(contImg >0){
        contImg--;
    } else {
        contImg=carrImg.length-1;
    }
    visualImg();
}

function imagenPost(){
    if(contImg<(carrImg.length-1)){
        contImg++;
    } else {
        contImg=0;
    }
    visualImg();
}

function visualImg(){
    let peliAct=document.getElementById("peli1");
    peliAct.src=carrImg[contImg];
}

