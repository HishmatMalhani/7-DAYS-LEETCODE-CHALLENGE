var uniqueOccurrences = function(arr) {
    let count = {}; // To store the frequency of each element
    
    // Count each element's frequency
    for (const num of arr) {
        if (count[num] === undefined) {
            count[num] = 1;
        } else {
            count[num]++;
        }
    }

    let occurrences = new Set(); // To store the unique occurrence counts
    
    // Check each frequency to ensure uniqueness
    for (const key in count) {
        let freq = count[key];
        if (occurrences.has(freq)) {
            // If frequency already exists, it's not unique
            return false;
        }
        occurrences.add(freq);
    }
    
    return true;
};
