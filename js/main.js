//Question 5

var testOne = "What kind of variable is this?";
//String

var testTwo = 256;
//Number

var testThree = ["what", 'kind','of','variable','am', 'I?'];
//array

var testFour = false;
//boolean

var testSix = 128;
// Number

var testSeven = "Who am I?";
//String

var testEight = true;
//boolean

var testNine = ["what kind of variable is this?", 2, 5, 19];
//array

//Question 6

var string1 = "Hello ";
var string2 = "my name is ";
var string3 = "your name here";
var combinedStrings = string1 + string2 + string3;
console.log (combinedStrings);
//Hello my name is your name here

//Question 7

var num1 = 8;
var num2 = 52;
var num3 = 60;
var combinedNumbers = num1 + num2 + num3;
console.log(combinedNumbers);
//120


var mixedNum1 = 10;
var mixedString1 = "ten";
var mixedNum2 = "10";
var mixedConcatenation = mixedNum1 +mixedNum2 + mixedString1;
console.log(mixedConcatenation);
//101010

//Question 8

//Given these variables

  var num4 = 5;
  var num5 = 0;

//What do you expect the console message to be?

if (num4 > 1) {
  console.log ("Num4 is greater than 1");
}  else {
  console.log ('Num4 is NOT greater than 1');
};
//prints 'Num4 is greater than 1'


//Question 9

//Given these variables

  var num4 = 5;
  var num5 = 0;

// what do you expect that console message to be?

  if (num4 < num5 || num4 === num5 && true){
  console.log('If statement ran!');
} else {
  console.log('Else statement ran');
};
//prints "Else statement ran"


//Given these variables

  var num4 = 5;
  var num5 = 0;

//what do you expect that console message to be?

  if (num4 < num5 || num4 === num5) {
    console.log('If statment ran!');
  } else if (num5 === "0" || true) {
    console.log("Else if statement ran");
  } else {
    console.log('Else statement ran');
  };
//prints "Else if statement ran"


//Question 10

//Give these variables

  var array2 = [1,3,5,7,9];
  var total = 0;

//what do you expect console message to be?

  for (var i = 0; i < array2.length; i++) {
    total = total + array2[i];
  };
  console.log(total);

//console logs "25"

//Given these variables

  var array3 = [11,33,55,77,99];
//what do you expect the console message to be?

    for (var i = 0; i < array3.length; i++) {
      if(array3[i] >= 55 || array3[i] <= 100){
        console.log(array3, array3[i]);
      };
    };

//prints
//[11, 33, 55, 77, 99] 11
//[11, 33, 55, 77, 99] 33
//[11, 33, 55, 77, 99] 55
//[11, 33, 55, 77, 99] 77
//[11, 33, 55, 77, 99] 99

// Question 10

//Given this function

function testStuff (a,b) {
  if(a > 25 && b < 100) {
    console.log(a + " is greater than 25 and " + b + "is less than 100");
  } else {
    console.log(a + " is NOT greater than 25 and " + b + "is NOT less than 100");
  };
};
  testStuff(10,101);
// prints "10 is NOt greater than 25 and 101 is not less than 100"
  testStuff(26,99);
// prints "26 is greater than 25 andn 99 is less than 100"
  testStuff(100,25);
//prints "100 is greater than 25 and 25 is less than 100"

//Given this function
  function testStuff2(c,d) {
    if (c === 25) {
      console.log(c + " is equal to 25");
    } else if (d <= 100){
      console.log(d + " is less than or equal to 100");
    } else {
      console.log('Neither if or else statement ran');
    };
  };
  testStuff2(26, 101);
//prints 'neither if or else statement ran'
  testStuff2(25,99);
//prints "25 is equal to 25"
  testStuff2(102,24);
//prints "24 is less than or equal to 100"  
