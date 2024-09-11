//Write a function called same, which accepts two arrays. The function should
//return true if every value in the array has it's corresponding value squared
//in the second array. The frequency of values must be the same.

//****************************** First Approach ********************************************

// function same(arr1, arr2) {
//   if (!arr1.length || !arr2.length) return false;
//   if (arr1.length !== arr2.length) return false;
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};

//   for (let element of arr1) {
//     frequencyCounter1[element] = (frequencyCounter1[element] || 0) + 1;
//   }

//   for (let element of arr2) {
//     frequencyCounter2[element] = (frequencyCounter2[element] || 0) + 1;
//   }

//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

//****************************** Second Approach ********************************************

function same(arr1, arr2) {
    if (!arr1.length || !arr2.length) return false;
    if (arr1.length !== arr2.length) return false;
   let frequencyCounter1 = new Map();
   let frequencyCounter2 = new Map();

   for(let element of arr1){
    frequencyCounter1.set(element,(frequencyCounter1.get(element) || 0) + 1);
   }
   for(let element of arr2){
    frequencyCounter2.set(element,(frequencyCounter2.get(element) || 0) + 1);
   }
   for(let [key,value] of frequencyCounter1){
    if((!frequencyCounter2.has(key**2)) || (frequencyCounter2.get(key**2) !== value)){
        return false;
    }
   }
   return true
}
console.log(same([1, 2, 3, 2], [4, 1, 9, 4]));
