class Animals {
    constructor(ctx, sound) {
        this.ctx = ctx
        this.sound = new Audio(sound)
    }
    
    sound() {
    this.sound.play() 
    //fire: newAudio('./Sounds/funny-chase-cartoon-music-sound-theme-classic-famous-family-guy.mp4)
    }
}

//Instanciamos la clase animal para crear clase pollo
class Chicken extends Animals {
    constructor(ctx, sound) {
        super(ctx, sound)
        this.x = 100
    }

}

new Chicken(CTX, SOUND, x)