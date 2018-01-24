$(document).ready(function () {
    var miPaleta = new Paleta();
    miPaleta.drawPaleta();

    $(document).keydown(function (e) {
        miPaleta.move(e)
    });
    $(document).ready(function () {
        var miMuro1 = new Muro(20, 100, 2);
       var miMuro2 = new Muro(20, 300, 3);
       var miMuro3 = new Muro(20, 520, 4);
        setInterval(function () {
            miMuro1.move();
            miMuro2.move();
            miMuro3.move();
            //ejecutar ua funcion un número de veces
        }, 10);
    });
    $(document).ready(function () {
        var miCanasta = new Canasta();
        miCanasta.drawCanasta(20, 295);
    });
    $(document).ready(function () {
        var miPelota = new Pelota(305, 650);
        
    });
});