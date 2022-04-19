


function algo(string){

let array = Array.from(string);
let words = string.split(" ");
console.log(string.length);
console.log(words.length);

var count = 0;
let vowels = ['a','e','o','i','u'];

for (var i =0; i < array.length; i++){
  if (vowels.includes(array[i]) === true){
 count++;
  }

}

console.log("number of vowels are :",count);

}


var  sentence = "this is algorithm project"

algo(sentence);