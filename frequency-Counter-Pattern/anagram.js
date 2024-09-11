// Given two strings, write a function to determine if the second string is an
// anagram of the first. An anagram is a word, phrase, or name formed by
// rearranging the letters of another, such as cinema, formed from iceman.
//validAnagram('iceman', 'cinema'); // true
//validAnagram('aaz', 'zza'); // false
//validAnagram('texttwisttime', 'timetwisttext'); // true
//validAnagram('rat', 'car'); // false

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let frequencyCounter1 = new Map();
    let frequencyCounter2 = new Map();

    for(let element of str1){
        frequencyCounter1.set(element,(frequencyCounter1.get(element) || 0) + 1);
    }
    for(let element of str2){
        frequencyCounter2.set(element,(frequencyCounter2.get(element) || 0) +1 );
    }

   for(let [key,value]  of frequencyCounter1){
    if((!frequencyCounter2.has(key)) || (frequencyCounter2.get(key) !== value)){
        return false;
    }
   }

    return true;

}
console.log(validAnagram('iceman', 'cinema')); 