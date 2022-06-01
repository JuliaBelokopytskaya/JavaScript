//exercise 4***
let age_2 = 18;
let age_3 = 60;
const checkAgeBrowser = function(age){
    if (Number(age) && age > 0)
    {
        if(age < age_2){
            alert(`You don't have access cause your age is ${age} It's less then`);
        }
        else if((age >= age_2) && (age < age_3)){
            alert("Welcome !");
        }
        else if(age >= age_3){
            alert("Keep calm and look Culture channel");
        } 
        else{
            alert("Technical work");
        }
    }
    else{
        alert("Age isn't a type of number");
    }
}
let age = prompt("Введите ваш возраст");
checkAgeBrowser(age);
