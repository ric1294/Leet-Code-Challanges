var balancedStringSplit = function(s) {
    
    let counter = 0;
    let res = 0; 
    for (i = 0; i < s.length; i++) {
             if (s.charAt(i) == 'L') {
                 counter++;
             } else {
                 counter--;
             }
          if(counter == 0){
              res++
          }
       
     } 
      return res;
      
 };