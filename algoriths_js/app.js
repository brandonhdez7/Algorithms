// //bubble sort

// function bubble_Sort(a)
// {
//     var swapp;
//     var n = a.length-1;
//     var x=a;
//     do {
//         swapp = false;
//         for (var i=0; i < n; i++)
//         {
//             if (x[i] < x[i+1])
//             {
//                var temp = x[i];
//                x[i] = x[i+1];
//                x[i+1] = temp;
//                swapp = true;
//             }
//         }
//         n--;
//     } while (swapp);
//  return x; 
// }

// console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));




// let unsortArr = [12,34,5,86,6,3,7,8,90]

// let swapped;

// function bubbleSort(arr){
//     swapped = false
//     let end = arr.length - 1;
//     for(let i = 0; i < end; i++){
//         if(arr[i] > arr[i + 1]){
//             swapped = true;
//             let temp = arr[i]
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp
//         }
//     }
//     end--;
// }

// do{
//     bubbleSort(unsortArr)
// }while(swapped)

// console.log(unsortArr)



// let array = [2,3,1];

// function bubbleSorting(array){
//     let lim;
//     let j;
//     lim = array.length; while( lim--){
//         for(let i = 0, j= 1 ; i < lim; ++i, ++j){
//             if(array[i] > array[j]){
//                 temp = array[i];
//                 array[i]=array[j]
//                 array[j]=temp
//             }
//         }
//     }
//     return array;
// }

// console.log(bubbleSorting(array))


// let unsortedArr = [3,6,8,2,9,5,8,56,53,83]

// let swapped;

// function bubbleSort (arr){
//     swapped = false;
//     let end = arr.length -1;
//     for(let i = 0; i < end; i++){
//         if(arr[i] > arr[i+1]){
//             swapped = true;
//             temp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i + 1] = temp
//         }
//     }
//     end --;
// }
// do{
//     bubbleSort(unsortedArr)
// }while(swapped)

// console.log(unsortedArr)



//descending order

function descendingOrder(n){
    let arr = n.toString().split('');
    let arrNum = [];
    console.log(arr);
    for(var i = 0; i < arr.length; i++){
      arrNum.push(parseInt(arr[i]));
      console.log(arrNum)
    }
    
    let sorted = arrNum.sort(function(a, b){return b-a});
    let sorted2 = sorted.join('');
    return parseInt(sorted2);
  }
  
  descendingOrder(123456);


  //Find the largest palindrome made from the product of two 3-digit numbers.

  function largestPalindrome(){
    var largest = 0;
    for(var i=999; i>=100; i--){
        for(var j=999; j>=100; j--){
            var mult = i*j;
            if(isPalindrome(mult) && mult > largest){
                largest = mult;
            }
        }
    }
    return largest;
}


//find the largest number in each array

// function largestNumberArray(arrayyy){
//     var maxes = [];
//     for(let i = 0; i < arrayyy.length; i++){
//         // console.log(arrayyy[i])
//         for(let i = 0; i < arrayyy[i].length; i ++){

//         }
//     }
// }

// largestNumberArray([[4,2,8,6],[45,34,2,6],[55,2,54,4],[5,73,43,54]])


//binary search

let biArray = [3,4,5,873,654,754,765,34,43,8,43,2343]

let sorttedBiArray = biArray.sort(function(a,b){
    return a - b
})  
console.log(sorttedBiArray)


