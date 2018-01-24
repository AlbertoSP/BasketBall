function Pelota(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.element = $("<div>").addClass("pelota");
    this.element.css({
        top: this.y,
        left: this.x
    });
    $(".gameContainer").append(this.element);
};