//Q1 Write a program that allow to user enter number then print it
/*
var number = +window.prompt("Enter a Number : ");
if (Number(number)) {
    window.alert("Your Number is : " + number);
}
else {
    window.alert("It's not a number");
}
*/

//Q2 Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
/*
var number = +window.prompt("Enter a Number : ");
if (Number(number)) {
    if (number % 3 == 0 && number % 4 == 0) {
        window.alert("Yes");
    }
    else {
        window.alert("No");
    }
}
else {
    window.alert("It's not a number");
}
*/

//Q3 Write a program that allows the user to insert 2 integers then print the max
/*
var num1 = +window.prompt("Enter the First Number : ");
var num2 = +window.prompt("Enter the Second Number : ");
if (Number(num1) && Number(num2)) {
    if (num1 > num2) {
        window.alert("Max Number is : " + num1);
    }
    else {
        window.alert("Max Number is : " + num2);
    }
}
else {
    window.alert("It's not a number");
}
*/

//Q4 Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive
/*
var number = +window.prompt("Enter a Number : ");
if (Number(number)) {
    if (number < 0) {
        window.alert("Your Number is Negative");
    }
    else {
        window.alert("Your Number is Positive");
    }
}
else {
    window.alert("It's not a number");
}
*/

//Q5 Write a program that take 3 integers from user then print the max element and the min element
/*
var number1 = +window.prompt("Enter First Number : ");
var number2 = +window.prompt("Enter Second Number : ");
var number3 = +window.prompt("Enter Third Number : ");
if (Number(number1) && Number(number2) && Number(number3)) {
    var max = number1;
    if (number2 > max) {
        max = number2;
    }
    if (number3 > max) {
        max = number3;
    }
    var min = number1;
    if (number2 < min) {
        min = number2;
    }
    if (number3 < min) {
        min = number3
    }
    window.alert(`Maximum element = ${max}`);
    window.alert(`Minimum element = ${min}`);
}
else {
    window.alert("It's not a number");
}
*/

//Q6 Write a program that allows the user to insert integer number then check If a number is oven or odd
/*
var number = +window.prompt("Enter a Number : ");
if (Number(number)) {
    if (number % 2 == 0) {
        window.alert("Your Number is Even");
    }
    else {
        window.alert("Your Number is Odd");
    }
}
else {
    window.alert("It's not a number");
}
*/

//Q7 Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
/*
var character = window.prompt("Enter a Character : ");
switch (character) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        window.alert("Your Character is Vowel");
        break;
    default:
        window.alert("Your Character is Consonant");
}
*/

// another solution using is statement
/*
var character = window.prompt("Enter a Character : ");
if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u') {
    window.alert("Your Character is Vowel");
} else {
    window.alert("Your Character is Consonant");
}
*/

//Q8 Write a program that allows user to insert integer then print all numbers between 1 to that’s number
/*
var number = +window.prompt("Enter a Number : ");
if (Number(number)) {
    if (number > 0) {
        for (var i = 1; i <= number; i++) {
            console.log(i);
        }
    }
    else {
        window.alert("Please Enter a Positive Number");
    }
}
else {
    window.alert("It's not a number");
}
*/

//Q9 Write a program that allows userto insert integerthen print a multiplication table up to 12
/*
var number = +window.prompt("Enter a Number : ");
if (Number(number)) {
    for (var i = 1; i <= 12; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
else {
    window.alert("It's not a number");
}
*/

//Q10 Write a program that allows to user to insert number then print all even numbers between 1 to this number
/*
var number = +window.prompt("Enter a Number : ");
if (Number(number)) {
    if (number > 0) {
        for (var i = 1; i <= number; i++) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
    }
    else {
        window.alert("Please Enter a Positive Number");
    }
}
else {
    window.alert("It's not a number");
}
*/

//Q11 Write a program that take two integers then print the power
/*
var number = +window.prompt("Enter a Number : ");
var exponent = +window.prompt("Enter the Exponent : ");
if (Number(number) && Number(exponent)) {
    var result = window.alert(`${number} rasied to the power of ${exponent} = ` + number ** exponent);
}
else {
    window.alert("It's not a number");
}
*/

//Q12 Write a program to enter marks of five subjects and calculate total, average and percentage
/*
var mark1 = +window.prompt("Enter the mark for subject 1:");
var mark2 = +window.prompt("Enter the mark for subject 2:");
var mark3 = +window.prompt("Enter the mark for subject 3:");
var mark4 = +window.prompt("Enter the mark for subject 4:");
var mark5 = +window.prompt("Enter the mark for subject 5:");
if (Number(mark1) && Number(mark2) && Number(mark3) && Number(mark4) && Number(mark5)) {
    var total = mark1 + mark2 + mark3 + mark4 + mark5;
    window.alert(`Total of Marks = ${total}`);
    var average = total / 5;
    window.alert(`Average of Marks = ${average}`);
    var percentage = (total / 500) * 100;
    window.alert(`Percentage of Marks = ${percentage}`);
}
else {
    window.alert("It's not a number");
}
*/

