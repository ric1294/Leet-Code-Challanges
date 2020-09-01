
// //This is with empty array
// function pushInEmptyArray(array , item){
//     var stackSize = 5;
//     var top = -1;
//     if(top == stackSize-1){
//         return "Overflow";
//     }else{
//         top++;
//         array[top] = item;
//         return array;
//     }
    
// }

// var array = [ ];
// var itemToPush = 11;
// var pushArray = pushInEmptyArray(array ,itemToPush );
// console.log(pushArray);


// //This is with exist array
// function pushInExistArray(array , item){
//     var stackSize = array.length;
//     var top = -1;
//     if(top == stackSize-1){
//         return "Overflow";
//     }else{
//         top++;
//         array[top] = item;
//         return array;
//     }
    
// }

// var array = [ 1 , 2 , 3 , 4 ,5];
// var itemToPush = 11;
// var pushArray = pushInExistArray(array ,itemToPush );
// console.log(pushArray);


// /**
//  * Pop Opration
//  */

//  function pop(array){
//     var item;
//     var top = array.length;
//     if(top == 0){
//         return "underflow"; // checked if array is null or not
//     }else{
//         item = array[top - 1];
//         top = top - 1 ;
//         return item;
//     }
//  }

//  console.log(pop([ 1 , 2 , 3 ,4 ,10]));


//  /**
//   * Peek Operation
//   */
//  function pop(stack){
//     var top = stack.length;
//     if(top == 0){
//         return "underflow"; // checked if array is null or not
//     }else{
//         return stack[top - 1]
//     }
//  }

//  console.log(pop([ 1 , 2 , 3 ,4 ,10]));


 
 /**
  * Display Operation
  */
 function dsiplay(stack){
    var stackLength = stack.length;
    var stackTop = stackLength - 1;
    for( i = stackTop ; i >= 0 ; i --){
        console.log(stack[i]);
    }
 }

 console.log(dsiplay([ 1 , 2 , 3 ,4 ,10]));
