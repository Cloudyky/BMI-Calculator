document.getElementById("calculateBtn").addEventListener("click", function() {
    calculateBMI();
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert height to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").textContent = "Please enter valid values.";
    } else {
        const bmi = weight / (height * height);
        document.getElementById("result").textContent = `Your BMI: ${bmi.toFixed(2)}`;
    }
}
