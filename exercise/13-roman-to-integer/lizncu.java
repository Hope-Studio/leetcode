class Solution {
  public int romanToInt(String s) {
    int n = s.length();
    int number = 0;

    for (int i = 0; i < n; i++) {
      switch (s.charAt(i)) {
        case 'I':
          number = number + 1;
          break;
        case 'V':
          number = number + 5;
          break;
        case 'X':
          number = number + 10;
          break;
        case 'L':
          number = number + 50;
          break;
        case 'C':
          number = number + 100;
          break;
        case 'D':
          number = number + 500;
          break;
        case 'M':
          number = number + 1000;
          break;
        default:
          System.out.println("default");
          break;
      }

      if (i > 0) {
        if ((s.charAt(i) == 'V' || s.charAt(i) == 'X') && s.charAt(i - 1) == 'I') {
          number -= 2;
        }
        if ((s.charAt(i) == 'L' || s.charAt(i) == 'C') && s.charAt(i - 1) == 'X') {
          number -= 20;
        }
        if ((s.charAt(i) == 'D' || s.charAt(i) == 'M') && s.charAt(i - 1) == 'C') {
          number -= 200;
        }
      }
    }
    return number;
  }
}
