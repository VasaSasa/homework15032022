// alert("Ahojky")

//alert("Ahojky")



//strings     "$" => right alt + 36, "~" => alt + 1, "`" => right ALt + 96,

//let number1 = 10;
//let numebr2 = 20;

//console.log(`There are two numbers: ${number1} nad ${numebr2} :-).`)


// „ XYZ“  Alt+0132 -right , Alt+0147 left


/*let i = 0;
while (i < 10) {
    console.log("hodnota: ", i);
    i = i + 1;
}*/

/*
let i = 1;
while (i <10) {
    console.log("Ahoj");
    i += 1;              //  ( i++; i = i + 1; i += 1 )
}
*/

/* task 1
let user = Number(prompt("How many times would you like to show „#“?"));

if (user == 0) {
    console.log("Nothing to show!!");
} else { 
    user >= 1;
    while(user = 100) {
        console.log(`# ${user}x`);
        user++;
    }
}


*/

// 1. Display all numbers from 1 to 100, which 
//are multiples of the 
//number specified by the user. 

/*for (let i = 1;i <= 10;i = i + 1){
    console.log(7 * i); 
}*/

/*let userNumber = Number(prompt("Write down number which want to use for multiplication."));

for (let i = 1;i <= 100; i = i + 1) {
    console.log(`${i} x ${userNumber} = ${i * userNumber}`);
}*/


//2. Output each 4th element from the user-specified range. The user 
//specifies the minimum and maximum range values. 
  
/*
let userMinNumber = Number(prompt("Enter number for minimum value of range: "));
let userMaxNumber = Number(prompt("Enter number for maximum value of range: "));
for (let i = userMinNumber - 1; i <= userMaxNumber; i = i + 4) {
    console.log("4th element is " + i);
}
*/

//Request a number and check whether it is prime. A prime 
//number is divided only by itself and by one without a remainder.


//let userPrimeNum = Number(prompt("Enter whole number: "));

/*
if (userPrimeNum / userPrimeNum == 1 && userPrimeNum / 1 == userPrimeNum) {
    console.log(`Entered number: ${userPrimeNum} is Prime Number.`);
} else {
    console.log(`Entered number: ${userPrimeNum} is not Prime Number.`);
}

console.log(Math.PI);   // vypíše 3.14..........

*/



/*
let userCommand = Number(prompt("How many times would you like to show „#“ ?"));

while (userCommand > 0) {
    console.log(" # ");
    userCommand --;   // userCommand -= 1; , userCommand = userCommand - 1;
}

*/


/*
let userNumber = Number(prompt("Enter number."));

while (userNumber >= 0) {
    console.log(userNumber);
    userNumber --;
}

*/


let userWish = prompt("Would you like to start to count?")

while (userWish == "yes") {
    let firstNum = Number(prompt("Enter first number."));
    let secondNum = Number(prompt("Enter second number."));
    let sign = prompt("Enter mathematical operation");
    if (sign == "+") {
        console.log(firstNum + secondNum);
    } else if (sign == "-" ) {
        console.log(firstNum - secondNum);
    } else if (sign == "*") {
        console.log(firstNum * secondNum);
    } else if (sign == "/" && secondNum != 0) {
        console.log(firstNum / secondNum);
    } else if (sign == "/" && secondNum == 0) {
        console.log("You can not divide by zero!!!")
    } else {
        console.log("You did not enter mathematical operation.");
    }
    userWish = prompt("Would you like to proceed?")
}

console.log("End of program")

