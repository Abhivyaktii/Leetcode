class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        remainder_set = {}
        for idx , num in enumerate(nums):
            remainder = target - num
            if remainder in remainder_set:
                return [remainder_set[remainder],idx]
            remainder_set[num] = idx
        return []
            