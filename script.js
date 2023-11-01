function volume_sphere() {

  let radius = parseFloat(document.getElementById("radius").value);

  if (isNaN(radius) || radius <= 0) {
    document.getElementById("volume").value = "NaN";
    return; // Exit the function
  }


 const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

	const formattedVolume = volume.toFixed(4);


    document.getElementById("volume").value = formattedVolume;
}


document.getElementById('MyForm').onsubmit = function (event) {
  event.preventDefault(); 
  volume_sphere(); 
};
