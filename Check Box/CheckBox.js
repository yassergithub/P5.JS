// Create a variable for checkbox object
var checkbox;

// Hello
// Create a function to change the background-color
function change_bg() {
	// Set dark color if box is checked
	if (this.checked()) {
		background("darkgreen");
	}
	// Set light color if box is unchecked
	else {
		background("lightgreen");
	}
}

function setup() {
	// Create a canvas
	createCanvas(400, 400);
	// Set the background-color
	background("lightgreen");
	// Create a checkbox object
	// Initially unchecked
	checkbox = createCheckbox('Dark Background', false);
	// Position the checkbox object
	checkbox.position(160, 200);
	// Call the change_bg() function when the box
	// is checked or unchecked
	checkbox.changed(change_bg);
}
