function setup() {
	createCanvas(windowWidth-10, windowHeight-10);
  background(127);
  noStroke();
}

function draw() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  fill(r, g, b, 80);

  if (mouseIsPressed) {
    // Get gaussian random number, mean 0 and std dev 1.0
    spread = new createVector(randomGaussian(), randomGaussian()) 
    mouse = new createVector(mouseX, mouseY)

    // Define a standard deviation
    var sd = 40;    
    // Scale the gaussian random number by std dev
    spread.x = floor((spread.x * sd));
    spread.y = floor((spread.y * sd));
      
  	// add random spread delta to mouse x/y
    spread.add(this.mouse);

  	ellipse((spread.x), (spread.y), 15);
  }
}

// original version without vectors
// function draw() {
//   var r = random(255);
//   var g = random(255);
//   var b = random(255);
//   fill(r, g, b, 80);

//   if (mouseIsPressed) {
//     // need to add a random delta to x/y
//     // Get gaussian random number, mean 0 and std dev 1.0
//     var xSpread = randomGaussian();
//     var ySpread = randomGaussian();
//     // Define a standard deviation
//     var sd = 50;    
//     // Scale the gaussian random number by std dev
//     xSpread = floor((xSpread * sd));
//     ySpread = floor((ySpread * sd));
    
//     // console.log("mX : " + mouseX + " xS : " + xSpread);
//     // console.log("xS + mX :" + (xSpread + mouseX));
      
//     ellipse((mouseX + xSpread), (mouseY + ySpread), 15);
//   }
// }