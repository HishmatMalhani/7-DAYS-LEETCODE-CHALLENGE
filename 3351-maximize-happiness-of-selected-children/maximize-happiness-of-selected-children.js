var maximumHappinessSum = function(happiness, k) {
    // Step 1: Sort the happiness array in descending order
    happiness.sort((a, b) => b - a);

    // Step 2: Calculate the maximum happiness sum
    let maxHappiness = 0;
    for (let i = 0; i < k; i++) {
        // Calculate the effective happiness considering the decrements
        // that would happen due to prior selections
        let effectiveHappiness = Math.max(0, happiness[i] - i);
        maxHappiness += effectiveHappiness;
    }

    return maxHappiness;
};
