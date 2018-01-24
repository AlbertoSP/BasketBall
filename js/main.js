
$(document).ready(function () {
    var miPaleta = new Paleta(250, 700);
    var ball = new Actor(miPaleta.x + 50, miPaleta.y - 20, 0, 10);
    
    var miCanasta = new Canasta();
    var miMuro1 = new Muro(20, 100, 2);
    var miMuro2 = new Muro(20, 300, 3);
    var miMuro3 = new Muro(20, 520, 4);

    miPaleta.drawPaleta();
    miCanasta.drawCanasta(20, 295);

    $(document).keydown(function (e) {
        miPaleta.move(e)
        ball.ball(e)
        
    });

        setInterval(function () {
            miMuro1.move();
            miMuro2.move();
            miMuro3.move();
            //ejecutar ua funcion un número de veces
        }, 10);
    });

        




           
    
    