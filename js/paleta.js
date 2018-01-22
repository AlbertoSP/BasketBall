function Paleta() {
 this.positionTop= 670;
this.positionLeft= 250;
}

var paleta;

Paleta.prototype.drawPaleta = function () {
    paleta = document.createElement('div')
    $(".gameContainer").append(paleta);
    $(paleta).addClass("paleta");
    $(paleta).css({"top": this.positionTop,"left": this.positionLeft});
}
Paleta.prototype.move= function(e){
    console.log(e.keyCode);
    console.log(this.positionTop);
    switch (e.keyCode) {
        case 37: // left
        this.positionLeft -= 5;
          if (this.positionLeft < 0) {
            this.positionLeft = 10;
          }
          break;
        case 39: // right
        this.positionLeft += 5;
          if (this.positionLeft > 490) {
            this.positionLeft = 480;
          }
          break;
        default:
          return; // exit this handler for other keys
      }
      this.update();
}
Paleta.prototype.update = function() {
    $(paleta).css({"top": this.positionTop,"left": this.positionLeft});
}

