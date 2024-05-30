/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    const n = arr.length;
    let prefixXOR = new Array(n + 1).fill(0);
    
    // Compute the prefix XOR array
    for (let i = 0; i < n; i++) {
        prefixXOR[i + 1] = prefixXOR[i] ^ arr[i];
    }
    
    let count = 0;
    
    // Iterate over each j from 1 to n
    for (let j = 1; j < n; j++) {
        for (let i = 0; i < j; i++) {
            if (prefixXOR[i] == prefixXOR[j + 1]) {
                count += (j - i);
            }
        }
    }
    
    return count;
};

// Example usage:
console.log(countTriplets([2, 3, 1, 6, 7])); // Output: 4
console.log(countTriplets([1, 1, 1, 1, 1])); // Output: 10
