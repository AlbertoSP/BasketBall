function Paleta(x, y) {
  this.x = x;
  this.y = y;
}

var paleta;

Paleta.prototype.drawPaleta = function () {
  paleta = document.createElement('div')
  $(".gameContainer").append(paleta);
  $(paleta).addClass("paleta");
  $(paleta).css({
    "top": this.y,
    "left": this.x
  });
}
Paleta.prototype.move = function (direction) {

  switch (direction.keyCode) {
    //Left
    case 37:
      
      if (this.x > 0) {
        this.x -= 10;
      }
      break;
    //Rigth
    case 39:
      
      if (this.x < 490) {
        this.x += 10;
      }
      break;
    default:
      return; // exit this handler for other keys
  }
  this.update();
}
Paleta.prototype.update = function () {
  $(paleta).css({
    "top": this.y,
    "left": this.x
  });
}