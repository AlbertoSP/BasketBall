

$( document ).ready(function() {
    var miPaleta   = new Paleta();
    miPaleta.drawPaleta();
    
    $(document).keydown(function(e){
        miPaleta.move(e)
    });

});
   
