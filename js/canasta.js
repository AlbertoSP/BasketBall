function Canasta() {
    
   }
   Canasta.prototype.drawCanasta = function (top,left) {
    canast = document.createElement('div')
    $(".gameContainer").append(canast);
    $(canast).addClass("canasta");
    $(canast).css({"top": top,"left": left, "position": "absolute"});
}