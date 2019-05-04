// function palindrome(str){
//     let reversed = str.split("").reverse().join("")
//     console.log(reversed)
//     if (reversed === str){
//         return true
//     }else{
//         return false
//     }
// }
// palindrome('eyed')

// function palindrome(str){

//     //find all the non-numeric characters
//    let reg = /[\W_]/g

//    //change all characters to lower case
//    var smallStr = str.toLowerCase().replace(reg, '')

//     let reversed = smallStr.split("").reverse().join("")
//     console.log(reversed)
//     if (reversed === smallStr){
//         return true
//     }else{
//         return false
//     }
// }
// palindrome('eye')


//palindrome

//with build in methods
function isPal(str){
    return str === str.split('').reverse().join('')
}
console.log(isPal('eye'))

//without
function pal(str){
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}
console.log(pal('eye'))





//find the longest word
function findLongestWord(str){
    let words = str.split(' ')
    let longest = '';
    for(let i= 0;i < words.length; i++){
        if(words.length > longest.length)
            longest = words;
        // console.log(words[i])
    }
    // return longest.length
    console.log(longest.length);
}

findLongestWord('The qsuick brown fox jumped over the lazy dog')





//title case
function titleCase(str){
    let word = str.toLowerCase().split(" ")
    // console.log(word)
    for(let i = 0; i < word.length; i ++){
        word[i] = word[i][0].toUpperCase() + word[i].slice(1)
    }
    console.log(word.join(" "));
}
titleCase('i\'m a little tea pot')


//example slice get the rest of the name staring at index 1
let name = 'Jonathan';
console.log(name.slice(1)) //onathan





//factorialize
//exaplain: 5*4*3*2*1 = 120;
function factorialize(num){
    let result = 1;
    for(let i = 1;i <= num; i++){
        result = result * i
    }
    // return results;
    console.log(result)
}
factorialize(5)