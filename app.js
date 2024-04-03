console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// the let sets the lower limit to 1 and upper limit to 100, and increments +1 every loop. Dividing by 2 means there will be no remainder
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    // i has to be odd. so === would be even.  !== would make it odd
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZBUZZ", i);
  } else if (i % 3 === 0) {
    console.log("FIZZ", i);
  } else if (i % 5 === 0) {
    console.log("BUZZ", i);
  }
}

// Exercise 3
console.log("EXERCISE 3:\n==========\n");
let iterator = 1;
while (iterator <= 100) {
  if (iterator % 3 === 0 && iterator % 5 === 0) {
    console.log("FIZZBUZZ", iterator);
  } else if (iterator % 3 === 0) {
    console.log("FIZZ", iterator);
  } else if (iterator % 5 === 0) {
    console.log("BUZZ", iterator);
  }
  iterator++;
}

iterator = 1;
do {
  if (iterator % 3 === 0 && iterator % 5 === 0) {
    console.log("FIZZBUZZ", iterator);
  } else if (iterator % 3 === 0) {
    console.log("FIZZ", iterator);
  } else if (iterator % 5 === 0) {
    console.log("BUZZ", iterator);
  }
  iterator++;
} while (iterator <= 100);

// Exercise 4
console.log("EXERCISE 4:\n==========\n");
let value = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (let i = 0; i <= n; i++) {
  // n is a number between 100-the upper limit. value is any number between 0-500. so n != 0-99. i = 0.
  // generate a random number value, a random upper limit n, and then goes through numbers from 0 to n using a for loop
  if (i === value) {
    console.log("Found value!");
    //   If found within the loop, it prints "Found value!".
    break; // exits the loop because we found what we wanted
  } else if (i === n) {
    console.log("Did not find value");
    //   If the value is not found after going through all numbers, it prints "Did not find value".
    //   else if when the value is at the end of the loop and the loop didnt find it
  }
}

console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for (let i = start; i < end; i++) {
  if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
    console.log("FIZZBUZZ", i);
  } else if (i % 3 === 0) {
    console.log("FIZZ", i);
  } else if (i % 5 === 0) {
    console.log("BUZZ", i);
  }
}
console.log("fizzDivisor", fizzDivisor);
console.log("buzzDivisor", buzzDivisor);
