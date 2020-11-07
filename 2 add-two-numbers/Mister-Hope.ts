/*
 * Runtime: 132 ms, faster than 87.59% of TypeScript online submissions for Add Two Numbers.
 *
 * Memory Usage: 44.5 MB, less than 5.32% of TypeScript online submissions for Add Two Numbers.
 */

const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  let l1Pointer = l1; // list 1 pointer
  let l2Pointer = l2; // list 2 pointer

  let prev = new ListNode(0);
  let prevPointer = prev; // prev pointer
  let needCarry = false;

  let currentPosition = l1Pointer || l2Pointer;

  while (currentPosition) {
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
    currentPosition = l1Pointer || l2Pointer;
  }

  if (needCarry) prevPointer.next = new ListNode(1);

  return prev.next;
};
