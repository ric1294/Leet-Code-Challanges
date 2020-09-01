var findNumbers = function(nums) {
    let count = 0; 
    let aCountArr = nums.map(i => {
        if(i.toString().length % 2 == 0){
            count++;
        }
        //console.log(i.toString().length);
    });
    return count;
};