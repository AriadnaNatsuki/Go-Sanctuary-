//Accedemos a nuestro Canvas a traves del DOM
const canvas = document.getElementById('SantuartGo!')
//Declaramos nuestro contexto Canvas en 2D
const ctx = canvas.getContext('2d')
//Declaramos nuestro juego, creando uno a partir de la clase Game
const game= new Gamepad(ctx)
