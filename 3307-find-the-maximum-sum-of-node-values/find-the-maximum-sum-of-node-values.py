from typing import List

class Solution:
    def maximumValueSum(self, nums: List[int], k: int, edges: List[List[int]]) -> int:
        # Step 1: Compute the delta for each node
        delta = [(num ^ k) - num for num in nums]
        delta.sort(reverse=True)  # Step 2: Sort the deltas in descending order
        res = sum(nums)  # Step 3: Initialize the result with the sum of original nums
        for i in range(0, len(nums), 2):  # Step 4: Apply deltas in pairs to maximize the sum
            if i == len(nums) - 1:
                break
            path_delta = delta[i] + delta[i + 1]
            if path_delta <= 0:
                break
            res += path_delta
        return res
