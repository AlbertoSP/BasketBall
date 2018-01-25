function Paleta(x, y) {
  this.x = x;
  this.y = y;
  this.element = document.createElement('div')
}


Paleta.prototype.drawPaleta = function () {
  $(".gameContainer").append(this.element);
  $(this.element).addClass("paleta");
  $(this.element).css({
    "top": this.y,
    "left": this.x
  });
}

Paleta.prototype.move = function (direction) {
  switch (direction) {
    case 'left':
    if(this.x > 0)
        this.x -= 10;
      break;
    case 'right':
    if(this.x < $(".gameContainer").width()-117)
        this.x += 10;
      break;
  }
  this.update();
}

Paleta.prototype.update = function () {
  $(this.element).css({
    "top": this.y,
    "left": this.x
  });
}