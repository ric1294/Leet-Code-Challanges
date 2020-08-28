//Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7
//Output 3 4 5 6 7 1 2 

function leftRotation(input , rotation){
    let outputArray = [];
    let temp = input.splice(0,rotation);
    outputArray = input.concat(temp);
    return outputArray;
}


let inputArray = [1 , 2 , 3 , 4 , 5 , 6 , 7]
let numberOfRotation  = 2 ;

let result = leftRotation(inputArray , numberOfRotation)
console.log(result);
