var mincostToHireWorkers = function(quality, wage, k) {
    const workers = quality.map((q, i) => {
        return { ratio: wage[i] / q, quality: q };
    });
    
    // Sort workers by their wage to quality ratio
    workers.sort((a, b) => a.ratio - b.ratio);
    
    let minCost = Number.MAX_SAFE_INTEGER;
    let qualitySum = 0;
    const maxHeap = new MaxPriorityQueue(); // Using a max heap for quality
    
    for (let worker of workers) {
        qualitySum += worker.quality;
        maxHeap.enqueue(worker.quality);
        
        if (maxHeap.size() > k) {
            qualitySum -= maxHeap.dequeue().element; // Remove the largest quality if more than k workers
        }
        
        if (maxHeap.size() === k) {
            // Calculate current cost with current worker's ratio (maximum ratio of selected k workers)
            const cost = qualitySum * worker.ratio;
            minCost = Math.min(minCost, cost);
        }
    }
    
    return minCost;
};
