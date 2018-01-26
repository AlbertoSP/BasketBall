window.onload = function() {
    document.getElementById("start-button").onclick = function(){
            $(".container").css("display","none")}
}
$(document).ready(function () {
    var miPaleta = new Paleta(250, 700);
    var ball = new Actor(miPaleta.x + 50, miPaleta.y - 20, 0, -10);

    var miCanasta = new Canasta();
    var miMuro1 = new Muro(20, 100, 2);
    var miMuro2 = new Muro(20, 300, 3);
    var miMuro3 = new Muro(20, 520, 4);

    var misMuros = [miMuro1, miMuro2, miMuro3]


    miPaleta.drawPaleta();
    miCanasta.drawCanasta(20, 295);
    var lanzada = true;
    $(document).keydown(function (e) {
    
        switch (e.keyCode) {
            case 37:
                miPaleta.move('left')
                break;
            case 39:
                miPaleta.move('right')
                break;
        }
        if(lanzada){
        switch (e.keyCode) {
            case 37:
                ball.ball('left')
                break;
            case 39:
                ball.ball('right')
                break;
            case 32:
                ball.press = true;
                lanzada = false;

        }
    }

  
    });

    setInterval(function () {
        ball.update();
        miMuro1.move();
        miMuro2.move();
        miMuro3.move();
        checkCollisions(ball)
        miCanasta.checkContador();
        // var colliders_selector = ".ball";
        // var obstacles_selector = ".muro";
    }, 10);


    function checkCollisions(ballObject){
        var muros = $('.muro')
        var ball = $('.ball')
        var paletaCol = $('.paleta')
        var canastaCol = $(".canasta")
        var collisionCanasta = canastaCol.collision(ball);
        var collisionMuroBall = muros.collision(ball)
        var collisionPaleta = paletaCol.collision(ball)
        if(collisionCanasta[0]){
            miCanasta.puntos = miCanasta.puntos + 1
        }
       if(collisionMuroBall[0] || collisionPaleta[0]){
         ballObject.cambioDireccion();
       }
            // console.log(ball.x)
            // console.log('posicion en y')
            // console.log(misMuros[i].y)
        
    }
});
