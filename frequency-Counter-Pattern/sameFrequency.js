// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();
    if(str1.length !== str2.length) return false;
    const obj1 = new Map();
    const obj2 = new Map();

    for(let element of str1){
        obj1.set(element,(obj1.get(element)|| 0) +1);
    }
    for(let element of str2){
        obj2.set(element,(obj2.get(element)||0 )+ 1);
    }

    for(let [key,value] of obj1){
      if((!obj2.has(key)) || (obj2.get(key) !== value)){
          return false
      }
    }
    return true;
    }