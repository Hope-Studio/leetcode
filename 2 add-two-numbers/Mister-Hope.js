/*
 * Runtime: 120 ms, faster than 96.86% of JavaScript online submissions for Add Two Numbers.
 *
 * Memory Usage: 43.7 MB, less than 6.82% of JavaScript online submissions for Add Two Numbers.
 */

const addTwoNumbers = (l1, l2) => {
  let l1Pointer = l1; // list 1 pointer
  let l2Pointer = l2; // list 2 pointer

  let prev = new ListNode(0);
  let prevPointer = prev; // prev pointer
  let needCarry = false;

  while (l1Pointer || l2Pointer) {
    let currentPosition = l1Pointer || l2Pointer;
    let sum =
      (l1Pointer?.val || 0) + (l2Pointer?.val || 0) + (needCarry ? 1 : 0);

    if (sum > 9) {
      sum = sum - 10;
      needCarry = true;
    } else needCarry = false;

    currentPosition.val = sum;
    prevPointer.next = currentPosition;
    prevPointer = prevPointer.next;

    if (l1Pointer) l1Pointer = l1Pointer.next;
    if (l2Pointer) l2Pointer = l2Pointer.next;
  }

  if (needCarry) prevPointer.next = new ListNode(1);

  return prev.next;
};
