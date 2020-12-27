class Background{
    constructor(ctx) {
        //Definimos el contexto, width,height
        this.ctx = ctx
        this.width = this.ctx.canvas.width
        this.height = this.ctx.canvas.height

        //Inicializamos los valores de x e y
        this.x = 0
        this.y=this.height-200
        //El fondo se desplazará de derecha a izquierda,de esta manera se simula el movimiento
        //de nuestro personaje andando hacia la derecha
        this.vx = -20
            
        //Rellenamos el area Canvas de azul cielo
        //this.ctx.fillStyle = "aquamarine"
        //this.ctx.fillRect(0, 0, this.width, this.height)
        //Definimos nuestro fondo con la imagen del suelo cesped
        this.img = new Image()
        this.img.src = './Tiles/grass.png'
        //Cuando la imagen haya sido cargada arrancará el juego
        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady=true
        }
    }
    //Metodo isReady
    isReady() {
        return this.img.isReady
    }
    //Metodo dibujar si el metodo isReady=true (imagen cargada en el servidor)
    draw() {
        if (this.isReady()) {
            //console.log("hola")
            this.ctx.drawImage(this.img,this.x, this.y, this.width, this.height)
        //Cuando nuestro personaje avance el fondo se desplazará hacia la izquierda con velocidad negativa vx
            this.ctx.drawImage(this.img, this.x+this.width, this.y, this.width, this.height)
            
        }

    }
   
}