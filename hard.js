const massTom = 8;
const heightTom = 9;
const massJerry = 45;
const heightJerry = 10;

const BMITom = massTom / heightTom * heightTom;
const BMIJerry = massJerry / heightJerry * heightJerry;
console.log(BMITom, BMIJerry);


if (BMITom > BMIJerry) {
    console.log("Is Tom's BMI higher than Jerry's? false.");
}
else {
    console.log("Is Jerry's BMI higher than Tom's? true. ");
}