// The Nature of Code
// Daniel Shiffman - modified by angelo
// http://natureofcode.com


// An array to keep track of how often random numbers are picked
var randomCounts = [];
var total = 30;

function setup() {
  createCanvas(640,360);
  for (var i = 0; i < total; i++) {
    randomCounts[i] = 0;
  }
}

function draw() {
  background(127);

  var index = floor(random(total));  // index = 0 -> 19 (total=20)

  // // my insertions
  // // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
  var index = randomGaussian();
  var sd = 5;                             // Define a standard deviation
  var mean = total/2;                     // Define a mean value (middle of the screen along the x-axis)
  index =floor(( index * sd ) + mean);    // Scale the gaussian random number by standard deviation and mean

  // console.log(index);
  randomCounts[index]++;

  // Draw a rectangle to graph results
  stroke(0);
  strokeWeight(2);
  fill(255);

  var w = width/randomCounts.length;

  for (var x = 0; x < randomCounts.length; x++) {
    rect(x*w,height-randomCounts[x],w-1,randomCounts[x]);
  }
}