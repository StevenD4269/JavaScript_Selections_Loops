console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// the let sets the lower limit to 1 and upper limit to 100, and increments +1 every loop. Dividing by 2 means there will be no remainder
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  } else {
    continue;
  }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(i);
  }
}

// Exercise 3
console.log("EXERCISE 3:\n==========\n");
// DO exercise 1
let i = 0;
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  } else {
    continue;
  }
}
// DO WHILE of exercise 2
do {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(i);
  }
  i++;
} while (i <= 100);

// Exercise 4
let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (let i = 0; i <= n; i++) {
  // n is a number between 100-the upper limit. value is any number between 0-500. so n != 0-99. i = 0.
  // generate a random number value, a random upper limit n, and then goes through numbers from 0 to n using a for loop
  if (i === value) {
    console.log("Found value!");
    //   If found within the loop, it prints "Found value!".
    break; // exits the loop
  } else if (i === n) {
    console.log("Did not find value");
    //   If the value is not found after going through all numbers, it prints "Did not find value".
    //   else if were at the end of the loop and didnt find anything
  }
}
