class Woman {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.x = x
        this.y = y
        //Punto de x a partir del cual se dibujara el siguiente background, 
        //lo estableceremos en el centro del espacio canvas
        this.maxX = this.ctx.canvas.width / 2
        
        this.sprite = new Image()
        this.sprite.src = './Sprites/woman.png'
        //Verificamos la carga correcta del sprite antes de seguir con la siguiente ejecucion
        this.sprite.isReady = false
        
        //Frames en la horizontal 6 (6 imagenes del personaje)
        this.sprite.horizontalFrames = 6
        //Frames en la vertical 5
        this.sprite.verticalFrames = 5
        //Posicion "parado" equivale al frame 1 => posicion fila 0-columna 0 del sprite
        this.sprite.horizontalFramesIndex = 0
        this.sprite.verticalFramesIndex = 0
        
        //Inicializamos el ancho y el alto de la imagen a cero
        this.width = 0
        this.height = 0
        
        this.sprite.onload = () => {
            this.sprite.isReady = true
            //Ancho de cada frame con resultado numero entero
            this.sprite.frameWidth = Math.floor(this.sprite.width / this.sprite.horizontalFrames)
            //Alto de cada frame con resultado numero entero
            this.sprite.frameHeight = Math.floor(this.sprite.height / this.sprite.verticalFrames)
            //sWidth
            this.width = this.sprite.frameWidth
            //sHeight
            this.height = this.sprite.frameHeight
        }
    }
    //Metodo isReady
    isReady() {
        return this.sprite.isReady
    }
    draw() {
        if (this.isReady()) {
            //console.log("hola")
            this.ctx.drawImage(
                this.sprite,
                this.sprite.horizontalFramesIndex * this.frameWidth,
                this.sprite.verticalFramesIndex * this.frameHeight,
                this.sprite.frameWidth,
                this.sprite.frameHeight,
                this.x,
                this.y,
                this.width,
                this.height
            )
           // this.animate()
        }
    }
    //Animamos al personaje cambiando de una imagen a otra
    /*  animate() {
          if () {
          }else if () {
                  
          } else {
              
              }
          }   */
    
}
//class Man extends Woman