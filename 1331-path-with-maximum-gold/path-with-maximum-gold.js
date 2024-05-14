var getMaximumGold = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let maxGold = 0;

    function dfs(x, y, currentGold) {
        // Current gold at (x, y) cell
        const gold = grid[x][y];
        // Mark the cell as visited by taking the gold
        grid[x][y] = 0;
        // Update the max gold collected so far
        maxGold = Math.max(maxGold, currentGold + gold);
        
        // Directions: right, left, down, up
        const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        for (let [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;
            // Check bounds and if there's gold to continue the path
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] > 0) {
                dfs(nx, ny, currentGold + gold);
            }
        }
        // Restore the gold after exploring all paths from this cell
        grid[x][y] = gold;
    }

    // Start DFS from each cell that contains gold
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                dfs(i, j, 0);
            }
        }
    }
    
    return maxGold;
};
