function volume_sphere() {
  // Get the radius value from the input element and parse it as a float
  let radius = parseFloat(document.getElementById("radius").value);

  // Check if the parsed radius is a valid number
  if (isNaN(radius) || radius <= 0) {
    // alert("Invalid radius. Please provide a positive number.");
    return "Invalid radius. Please provide a positive number."; // Exit the function
  }

  // Calculate the volume of the sphere
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Update the volume input field with the result
  document.getElementById("volume").value = volume;
}

// Set the form's onsubmit event handler to call volume_sphere
document.getElementById('MyForm').onsubmit = function (event) {
  event.preventDefault(); // Prevent the form from actually submitting
  volume_sphere(); // Call your function
};
