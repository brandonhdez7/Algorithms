

//functions: push, pop, peek, length

//palindrome

let letter = [];

let word = 'racecar';

let reverseWord = ''

//put letter words into stacks

for(let i = 0; i < word.length; i++){
    letter.push(word[i]);
}

//pop of the stack in reverse order

for (let i = 0; i < word.length; i++){
    reverseWord += letter.pop();
}

if(reverseWord === word){
    console.log( word + " is a palindrome")
}else{
    console.log( word + " is not a palindrome");
}

