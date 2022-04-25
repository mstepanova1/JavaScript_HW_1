let age_2 = 18;
let age_3 = 60;

const checkAge = function(age) {
    console.log("If your age = " + age)
    if (Number(age) || age == 0) {
        if (age < age_2) {
            console.log("You don't have access cause your age is " + age + ". It's less then " + age_2)
        } else if (age >= age_2 && age < age_3) {
            console.log("Welcome!")
        } else if (age > age_3) {
            console.log("Keep calm and look Culture channel")
        } else {
            console.log("Technical work")
        }
    } else {
        console.log("Invalid value")
    }    
} 

checkAge(0);
checkAge(17);
checkAge(18);
checkAge(61);
checkAge('qwerty');
checkAge('25');
checkAge('25ffff');

// let agePrompt = prompt('Enter age')
// checkAge(agePrompt)
