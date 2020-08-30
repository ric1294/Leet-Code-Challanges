var generateTheString = function(n) {
    var ans = [];
 
     if (n%2==0){
         for (i = 0 ; i < n - 1 ; i++){
             ans.push('p');
             
         }
        ans.push('z')
     }else{
         for (i = 0 ; i < n ; i++){
             ans.push('a'); 
         }
        
     }
     return ans.join('');
};