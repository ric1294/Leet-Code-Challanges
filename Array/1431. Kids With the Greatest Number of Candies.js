var kidsWithCandies = function(candies, extraCandies) {
    var isSufficientCandies = false;
    var sum = 0;
    var result = [];
    for(i=0 ; i < candies.length ; i ++){
        var maxCandies = Math.max(...candies);
        sum = candies[i] +  extraCandies
        if(sum >= maxCandies){
            result[i] = true
        }else{
            result[i] = false
        } 
        
    }
    return result
};