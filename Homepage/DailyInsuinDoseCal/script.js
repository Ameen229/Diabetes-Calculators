function calculateInsulin() {
    const breakfast = parseFloat(document.getElementById("breakfast").value) || 0;
    const lunch = parseFloat(document.getElementById("lunch").value) || 0;
    const snacks = parseFloat(document.getElementById("snacks").value) || 0;
    const dinner = parseFloat(document.getElementById("dinner").value) || 0;
    const bedtime = parseFloat(document.getElementById("bedtime").value) || 0;
    const remark = parseFloat(document.getElementById("remark").value) || 0;
  
    const totalInsulin = breakfast + lunch + snacks + dinner + bedtime + remark;
    document.getElementById("result").innerText = `Total Insulin: ${totalInsulin} units`;
  }
  
  function calculateCorrection() {
    const breakfast = parseFloat(document.getElementById("breakfast").value) || 0;
    const lunch = parseFloat(document.getElementById("lunch").value) || 0;
    const snacks = parseFloat(document.getElementById("snacks").value) || 0;
    const dinner = parseFloat(document.getElementById("dinner").value) || 0;
    const bedtime = parseFloat(document.getElementById("bedtime").value) || 0;
    const remark = parseFloat(document.getElementById("remark").value) || 0;
    const totalInsulin = breakfast + lunch + snacks + dinner + bedtime + remark;
  
    if (totalInsulin <= 0) {
      document.getElementById("correctionResult").innerText = "Please enter your insulin doses to compute the correction factor.";
      return;
    }
  
    const correctionFactor = 1800 / totalInsulin;
    const currentBG = parseFloat(document.getElementById("currentBG").value) || 0;
    const targetBG = parseFloat(document.getElementById("targetBG").value) || 0;
  
    let correctionDose = 0;
    if (currentBG > targetBG) {
      correctionDose = (currentBG - targetBG) / correctionFactor;
    }
  
    let output = `Total Daily Insulin: ${totalInsulin} units\n`;
    output += `Correction Factor: ${correctionFactor.toFixed(2)} mg/dL per unit\n`;
    output += correctionDose > 0
      ? `Correction Dose: ${correctionDose.toFixed(2)} units`
      : "No correction needed.";
  
    document.getElementById("correctionResult").innerText = output;
  }
  
  function showExample() {
    document.getElementById("popup").style.display = "flex";
  }
  
  function hideExample() {
    document.getElementById("popup").style.display = "none";
  }
  