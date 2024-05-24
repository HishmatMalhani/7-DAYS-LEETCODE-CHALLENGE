var maxScoreWords = function(words, letters, score) {
    // Helper function to calculate the frequency of each character in a given word
    function getCharFrequency(word) {
        let freq = new Array(26).fill(0);
        for (let char of word) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return freq;
    }

    // Calculate the frequency of each letter in the given letters array
    let lettersFreq = new Array(26).fill(0);
    for (let letter of letters) {
        lettersFreq[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Calculate the score of each word
    let wordScores = words.map(word => {
        let wordScore = 0;
        for (let char of word) {
            wordScore += score[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        return wordScore;
    });

    let n = words.length;
    let maxScore = 0;

    // Try all subsets of words using bitmasking
    for (let mask = 0; mask < (1 << n); mask++) {
        let currentFreq = new Array(26).fill(0);
        let currentScore = 0;
        let valid = true;

        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) { // if the i-th bit is set in the mask
                let word = words[i];
                let wordFreq = getCharFrequency(word);

                // Check if we can form the current word with the available letters
                for (let j = 0; j < 26; j++) {
                    currentFreq[j] += wordFreq[j];
                    if (currentFreq[j] > lettersFreq[j]) {
                        valid = false;
                        break;
                    }
                }
                if (!valid) break;
                currentScore += wordScores[i];
            }
        }

        if (valid) {
            maxScore = Math.max(maxScore, currentScore);
        }
    }

    return maxScore;
};

// Example usage
let words = ["dog", "cat", "dad", "good"];
let letters = ["a", "a", "c", "d", "d", "d", "g", "o", "o"];
let score = [1, 0, 9, 5, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(maxScoreWords(words, letters, score)); // Output: 23
