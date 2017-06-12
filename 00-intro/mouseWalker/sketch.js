// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var walker;

function setup() {
  createCanvas(640,360);
  walker = new Walker();
  background(127);
}

function draw() {
  // walker.step();
  walker.nextStep();
  walker.render();
}

function Walker() {
  this.x = width/2;
  this.y = height/2;

  this.render = function() {
    stroke(0);
    point(this.x,this.y);
  };

  this.step = function() {
    var choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  };

  this.nextStep = function() {
    if (random() > 0.5) {
      var stepx = random(-1,1);
      var stepy = random(-1,1);
    } else {
      var stepx = 1;
      var stepy = 1;
      if (this.x > mouseX) {
        stepx = -1;        
      }
      if (this.y > mouseY) {
        stepy = -1;        
      }
    }
    this.x += stepx;
    this.y += stepy;
    console.log(stepx);
    this.x = constrain(this.x,0,width-1);
    this.y = constrain(this.y,0,height-1);
  }

}
