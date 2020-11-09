/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
       
    ListNode s = new ListNode(-1);

    ListNode t = s;

    int num = 0;

    while((l1 != null) || (l2 != null) || (num != 0)){
        
        if(l1 != null){
            num += l1.val;
            l1 = l1.next;
        }
        
        if(l2 != null){
            num += l2.val;
            l2 = l2.next;
        }

        t.next = new ListNode(num % 10);
        
        num = num / 10;
      
        t = t.next;
        
    }

    return s.next;
    }
}