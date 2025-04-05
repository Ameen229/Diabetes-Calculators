function calculateCarbIntake() {
    const carbsPerItem = parseFloat(document.getElementById("carbsPerItem").value);
    const quantity = parseFloat(document.getElementById("quantity").value);
  
    if (isNaN(carbsPerItem) || isNaN(quantity) || carbsPerItem < 0 || quantity < 0) {
      document.getElementById("result").innerText = "Please enter valid positive numbers.";
      return;
    }
  
    const totalCarbs = carbsPerItem * quantity;
    document.getElementById("result").innerText = `Total Carbohydrates: ${totalCarbs.toFixed(1)} grams`;
  }
  
  function showExample() {
    alert(
      "🍌 Example:\n\nYou're eating 2 bananas.\nEach banana has 27g of carbs.\n\nEnter:\n- Carbs per item: 27\n- Quantity: 2\n\nResult:\nTotal Carbs = 27 × 2 = 54 grams."
    );
  }
  