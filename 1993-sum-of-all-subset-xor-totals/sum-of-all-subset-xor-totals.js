function subsetXORSum(nums) {
    let result = 0;

    function calculateXOR(index, currentXOR) {
        if (index === nums.length) {
            result += currentXOR;
            return;
        }
        
        // Include the current element
        calculateXOR(index + 1, currentXOR ^ nums[index]);
        
        // Exclude the current element
        calculateXOR(index + 1, currentXOR);
    }

    calculateXOR(0, 0);
    return result;
}

// Example Usage
console.log(subsetXORSum([1, 3])); // Output: 6
console.log(subsetXORSum([5, 1, 6])); // Output: 28
console.log(subsetXORSum([3, 4, 5, 6, 7, 8])); // Output: 480
