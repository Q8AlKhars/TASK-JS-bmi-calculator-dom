function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  // ^2 or ** 2 for square التربيع (الأس)

  const heightInMeters = height / 100;
  const BMI = weight / (heightInMeters ** 2 );
  
  let alertMessage = `your bmi is: ${BMI} \n`;
  if (BMI < 18.5) {
   alertMessage += "Underweight";
  } else if (BMI >= 18.5 && BMI <= 24.9 ) {
    alertMessage += "Healthy Weight";
  } else if (BMI >= 25.0 && BMI <= 29.9 ) {
    alertMessage += "Overweight";
  } else if (BMI > 30.0 ) {
    alertMessage += "Obesity";
  }
  alert(alertMessage);
}