// Vowel Balance
// Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

// The string can contain any characters.
// The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
// If there's an odd number of characters in the string, ignore the center character.

function isBalanced(s) {
  // console.log(s)
  // s is a string
  // get the length of string
  const length = s.length;
  // console.log(length)
  // get half
  const half = length / 2;
  // console.log(half)
  // split into two
  const splitA = s.slice(0, half);
  const splitB = s.slice(Math.ceil(half));
  // console.log(splitA, splitB)
  // make an array
  const arrayA = splitA.split('');
  const arrayB = splitB.split('');
  // console.log(splitA.split(""));
  // console.log(arrayA)
  const regex = /[a|e|i|o|u]/i;
  const mappA = [];
  const mappB = [];
  arrayA.map((x) => {
    if (regex.test(x)) {
      // console.log(x)
      return mappA.push(x);
    }
  });

  arrayB.map((x) => {
    if (regex.test(x)) {
      // console.log(x)
      return mappB.push(x);
    }
  });

  console.log(mappA.length);
  console.log(mappB.length);

  const a = mappA.length;
  const b = mappB.length;

  if (a === b) {
    return true;
  }
  return false;

  // const vowelsA = arrayA.filter()
  // console.log(vowelsA)

  //function regexTest(letter, array) {
  //   if (regex.test(letter)) {
  //   array.push(letter)
  // }
  //  return array
  // }
  //const vowelArray = [];
  //splitA.map((x) => {
  // regexTest(x, vowelArray)
  // })
  //console.log(vowelArray)
  //const arrayA = splitA.split(regex)
  //console.log(arrayA)
  // const arrayAV = arrayA.forEach((x) => regexTest(x))
  // const arrayB = splitB.split("")
  // console.log(arrayA.length, arrayB.length )
  // console.log(arrayAV.length)
  // if (arrayA.length
  // !== arrayB.length) {
  //  return false
  //} return true
  // count how many vowels
  // const vowelsA = splitA.map((x) => x.matchAll(regex))
  // console.log(vowelsA)
}

// The slice() method extracts a part of a string.
// The slice() method returns the extracted part in a new string.
// The slice() method does not change the original string.
// The start and end parameters specifies the part of the string to extract.
// The first position is 0, the second is 1, ...
// A negative number selects from the end of the string.

// The matchAll() method matches a string against a regular expression **
// The matchAll() method returns an array with the matches.
// The matchAll() method returns null if no match is found.

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// The exec() method tests for a match in a string.
// If it finds a match, it returns a result array, otherwise it returns null.

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.

isBalanced('Lorem Ipsum');
