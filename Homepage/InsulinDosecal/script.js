function calculateDose() {
    let currentBloodSugar = parseFloat(document.getElementById("currentBloodSugar").value);
    let targetBloodSugar = parseFloat(document.getElementById("targetBloodSugar").value);
    let correctionFactor = parseFloat(document.getElementById("correctionFactor").value);
    let totalCarbs = parseFloat(document.getElementById("totalCarbs").value);
    let carbRatio = parseFloat(document.getElementById("carbRatio").value);

    if (isNaN(currentBloodSugar) || isNaN(targetBloodSugar) || isNaN(correctionFactor) || isNaN(totalCarbs) || isNaN(carbRatio)) {
        alert("Please enter all values correctly.");
        return;
    }

    let correctionDose = (currentBloodSugar - targetBloodSugar) / correctionFactor;
    let carbDose = totalCarbs / carbRatio;
    let totalDose = correctionDose + carbDose;

    document.getElementById("correctionDose").value = correctionDose.toFixed(1);
    document.getElementById("carbDose").value = carbDose.toFixed(1);
    document.getElementById("totalDose").value = totalDose.toFixed(1);
}

document.getElementById("howToUse").addEventListener("click", function () {
    alert("Enter your current blood sugar, target, correction factor, carb intake, and ratio to calculate your insulin dose.");
});
function calculateDose() {
    let currentBloodSugar = parseFloat(document.getElementById("currentBloodSugar").value);
    let targetBloodSugar = parseFloat(document.getElementById("targetBloodSugar").value);
    let correctionFactor = parseFloat(document.getElementById("correctionFactor").value);
    let totalCarbs = parseFloat(document.getElementById("totalCarbs").value);
    let carbRatio = parseFloat(document.getElementById("carbRatio").value);

    if (isNaN(currentBloodSugar) || isNaN(targetBloodSugar) || isNaN(correctionFactor) || isNaN(totalCarbs) || isNaN(carbRatio)) {
        alert("Please enter all values correctly.");
        return;
    }

    let correctionDose = (currentBloodSugar - targetBloodSugar) / correctionFactor;
    let carbDose = totalCarbs / carbRatio;
    let totalDose = correctionDose + carbDose;

    document.getElementById("correctionDose").textContent = correctionDose.toFixed(1);
    document.getElementById("carbDose").textContent = carbDose.toFixed(1);
    document.getElementById("totalDose").textContent = totalDose.toFixed(1);
}

document.getElementById("howToUse").addEventListener("click", function () {
    alert(
        "How to Use:\n" +
        "1. Enter your Current Blood Sugar (e.g., 210 mg/dL).\n" +
        "2. Enter your Target Blood Sugar (e.g., 130 mg/dL).\n" +
        "3. Enter your Correction Factor (e.g., 50).\n" +
        "4. Enter your Total Carbs (e.g., 75g).\n" +
        "5. Enter your Carb Ratio (e.g., 10).\n" +
        "6. Click 'Calculate' to get your insulin dose."
    );
});
