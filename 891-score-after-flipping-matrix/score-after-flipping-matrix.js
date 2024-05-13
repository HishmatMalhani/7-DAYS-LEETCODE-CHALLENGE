var matrixScore = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    
    // Step 1: Ensure the MSB of each row is 1 to maximize the row value
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) {
            // Toggle the row
            for (let j = 0; j < n; j++) {
                grid[i][j] = 1 - grid[i][j];
            }
        }
    }

    // Step 2: Optimize each column starting from the second column
    for (let j = 1; j < n; j++) {
        let numZeroes = 0;
        let numOnes = 0;

        for (let i = 0; i < m; i++) {
            if (grid[i][j] === 0) {
                numZeroes++;
            } else {
                numOnes++;
            }
        }

        if (numZeroes > numOnes) {
            // Toggle the column
            for (let i = 0; i < m; i++) {
                grid[i][j] = 1 - grid[i][j];
            }
        }
    }

    // Step 3: Calculate the final score
    let totalScore = 0;
    for (let i = 0; i < m; i++) {
        let rowValue = 0;
        for (let j = 0; j < n; j++) {
            rowValue = 2 * rowValue + grid[i][j];
        }
        totalScore += rowValue;
    }

    return totalScore;
};
