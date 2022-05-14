
function setup() {
  createCanvas(400,400);
}

// Create a draw function
  function draw() {
  background(220);

 let a = 30 ;
 let x = sqrt(a);

 // Set the size of text 
    textSize(16); 
       
    // Set the text color 
    fill(color('red')); 
       
 text("Square root of 25 is: " + x, 50, 30);
  
}