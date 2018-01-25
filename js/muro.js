function Muro(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.element = $("<div>").addClass("muro");
    this.element.css({top: this.y,left: this.x, width: 117, height: 50,
    });
    $(".gameContainer").append(this.element);
}

Muro.prototype.move = function () {
    this.x += this.speed;
    this.element.css({
        top: this.y,
        left: this.x
    });

    if (this.x >= $(".gameContainer").width() - 117 || this.x <= 0) {
        this.speed *= -1;
    }
};