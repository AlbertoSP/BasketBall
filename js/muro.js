function Muro(top, left) {
    this.top = top
    this.left = left
}

Muro.prototype.drawMuros = function () {
    muro = document.createElement('div')
    $(".gameContainer").append(muro);
    $(muro).addClass("muro");
    $(muro).css({
        "top": this.top,
        "left": this.left
    });

}
Muro.prototype.move = function () {
    
    3
    
}


//css("propertyname","value");