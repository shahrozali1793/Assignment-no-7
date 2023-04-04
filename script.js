// // // 1. Write a js program to find maximum between two numbers.
// // // function Max(num1, num2) {
// // //      if (num1 > num2) {
// // //        return num1;
// // //      } else {
// // //        return num2;
// // //      }
// // //    }
// // //    console.log(Max(5, 10)); 
// // //    console.log(Max(66,55)); 
// // // ________________________________________________________________________________________________


// // // 2. Write a js program to find maximum between three numbers.

// // // function Max(num1,num2,num3)
// // // {
// // //      if(num1>num2 && num1>num3)
// // //      {
// // //      return num1;
// // //      }
// // //      else if(num2>num1 && num2>num3)
// // //      {
// // //      return num2;
// // //      }
// // //      else if(num3>num1 && num3>num2)
// // //      {
// // //       return num3;
// // //      }
// // //      }
// // //      console.log (Max(10,55,77));
// // //      console.log (Max(17,66,150));
// // // ____________________________________________________________________________________



// // // 3. Write a js program to check whether a number is negative, positive or zero.

// // // function checkNumber (num)
// // // {
// // // if (num>0)
// // // {
// // //      console.log(num + "is a positive number")
// // // }
// // // else if (num<0)
// // // {
// // //      console.log(num + "is a negative number")
// // // }
// // // else {
// // //      console.log(num +"is a zero")
// // // }
// // // }
// // // checkNumber(44);
// // // checkNumber(-3);
// // // checkNumber(0);
// // // _________________________________________________________________________________________



// // // 4. Write a js program to check whether a number is divisible by 5 and 11 or not.

// // // function checkDivision(num) {
// // //      if (num % 5 == 0 && num % 11 == 0) {
// // //        console.log(num + " is divisible by both 5 and 11");
// // //      } else {
// // //        console.log(num + " is not divisible by both 5 and 11");
// // //      }
// // //    }
// // //    checkDivision(55);
// // //    checkDivision(25);
// // // _____________________________________________________________________________________________
   


// // // 5. Write a js program to check whether a number is even or odd.

// // // function checkEvenOdd(num)
// // // {
// // // if(num % 2==0) {
// // //      console.log(num + "is even")
// // // }
// // // else {
// // //      console.log(num + "is odd")
// // // }
// // // }
// // // checkEvenOdd(22);
// // // checkEvenOdd(87);
// // // ________________________________________________________________________________________________



// // // 6. Write a js program to check whether a year is leap year or not.

// // function checkLeapYear(year) {
// //      if (year % 4 == 0) {
// //        if (year % 100 == 0) {
// //          if (year % 400 == 0) {
// //            console.log(year + " is a leap year");
// //          } else {
// //            console.log(year + " is not a leap year");
// //          }
// //        } else {
// //          console.log(year + " is a leap year");
// //        }
// //      } else {
// //        console.log(year + " is not a leap year");
// //      }
// // }
// //    checkLeapYear(2000);
// //    checkLeapYear(2001); 
// _____________________________________________________________________________________________


 
// 7. Write a js program to check whether a character is alphabet or not.
   
// function checkAlphabet (char){
// if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")){
//     console.log(char +"is a alphabet");
// }else{
//     console.log(char+ "is not an alphabet");
// }
// }
// checkAlphabet("a");
// checkAlphabet("$");

// _____________________________________________________________________________________________



// 8. Write a js program to input any alphabet and check whether it is vowel or consonant.

// function checkVowelConsonant(alphabet){
//     if(alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "u" 
//     || alphabet == "A" || alphabet == "E" || alphabet == "I" || alphabet == "O" || alphabet=="U")
//     {
//         console.log(alphabet + "is a vowel");
//     } else{
//         console.log(alphabet +"is a consonant");
//     }
// }
// const alphabet = prompt("please Enter an alphabet");
// checkVowelConsonant(alphabet);

// ______________________________________________________________________________________________



// // 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

// function checkCharType(char) {
//         if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//           console.log(char + " is an alphabet");
//         } else if (char >= "0" && char <= "9") {
//           console.log(char + " is a digit");
//         } else {
//           console.log(char + " is a special character");
//         }
//       }
//     const char = prompt('please Enter a char:');
//     checkCharType(char);

// __________________________________________________________________________________________



// 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

// function checkCharCase(char) {
//     if (char >= "a" && char <= "z") {
//       console.log(char + " is a lowercase alphabet");
//     } else if (char >= "A" && char <= "Z") {
//       console.log(char + " is an uppercase alphabet");
//     } else {
//       console.log(char + " is not an alphabet");
//     }
//   }
// const char = prompt('please Enter a char:');
// checkCharCase(char);

// ____________________________________________________________________________________________



// 11. Write a js program to input week number and print week day.

// function checkdaynumber(week){
//     if(week == "monday" || week =="tuesday" || week =="wednesday" || week == "thursday" || week =="friday" || week == "saturday" ||week =="sunday"){
//         console.log(week +"is a day");
//     }else if(week>=1 && week<=7){
//         console.log(week+"is a number");
//     }
//     }
//      week =prompt("please Enter a day");
//     checkdaynumber(week);

// __________________________________________________________________________________



// 12. Write a js program to input month number and print number of days in that month

// const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// const monthNumber = (prompt('Enter a month number (1-12):'));

// if (monthNumber >= 1 && monthNumber <= 12) {
//   const daysInMonth = monthDays[monthNumber - 1];
//   console.log(`Month ${monthNumber} has ${daysInMonth} days.`);
// } else {
//   console.log('Invalid month number');
// }

// _________________________________________________________________________________

 // 13. Write a js program to count total number of notes in given amount.
// __________________________________________________________________________________


// 14. Write a js program to input angles of a triangle and check whether triangle is valid or not.

// const angle1 = prompt('Enter the first angle:');
// const angle2 = prompt('Enter the second angle:');
// const angle3 = prompt('Enter the third angle:');

// const sumOfAngles = angle1 + angle2 + angle3;

// if (sumOfAngles === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0) {
//   console.log('The triangle is valid.');
// } else {
//   console.log('The triangle is not valid.');
// }

// ____________________________________________________________________________________

// 15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.

// function isTriangleValid(side1, side2, side3) {
//   if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
//     console.log("The triangle is valid.");
//   } else {
//     console.log("The triangle is not valid.");
//   }
// }
// isTriangleValid(3, 4, 5);
// isTriangleValid(1, 2, 3); 
// isTriangleValid(0, 1, 1); 

// _______________________________________________________________________________________


// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following.
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

function calculateGrade(physics, chemistry, biology, mathematics, computer) {
  const totalMarks = physics + chemistry + biology + mathematics + computer;
  const percentage = (totalMarks / 500) * 100;

  let grade;

  if (percentage >= 90) {
    grade = "A";
  } else if (percentage >= 80) {
    grade = "B";
  } else if (percentage >= 70) {
    grade = "C";
  } else if (percentage >= 60) {
    grade = "D";
  } else if (percentage >= 40) {
    grade = "E";
  } else {
    grade = "F";
  }

  console.log(`Percentage: ${percentage}%`);
  console.log(`Grade: ${grade}`);
}

// Example usage:
calculateGrade(85, 75, 90, 80, 95);
// Outputs:
// Percentage: 85%
// Grade: A

calculateGrade(50, 60, 70, 80, 90);
// Outputs:
// Percentage: 70%
// Grade: C













































// 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.
// 17. Write a js program to find all roots of a quadratic equation.
// 18. Write a js program to calculate profit or loss.
// 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill