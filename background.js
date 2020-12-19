class Background{
    constructor(ctx) {
        //Definimos el contexto, width,height
        this.ctx = ctx
        this.width = this.ctx.canvas.width
        this.height = this.ctx.canvas.height
        //Rellenamos el area Canvas de azul cielo
        ctx.fillStyle = "sky"
        ctx.fillRect(0, 0, this.width, this.height)
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
        if (this.img.isReady()) {
            this.ctx.drawImage(this.img, this.x, 0, this.width, this.height)
        //Cuando nuestro personaje 
        }

    }
   
}