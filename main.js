
// 1. JavaScript  Program to print natural numbers from 1 to n.

var n = 50;

for (var i = 1; i <= n; i++) {
  document.write(i+ ' ');
}

document.write('<br>');
// 2. JavaScript  program to print all natural numbers in reverse from n to 1 using for loop.

var n = 0;

for (var i = 50; i > n; i--){
    document.write(i + " ");
}
document.write('<br>');

// 4. JavaScript program to find the sum of all natural numbers between 1 to n using for loop.

var n = 50;
var sum = 0;

for (var i = 1; i <= n; i++){
    sum = sum + i;
}
document.write('Sum = ' + sum + "<br>");

// 5. JavaScript  program to input number from user and check whether the number is even or odd:

var n = 15;

for (var i = 1; i <= 10; i++){
    document.write(n + '*' + i + '=' + n * i + '<br>');
}

// 6. JavaScript  program to input a number and check positive negative or zero:

var num = 1050;
var sum = 0;
var count = 0;
var reminder = 0;

while (num != 0) {
    reminder = num % 10;
    sum = sum + reminder;
    num = parseInt(num / 10);
    count++;
}
document.write('Sum = ' + sum);
document.write('<br>');
document.write("Total Digit = " + count);
document.write('<br>');


var fruits = ['banana ', ' apple ', ' wood apple ', ' jack fruit'];

document.write(fruits+'<br>');
document.write(fruits[3] + '<br>');

var std = { name: 'Jisan', age: 22, cgpa: 3.51 };

document.write(std.name + ' ');
document.write(std.age + ' ');
document.write(std.cgpa + '<br>');
