$(document).ready(function () {
    var miPaleta = new Paleta();
    miPaleta.drawPaleta();

    $(document).keydown(function (e) {
        miPaleta.move(e)
    });
    $(document).ready(function () {
        var miMuro1 = new Muro(20, 20);
        // var miMuro2=new Muro();
        // var miMuro3=new Muro();
        miMuro1.drawMuros()


        // setInterval(function () {
        //     miMuro1.move();
        // //ejecutar ua funcion un número de veces
       
        // }, 2000);
  
        // miMuro3.drawMuros(170, 40);
    });
    $(document).ready(function () {
        var miCanasta = new Canasta();
        miCanasta.drawCanasta(20, 300);
    });





});