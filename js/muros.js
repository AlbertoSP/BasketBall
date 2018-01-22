function Muros() {
    this.positionTop= 200;
   this.positionLeft= 35;
   }
   Muros.prototype.drawMuros = function () {
    muro = document.createElement('div')
    $(".gameContainer").append(muro);
    $(muro).addClass("muro");
    $(muro).css({"top": this.positionTop,"left": this.positionLeft});
}