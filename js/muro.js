// function Muro(top, left, speed) {
//     this.top = top
//     this.left = left
//     this.speed = speed;
// }
 
// Muro.prototype.drawMuros = function () {
//     muro = document.createElement('div')
//     $(".gameContainer").append(muro);
//     $(muro).addClass("muro");
//     $(muro).css({
//         "top": this.top,
//         "left": this.left
//     });

// }
// Muro.prototype.move = function () {
//     this.left += this.speed;
//     this.muro.css({
//         top: this.top,
//         left: this.left,
//         position: "absolute"
//     });

//     if (this.left >= $(“.gameContainer”).width() || this.left <= 0) {
//         this.speed *= -1;
//     }
// };



//css("propertyname","value");
function Muro(x, y, speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.element = $("<div>").attr("class","muro");
    this.element.css({top:this.y, left:this.x, position:"ansolute"});
    $(".gameContainer").append(this.element);
   }
   
   Muro.prototype.move = function(){
    this.x += this.speed;
    this.element.css({top:this.y, left:this.x, position:"relative"});
   
    if(this.x >= $(".gameContainer").width() || this.x <= 0){
      this.speed *= -1;
    }
   };