function calculateBolus() {
  const carbs = parseFloat(document.getElementById("carbs").value);
  const current = parseFloat(document.getElementById("current").value);
  const target = parseFloat(document.getElementById("target").value);
  const carbRatio = parseFloat(document.getElementById("carbRatio").value);
  const correctionFactor = parseFloat(document.getElementById("correctionFactor").value);

  if (isNaN(carbs) || isNaN(current) || isNaN(target) || isNaN(carbRatio) || isNaN(correctionFactor)) {
    document.getElementById("output").innerHTML = "Please fill all fields correctly.";
    return;
  }

  const carbInsulin = carbs / carbRatio;
  const correctionInsulin = (current - target) / correctionFactor;
  const total = carbInsulin + correctionInsulin;

  document.getElementById("output").innerHTML = `
    <strong>Total Bolus Insulin:</strong> ${total.toFixed(2)} units
  `;
}

function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}
