function findWinners(matches) {
    let lossCount = new Map();
    let played = new Set();

    // Record the matches and update loss count
    for (let [winner, loser] of matches) {
        played.add(winner);
        played.add(loser);

        if (!lossCount.has(loser)) {
            lossCount.set(loser, 0);
        }
        lossCount.set(loser, lossCount.get(loser) + 1);

        // Make sure winner is in lossCount with zero if not already
        if (!lossCount.has(winner)) {
            lossCount.set(winner, 0);
        }
    }

    let neverLost = [];
    let lostOneMatch = [];

    // Process the players to categorize them based on their loss counts
    for (let player of played) {
        const losses = lossCount.get(player) || 0; // Default to 0 losses if not present
        if (losses === 0) {
            neverLost.push(player);
        } else if (losses === 1) {
            lostOneMatch.push(player);
        }
    }

    // Sort the results
    neverLost.sort((a, b) => a - b);
    lostOneMatch.sort((a, b) => a - b);

    return [neverLost, lostOneMatch];
}