//Q13 Write a program to input month number and print number of days in that month
/*
var month = +window.prompt("Enter the month number: ");
if (Number(month)) {
    switch (month) {
        case 1:
            window.alert("Days in month : 31");
            break;
        case 2:
            window.alert("Days in month : 28 or 29");
            break;
        case 3:
            window.alert("Days in month : 31");
            break;
        case 4:
            window.alert("Days in month : 30");
            break;
        case 5:
            window.alert("Days in month : 31");
            break;
        case 6:
            window.alert("Days in month : 30");
            break;
        case 7:
            window.alert("Days in month : 31");
            break;
        case 8:
            window.alert("Days in month : 31");
            break;
        case 9:
            window.alert("Days in month : 30");
            break;
        case 10:
            window.alert("Days in month : 31");
            break;
        case 11:
            window.alert("Days in month : 30");
            break;
        case 12:
            window.alert("Days in month : 31");
            break;
        default:
            window.alert("Enter invalid number");
    }
}
else {
    window.alert("It's not a number");
}
*/

//Q14 Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade 
/*
var mark1 = +window.prompt("Enter the mark for Physics:");
var mark2 = +window.prompt("Enter the mark for Chemistry:");
var mark3 = +window.prompt("Enter the mark for Biology:");
var mark4 = +window.prompt("Enter the mark for Mathematics:");
var mark5 = +window.prompt("Enter the mark for Computer:");
if (Number(mark1) && Number(mark2) && Number(mark3) && Number(mark4) && Number(mark5)) {
    var total = mark1 + mark2 + mark3 + mark4 + mark5;
    var percentage = (total / 500) * 100;
    if (percentage >= 90) {
        var grade = "A";
    }
    else if (percentage >= 80) {
        var grade = "B";
    }
    else if (percentage >= 70) {
        var grade = "C";
    }
    else if (percentage >= 60) {
        var grade = "D";
    }
    else if (percentage >= 40) {
        var grade = "E";
    }
    else if (percentage > 40) {
        var grade = "F";
    }
    window.alert(`Percentage = ${percentage} % and Grade = ${grade}`)
}
else {
    window.alert("It's not a number");
}
*/

//Q15 Write a program to print total number of days in month
/*
var month = +window.prompt("Enter the month number: ");
if (Number(month)) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            window.alert("Days in month : 31");
            break;
        case 2:
            window.alert("Days in month : 28 or 29");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            window.alert("Days in month : 30");
            break;
        default:
            window.alert("Enter invalid number");
    }
}
else {
    window.alert("It's not a number");
}
*/

//Q16 Write a program to check whether an alphabet is vowel or consonant
/*
var character = window.prompt("Enter a Character : ");
switch (character) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        window.alert("Your Character is Vowel");
        break;
    default:
        window.alert("Your Character is Consonant");
}
*/

//Q17 Write a program to find maximum between two numbers
/*
var num1 = +window.prompt("Enter the First Number : ");
var num2 = +window.prompt("Enter the Second Number : ");
var result;
if (Number(num1) && Number(num2)) {
    switch (true) {
        case (num1 > num2):
            result = num1;
            break;
        case (num2 > num1):
            result = num2;
            break;
        case (num1 == num2):
            result = "Two Numbers are Equal";
            break;
        default:
            result = "invaild number";
    }
    window.alert(`The Maximum number is ${result}`);
}
else {
    window.alert("It's not a number");
}
*/

//Q18 Write a program to check whether a number is even or odd
/*
var number = +window.prompt("Enter a Number : ");
switch (true) {
    case (number % 2 == 0):
        window.alert("This number is Even");
        break;
    case (number % 2 == 1):
        window.alert("This number is Odd");
        break;
    default:
        window.alert("invalid input");
}
*/

//Q19 Write a program to check whether a number is positive or negative or zero
/*
var number = +window.prompt("Enter a Number : ");
switch (true) {
    case (number == 0):
        window.alert("This number is Zero");
        break;
    case (number > 0):
        window.alert("This number is Positive");
        break;
    case (number < 0):
        window.alert("This number is Negative");
        break;
    default:
        window.alert("invalid input");
}
*/

//Q20 Write a program to create Simple Calculator
var num1 = +window.prompt("Enter the First Number : ");
var num2 = +window.prompt("Enter the Second Number : ");
var operation = window.prompt("Enter the operation you Want (+ , - , * , /) : ");
var result;
switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 != 0) {
            result = num1 / num2;
        }
        else {
            result = "Error: Division by zero is not allowed.";
        }
        break;
    default:
        result = "invalid operation.";
}
window.alert(`Result = ${result}`);