var findMaxK = function(nums) {
    let result = -1;
    let numSet = new Set();
    for(let num of nums){
        if (num < 0) {
            numSet.add(num);
        }
    }
    for (let num of nums) {
         if (num > 0 && numSet.has(-num)) {
            result = Math.max(result, num);
        }
    }
    return result;
};
