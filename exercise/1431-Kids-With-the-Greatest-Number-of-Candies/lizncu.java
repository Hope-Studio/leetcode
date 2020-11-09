class Solution {
  public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {

    int max = candies[0];

    List<Boolean> answer = new ArrayList<>();

    for (int i = 1; i < candies.length; i++) {
      if (max < candies[i]) {
        max = candies[i];
      }
    }

    for (int i = 0; i < candies.length; i++) {
      if (max - candies[i] <= extraCandies) {
        answer.add(true);
      } else {
        answer.add(false);
      }
    }

    return answer;
  }
}
