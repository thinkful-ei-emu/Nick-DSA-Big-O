// #1 
// 1. O(1)
// 2. O(n)

// #2
// O(1) the intructions of the algorithm are run only one time.

// #3
// O(n^2) this is polynomial operation because it has a nested loop.

// #4 
// O(n) because for each input the operation must be run once.

// #5 
// O(n) because in the worst case this function will have to look at each item in the array.

// #6 
// O(n^2) because for each item in the array the array will be looped through according to the entire length of the array.

// #7
// This algorithm computes the fibonacci sequence with a zero at the beggining.
// The time complexity is O(n) because each input must be looked at once.

// #8 
// O(logn) because each time the function runs it cuts the data to be searched in half.

// #9 
// This algorithm has a time complexity of O(1) because it will only run the instructions one time.

// #10
// This algorithm checks if a number is divisible by factors of two and greater than 1. 
// The big O for this algorithm is O(n) because it has one for loop.


// #11
function TOH(n, a, c, b) {

  if (n >= 1) {
    // console.log('Before',a, c, b);
    TOH(n - 1, a, b, c);
    print(a, c);
    // console.log('After',a, c, b);
    TOH(n - 1, b, c, a);
  }
}

function print(S, D) {
  console.log(`${S} to ${D}`);
}

// TOH(4, 'a', 'c', 'b');

// #12

function countSheep(num) {

  for (let i = num; i > 0; i--) {
    console.log(`${i}: Another sheep jumped over the fence`);
  }

  console.log('All sheep jumped over the fence');
}

// countSheep(3);

function powerCalculator(base, exp) {

  if (exp < 0) {
    console.log('exp must be greater than or equal to 0');
  }

  let total = [];

  if (exp === 0) {
    console.log(1);
  }

  if (exp === 1) {
    console.log(base);
  }

  else {
    for (let i = exp; i > 0; i--) {
      total.push(base);
    }
  }


  console.log(total.reduce((base = base, val) => (base * val)));
}

// powerCalculator(4, 3);


function reverseString(str) {

  let strArr = str.split('');

  for (let i = 0; i < str.length/2; i++) {
    const temp = strArr[i];
    let j = str.length - i - 1;
    strArr[i] = strArr[j];
    strArr[j] = temp;
  }

  let newString = strArr.join('');

  console.log(newString);

}

// reverseString('Hello World');

function nthTriangularNumber(triNum) {

  let total = 0;

  for (let i = triNum; i > 0; i--) {
    total += i;
  }

  console.log(total);

}

// nthTriangularNumber(8);

function stringSplitter(str, char){
  let newString = str.split(char);

  newString = newString.join('');

  console.log(newString);
}

// stringSplitter('h/e/l/l/o/', '/');

function fibonacci(num){

  let fibArr = [];

  for (let i = 0; i < num; i ++){
    if (i < 2){
      fibArr.push(1);
    }
    else {
      fibArr[i] = fibArr[i -1] + fibArr[i - 2];
    }
  }

  console.log(fibArr.join(','));
}

// fibonacci(5);

function factorial(num){

  let allNums = [];

  for (let i = 0; i < num; i ++){
    allNums.push(i);
  }

  allNums[0] = num;

  let factNum = allNums.reduce((acc = 1, val) => (acc *= val));


  console.log(factNum);
}

// factorial(6);