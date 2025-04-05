document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("howToUse").addEventListener("click", function () {
      alert("How to Use (Example):\n\n🔹 Total Carbs: 60g\n🔹 Carb Ratio: 10\n🔹 Current BG: 180\n🔹 Target BG: 120\n🔹 Correction Factor: 50\n\n➡️ Insulin for Carbs = 60 / 10 = 6 units\n➡️ Correction Dose = (180 - 120) / 50 = 1.2 units\n➡️ Total = 7.2 units of insulin");
    });
  });
  
  function calculateInsulin() {
    let carbs = parseFloat(document.getElementById('carbs').value);
    let carbRatio = parseFloat(document.getElementById('carbRatio').value);
    let currentBG = parseFloat(document.getElementById('currentBG').value);
    let targetBG = parseFloat(document.getElementById('targetBG').value);
    let correctionFactor = parseFloat(document.getElementById('correctionFactor').value);
  
    if (isNaN(carbs) || isNaN(carbRatio) || isNaN(currentBG) || isNaN(targetBG) || isNaN(correctionFactor)) {
      document.getElementById('result').innerHTML = '<span style="color: red;">❌ Please enter all values correctly!</span>';
      return;
    }
  
    let insulinForCarbs = carbs / carbRatio;
    let insulinForCorrection = (currentBG - targetBG) / correctionFactor;
    let totalInsulin = insulinForCarbs + insulinForCorrection;
  
    document.getElementById('result').innerHTML = `
      <strong>🧮 Calculation:</strong><br>
      <strong>Insulin for Carbs:</strong> ${insulinForCarbs.toFixed(2)} units<br>
      <strong>Correction Dose:</strong> ${insulinForCorrection.toFixed(2)} units<br>
      <strong>Total Insulin Required:</strong> ${totalInsulin.toFixed(2)} units
    `;
  }
  