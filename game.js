//Creo la clase juego
//Contiene:
//1-Background (grass)
//2-Trees (static)
//4-Rocks (static)
//5-Mushrooms (dinamic,random.x)
//6-Bee swarm (dinamic,random.y)
//7-Character (dinamic, keys events)
//Animals  (clase con instancias a distintos animales )

//


class Game{
    constructor(canvasId) {
        //Accedemos a nuestro Canvas a traves del DOM
        this.canvas = document.getElementById(canvasId)
        //Declaramos nuestro contexto Canvas en 2D
        this.ctx=this.canvas.getContext('2d')
        //this.background = new Background(ctx)
        //Establecemos medidas Canvas
        this.canvas.width = 800
        this.canvas.height = 400
        //Intervalo de pintado en la renderizacion
        this.drawInterval = undefined
        //Renderización
        this.fps = 1000 / 60
        //Instanciamos la clase Background
        this.background = new Background(this.ctx)
        //Instanciamos la clase arbol para pintar 2 arboles en 2 puntos distintos
        this.tree = new Tree(this.ctx, this.canvas.width / 4, 200)
        this.tree_2 = new Tree(this.ctx, this.canvas.width / 6, 200)
        //Instanciamos a nuestro personaje (woman por defecto)
        this.gamer=new Woman(this.ctx, 100, this.canvas.height-300)
        
        
        //Declaramos la canción princial del juego dentro de una constante, ya que es constante
        //con los animales es varible
        const theme = new Audio('./Sounds/funny-chase-cartoon-music-sound-theme-classic-famous-family-guy.mp4')

        

    }
    start() {
        //Si el juego no está arrancado, creo otro intervalo, de esta manera no "colapsa"
        if (!this.drawInterval) {
            //Al método setInterval se le pasarán como parámetros se le pasa un callback y los ms (que serán el atributo fps de nuestra clase Game)
            this.drawInterval = setInterval(() => {
                //El movimiento consiste en: limpiar lo anterior - mover - pintar
                //this.clear()
                //this.move()
                this.draw()
                
             
            },this.fps)
        }
    }
    clear() {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
    draw() {
        this.background.draw()
        this.gamer.draw()
    }
    move() {
        
    }
}