class Tree{
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.x = x
        this.y = y
        
        this.img = new Image()
        this.img.src = './Tiles/tree.png'
        
        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }
    }


//Metodo isReady
isReady() {
    return this.img.isReady
}
//Metodo dibujar si el metodo isReady=true (imagen cargada en el servidor)
draw() {
    if (this.img.isReady()) {
        console.log("hola")
        this.ctx.drawImage(this.img, this.x, this.y)
    }
}
}