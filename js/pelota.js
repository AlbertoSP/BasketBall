function Actor(x, y, sX, sY) {
    this.x = x;
    this.y = y;
    this.speedX = sX;
    this.speedY = sY;
    this.element = $('<div>').addClass("ball");
    this.element.css({
        top: this.y,
        left: this.x,
        position: 'absolute'
    });
    $(".gameContainer").append(this.element);
}
Actor.prototype.ball = function (direction) {
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
    this.render();
}
Actor.prototype.render = function () {
    $(".ball").css({
      "top": this.y,
      "left": this.x
    });
  }