# Runtime: 476 ms, faster than 32.13% of Python3 online submissions for Two Sum.
#
# Memory Usage: 27.9 MB, less than 17.63% of Python3 online submissions for Two Sum.

class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[int]:
    prevMap = {}
    
    for i, v in enumerate(nums):
      j = target - v
      if j in prevMap:
        return [prevMap[j], i]
      prevMap[v] = i
    return
