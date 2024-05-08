var findRelativeRanks = function(score) {
    // Create an array of [score, index] pairs
    let indexedScores = score.map((s, i) => [s, i]);
    
    // Sort the scores in descending order based on the score
    indexedScores.sort((a, b) => b[0] - a[0]);
    
    // Result array to store the ranks
    let result = new Array(score.length);
    
    // Assign the ranks based on sorted scores
    for (let i = 0; i < indexedScores.length; i++) {
        if (i === 0) {
            result[indexedScores[i][1]] = "Gold Medal";
        } else if (i === 1) {
            result[indexedScores[i][1]] = "Silver Medal";
        } else if (i === 2) {
            result[indexedScores[i][1]] = "Bronze Medal";
        } else {
            result[indexedScores[i][1]] = String(i + 1);
        }
    }
    
    return result;
};
