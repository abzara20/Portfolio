//Abril Zaragoza-Palos
//N220
//4.16.2019

//my program has a circle change color every 15 frames and move to the mouse.. using a different method

//variable to contain the object from the function circles()
let newCircle = null;
//counter of frames so
let frametally = 0;

//this is my object constructor function, i have it to be able to determine position and color
function circles(){
    //default coordinates and shift values
        this.x = 80;
        this.y = 60;
        this.xshift = 15;
        this.yshift = 15;

    this.color = function(){
        //assigns random values for rgb color 
        this.colorR = Math.random() * 255;
        this.colorG = Math.random() * 255;
        this.colorB = Math.random() * 255;
        //changes the fill
        fill(this.colorR, this.colorG, this.colorB);
    }
    
    this.move = function(){
        //function that makes shape follow the mouse
        if ((this.x - mouseX) > 0){
            this.x = this.x - this.xshift;
        }
        if ((this.x - mouseX) < 0){
            this.x = this.x + this.xshift;
        }
        if ((this.y - mouseY) > 0){
            this.y = this.y - this.yshift;
        }
        if ((this.y - mouseY) < 0){
            this.y = this.y + this.yshift;
        }
        
    }
    this.creation = function() {
        //creates the circle
        circle(this.x, this.y, 10);
    }
}

function setup(){
    frameRate(60);
    createCanvas(800,600);
    //sets the variable as the object
    newCircle =  new circles();
}

function draw(){
    // has a cooler effect if background is not reset
    // background(255,255,255);

    //counts frames
    frametally++;
    if (frametally == 15){
        //when it reaches 15 frames changes fill
            newCircle.color();
        //resets counter
            frametally = 0;
        }
        //changes circle coordinates
        newCircle.move();
        //creates new circle
        newCircle.creation();
}
