/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a, b) => a - b);  // Sort the array in ascending order
    const n = nums.length;

    for (let x = 0; x <= n; x++) {
        // Count the number of elements >= x
        let count = 0;
        for (let i = 0; i < n; i++) {
            if (nums[i] >= x) {
                count = n - i; // All elements from index i to end are >= x
                break;
            }
        }
        
        if (count === x) {
            return x;
        }
    }

    return -1;
};
