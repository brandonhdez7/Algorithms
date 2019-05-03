// // console.log('sanity check');
// // guess a number
// // -loop through all 
// let number = 5;
// let numberList = [1,2,3,4,5];
// for (let i = 0; i < numberList.length; i++){
//     if (numberList[i] === number){
//         console.log("Found!" ,number)
//         break
//     }
// }

// // guess randomly (Not a good option)
// let found = false;
// let counter = 0;
// while(found === false){
//     counter++
//     let randIndex = Math.floor(Math.random() * numberList.length)
//     if(numberList[randIndex] === number){
//         found = true;
//         console.log("horrat the number was" , number)
//         console.log(`it took ${counter} gueeses`)
//     }
// }

// found = false;
// let index =(Math.floor(numberList.length/2));
// while(!found){
//     if(number === numberList[index]){
//         console.log(`number was`, numberList[index]);
//     }else if(number < numberList[index]){
//         // cut off the top half by moving the index to the
//         // middle f the lower half
//         index = Math.floor(index/2);
//     }else{
//         // we know its higher
//         index = Math.floor(index/2)
//     }
// }

// let numberList = [1,2,3,4,5];
// let number = Math.floor(Math.random)

function binarySearch(list, value){
    // we will set a range/bounds to check
    // this will get smaller as we guess
    // start bottom number at 0
    let bottomIndex = 0;
    // start the top number at the last element
    let topIndex =list.length -1;
    let middleIndex = Math.floor((topIndex+bottomIndex)/2);
    // console.log(bottomIndex,middleIndex,topIndex)

    let 

    // we need a while loop! we need to keep looking, unit!
    // we find the correct number
    // keep looping,while the middle is not the right number
    // and there isnt only 1 left
    let found = false;
    counter = 0;
    while(!found){
        counter++
        if(value < list[middleIndex]){
            topIndex = middleIndex - 1
        }else if(value > list[middleIndex]){
            bottomIndex = middleIndex + 1;
        }else{
            // we found it
            found = true
        }
        // recalcuate the middle because we changed top or bottom
        middleIndex = Math.floor((topIndex+bottomIndex)/2);
    }
    console.log(`it took ${counter} guesses`)
    return list[middleIndex];
}


let numbers = [];
for(let i = 0; i < 1000; i++){
    numbers.push(i);
}
const index = binarySearch(numbers,1);
// console.log(index)


function