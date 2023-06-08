//Abril Zaragoza-Palos
//N220
//2.29.2018

let blockArray = [];
let x = 40;
let y = 50;
let counter = 0;
let score = 0

let bounce = new Ball();
let paddle = new Paddle();

function Block() {
this.width = 80;
this.height = 30;
this.blockX = x;
this.blockY = y;
this.create = function(){
    rect(this.blockX, this.blockY, this.width, this.height);
    }
} 
function Paddle() {
    this.rectWidth = 80;
    this.rectHeight = 30;
    this.Xpos = 70;
    this.Ypos = 600;
    this.update = function(){
        if (keyIsDown(LEFT_ARROW)){
            this.Xpos = this.Xpos - 7;
        }
        if (keyIsDown(RIGHT_ARROW)){
            this.Xpos = this.Xpos + 7;
        }
        push();
        fill(160, 25, 0);
        rect( this.Xpos , this.Ypos, this.rectWidth, this.rectHeight);
        pop();
    }
}
function Ball() {
    this.cirShiftX = 5;
    this.circleX = 50;
    this.cirShiftY = 5;
    this.circleY = 500;
    this.move = function(){
   
        if (this.circleX < 0 || this.circleX > 800) {
            this.cirShiftX = this.cirShiftX * -1;
        }
        if (this.circleY < 50 || this.circleY > 700) {
            this.cirShiftY = this.cirShiftY * -1;
        }
        let hit = collideRectCircle(paddle.Xpos,paddle.Ypos,80,30,bounce.circleX,bounce.circleY,20);
        if(hit){
            console.log("true");
            this.cirShiftY = this.cirShiftY * -1;
        }
        for(i=0; i<blockArray.length; i++){
            let crush = collideRectCircle(blockArray[i].blockX, blockArray[i].blockY, blockArray[i].width, blockArray[i].height, bounce.circleX, bounce.circleY, 20);
            if(crush){
                blockArray.splice(i,1);
                this.cirShiftY = this.cirShiftY * -1;
                score = score + 1;
            } else{blockArray[i].create();}
                
        }
        this.circleX = this.circleX + this.cirShiftX;
        this.circleY = this.circleY + this.cirShiftY;
        push();
        fill(160, 25, 0);
        circle( this.circleX, this.circleY, 20);
        pop();
    }
}
function setup(){
    background(0);
    createCanvas(800,700);
    for(i=0; i<4; i++){
        for(counter = 0; counter < 8; counter++){
            let square = new Block();
            blockArray.push(square);
            x += 90;
        }
        x = 40;
        y += 40;
    }
    
}

function draw(){
    background(0);
    paddle.update();
    bounce.move();
    push();
    fill(160, 25, 0);
    textSize(20);
    text("Score:"+ score, 30, 30);
    pop();
    if (score == 32){
        fill(255,255,255);
        textSize(50);
        text("GAME OVER!", 400, 400);
    }
}
