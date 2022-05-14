// New update for comments Hello.
// this program to change color when pressing button.
let button;
function setup() {
  createCanvas(400, 400);
  background(0);
  button = createButton('click me');
  button.position(200, 200);
  button.mousePressed(changeBG);
}

function changeBG() {
      let val1 = random(255); // This is The RGB
      let val2 = random(255);	// This is The RGB
      let val3 = random(255);	// This is The RGB
  background(val1,val2,val3);

}
