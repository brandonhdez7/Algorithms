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




let unsortArr = [12,34,5,86,6,3,7,8,90]

let swapped;

function bubbleSort(arr){
    swapped = false
    let end = arr.length - 1;
    for(let i = 0; i < end; i++){
        if(arr[i] > arr[i + 1]){
            swapped = true;
            let temp = arr[i]
            arr[i] = arr[i + 1];
            arr[i + 1] = temp
        }
    }
    end--;
}

do{
    bubbleSort(unsortArr)
}while(swapped)

console.log(unsortArr)



let array = [2,3,1];

function bubbleSorting(array){
    let lim;
    let j;
    lim = array.length; while( lim--){
        for(let i = 0, j= 1 ; i < lim; ++i, ++j){
            if(array[i] > array[j]){
                temp = array[i];
                array[i]=array[j]
                array[j]=temp
            }
        }
    }
    return array;
}

console.log(bubbleSorting(array))