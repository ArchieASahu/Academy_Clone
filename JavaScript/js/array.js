let arr = [11, 2.4, false, "Hello"]

// let newArr = new Array(1,2,3,4,5)

// console.log(typeof(arr));
// console.dir(arr)
// console.log(arr)
// console.log(typeof(newArr));

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

arr.forEach(function(n){
    console.log(n);
})

let myArr = [10, 13, 11, 5, 9, 0, 20]

let l = myArr[0]
let s = myArr[0]
// for(let i=1;i<myArr.length;i++){
//     if(myArr[i]>l){
//         l=myArr[i]
//     }
//     if(myArr[i]<s){
//         s=myArr[i]
//     }
// }

myArr.forEach(function(n){
    if(n>l){
        l=n
    }
    if(n<s){
        s=n
    }
})
console.log(`Largest Element is ${l} and smallest element is ${s}`);