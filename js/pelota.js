function Actor(x, y, sX, sY) {
    this.x = x;
    this.y = y;
    this.speedX = sX;
    this.speedY = sY;
    this.press = false;


    this.element = $('<div>').addClass("ball");
    this.element.css({
        top: this.y,
        left: this.x,
        position: 'absolute'
    });
    $(".gameContainer").append(this.element);
}
Actor.prototype.update = function () {
    //  this.y -= 10;

    if (this.x >= $(".gameContainer").width() || this.x <= 0) {
        this.speedX *= -1;
    }
    if ( this.y <= 0) {
        
        this.speedY *= -1;
    }
    if(this.y >= $(".gameContainer").height()){
        alert("GAME OVER")
    }
    if (this.press) {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    this.element.css({
        top: this.y,
        left: this.x,
        position: 'absolute'
    });
}
var ball = new Actor(500, 50, 0, 10);
setInterval(function () {
    ball.update();
}, 10);

Actor.prototype.ball = function (direction) {
    switch (direction) {
        case 'left':
            if (this.x > 0)
                this.x -= 10;
            break;
        case 'right':
            if (this.x < $(".gameContainer").width() - 20)
                this.x += 10;
            break;
    }
    this.render();
}
Actor.prototype.render = function () {
    $(".ball").css({
        "top": this.y,
        "left": this.x
    });
}
Actor.prototype.cambioDireccion = function () {
    console.log(this)
         this.speedY*= -1;
    }