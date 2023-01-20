// CLONE AN ARRAY!

// let arr = [1,2,3,4,5,6,7,8]
// let arrClone = arr.slice();
// let arrClone2 = [...arr];


//SORT AN ARRAY
// let arr1 = [ 5, 11, 4, 9, -4, -8, 2, 10]
// console.log(arr1.sort())

//SORT AN ARRAY WITHOUT METHOD
// let arr1 = [ 5, 11, 4, 9, -4, -8, 2, 10];

// for (let i = 0; i < arr1.length; i++) {
//   for (let k = i + 1; k < arr1.length; k++) {
//     if (arr1[i] > arr1[k]) {
//       x = arr1[i];
//       arr1[i] = arr1[k];
//       arr1[k] = x;
//     }
//   }
// }
// console.log(arr1);

//Sortin by String
// let arr = [1,true, 'hello']
// let type = 'string'
// let str = typeof type
// function sortingbyString(item){
//     return typeof item == str
// }
// var arrStrings = arr.filter(sortingbyString)
// console.log(arrStrings)



// Removing specific element but could not do array inside array :/
// let arr = [[1,2,5,6],4,7,9,11,4]
// function findFour(item){
//     return item != 4 
// }
// const arrSorted = arr.filter(findFour)
// console.log(arrSorted)

// Making Array Empty Array????? 
// let arr = [1,2,3,4]
// arr = []
// console.log(arr)

//Could not do it myself. Dont know how i can capitilize second words in Strings like Ali Almammadov 
//7. Clean name ['hello', 'ali_almammadov','wEb_3.1']=> ['Hello', 'Ali Almammadov','Web 3.1']


// Capitalize First Letter. 
// let arr = ['salam', 'sagol','yaxsi'];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
// }
// console.log(arr)

//Heroes 
// let arr = ["super","bat","aqua"];
// let hero = "man";
// let superhero = arr.map(ar => ar+hero)
// console.log(superhero)

//Array + index 
// let arr = [1,2,3,4,5,6,7]
// let newArr = arr.map((element, index) => element+index);
// console.log(newArr);

// mutiply by 2 
// let arr = [1,2,3,4,5,6,7]
// let newArr = arr.map(Element => Element * 2)
// console.log(newArr)

//SUM ARRAY METHODS
// let arr = [1,2,3,4,5,6,7]
// function sumarr(arr){
//     let sum = 0 
//     arr.forEach(element => {
//         sum = sum + element
//     });
//     console.log(sum)
//     return sum 
// }
// sumarr(arr)

//SUM WITHOUT METHODS
// let arr = [1,2,3,4,5,6,7];
// let sum = 0 
// for(let i = 0; i < arr.length; i++){
// sum = sum + arr[i]
// }
// console.log(sum)