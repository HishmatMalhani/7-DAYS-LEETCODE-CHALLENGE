/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let start = 0;
    let maxLength = 0;
    let currentCost = 0;

    for (let end = 0; end < s.length; end++) {
        currentCost += Math.abs(s[end].charCodeAt(0) - t[end].charCodeAt(0));
        
        // If the current cost exceeds maxCost, contract the window from the left
        while (currentCost > maxCost) {
            currentCost -= Math.abs(s[start].charCodeAt(0) - t[start].charCodeAt(0));
            start++;
        }

        // Calculate the maximum length of the valid window
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
