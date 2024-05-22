/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];

    // Helper function to check if a substring is a palindrome
    const isPalindrome = (str, left, right) => {
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    // Backtracking function to find palindrome partitions
    const backtrack = (start, path) => {
        if (start === s.length) {
            result.push([...path]);
            return;
        }
        
        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                path.push(s.substring(start, end + 1));
                backtrack(end + 1, path);
                path.pop();
            }
        }
    };

    backtrack(0, []);
    return result;
};

// Example usage:
console.log(partition("aab")); // Output: [["a","a","b"],["aa","b"]]
console.log(partition("a")); // Output: [["a"]]
