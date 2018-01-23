$(document).ready(function () {
    var miPaleta = new Paleta();
    miPaleta.drawPaleta();

    $(document).keydown(function (e) {
        miPaleta.move(e)
    });
    $(document).ready(function () {
        var miMuro1 = new Muro(20, 100, 10);
       
        setInterval(function () {
            miMuro1.move();
            //ejecutar ua funcion un número de veces
        }, 10);
    });
    $(document).ready(function () {
        var miCanasta = new Canasta();
        miCanasta.drawCanasta(20, 300);
    });





});