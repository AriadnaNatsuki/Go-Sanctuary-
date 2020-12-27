//Evento que produce cuando el navegador ha cargado todo lo necesario para que podamos interactuar con él
//Se le pasa un string con el tipo de evento como primer parametro y como segundo una funcion callback
window.addEventListener('load', () => {
    //Instancia clase juego y le pasamos como parámetro al constructor nuestro canvasId
    const game = new Game('SantuaryGo')
    //Evento que se iniciará (arrancar juego con start) cuando pulsemos cualquier tecla alfanumérica
    /*document.addEventListener('onclick', () => {
        game.start()
        
    })*/
    //Guardamos el elemento 'button' en una constante llamada button_start
    const button_start = document.getElementById('button')
    //Añadimos el evento a nuestro elemento almacenado en la constante
    button_start.onclick = () => {
            console.log('clicked')
        game.start();
    }
})


