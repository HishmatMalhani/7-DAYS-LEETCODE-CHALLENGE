var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict); // Convert wordDict to a set for O(1) lookups
    const memo = {}; // Memoization object

    function backtrack(start) {
        if (start in memo) return memo[start]; // Return already computed result

        const result = [];
        if (start === s.length) {
            result.push(""); // Base case: If we've reached the end, return an empty string
        }

        for (let end = start + 1; end <= s.length; end++) {
            const word = s.slice(start, end);
            if (wordSet.has(word)) {
                const subResults = backtrack(end);
                for (const subResult of subResults) {
                    result.push(word + (subResult ? " " + subResult : ""));
                }
            }
        }

        memo[start] = result; // Memoize the result
        return result;
    }

    return backtrack(0);
};

// Example usage
let s = "catsanddog";
let wordDict = ["cat", "cats", "and", "sand", "dog"];
console.log(wordBreak(s, wordDict)); // Output: ["cats and dog","cat sand dog"]

s = "pineapplepenapple";
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"];
console.log(wordBreak(s, wordDict)); // Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]

s = "catsandog";
wordDict = ["cats", "dog", "sand", "and", "cat"];
console.log(wordBreak(s, wordDict)); // Output: []
