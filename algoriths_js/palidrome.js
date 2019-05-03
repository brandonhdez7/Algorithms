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

function palindrome(str){

    //find all the non-numeric characters
   let reg = /[\W_]/g

   //change all characters to lower case
   var smallStr = str.toLowerCase().replace(reg, '')

    let reversed = smallStr.split("").reverse().join("")
    console.log(reversed)
    if (reversed === smallStr){
        return true
    }else{
        return false
    }
}
palindrome('eye')


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
    console.log(words)
}

findLongestWord('The quick brown fox jumped over the lazy dog')
// console.log(findLongestWord())
