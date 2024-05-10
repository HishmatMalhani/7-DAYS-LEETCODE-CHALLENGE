class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this._bubbleUp();
    }

    pop() {
        const top = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._sinkDown();
        }
        return top;
    }

    _bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];

        while (index > 0) {
            let parentIdx = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element[0] >= parent[0]) break;
            this.heap[index] = parent;
            this.heap[parentIdx] = element;
            index = parentIdx;
        }
    }

    _sinkDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild[0] < element[0]) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild[0] < element[0]) ||
                    (swap !== null && rightChild[0] < leftChild[0])
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

var kthSmallestPrimeFraction = function(arr, k) {
    let heap = new MinHeap();
    
    // Initial heap entries
    for (let i = 0; i < arr.length - 1; i++) {
        heap.push([arr[i] / arr[arr.length - 1], i, arr.length - 1]);
    }
    
    for (let count = 1; count < k; count++) {
        const [, i, j] = heap.pop();
        if (j - 1 > i) {
            heap.push([arr[i] / arr[j - 1], i, j - 1]);
        }
    }
    
    const [value, i, j] = heap.pop();
    return [arr[i], arr[j]];
};
