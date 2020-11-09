var massTom = 8;
var heightTom =9;
var massJerry = 45;
var heightJerry =10;
var BMITom = massTom / heightTom ** 2 ; 
var BMIJerry = massJerry / (heightJerry * heightJerry);
var tomHigherBMI = BMITom > BMIJerry;
console.log(BMITom, BMIJerry);
console.log(`Is Tom's BMI higher than Jerry's? ${tomHigherBMI}`);

