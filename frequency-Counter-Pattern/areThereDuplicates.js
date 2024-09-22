// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

function areThereDuplicates(...args){
    if(!args.length) return false;

    const obj1 = new Map();

    for(let element of args){
        obj1.set(element,(obj1.get(element) || 0) + 1)
    }
 for(let [c,v] of obj1){
    if(obj1.get(c) >1) return true;
 }
   return false;
    
    
}