var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b); // Sort the array in non-decreasing order
    let boats = 0;
    let left = 0, right = people.length - 1;
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++; // Both people can fit into a single boat
        }
        right--; // Move the pointer for the heaviest person inward
        boats++; // Increment the number of boats used
    }
    return boats;
};
