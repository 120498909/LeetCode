function ListNode(val) {
    this.val = val;
    this.next = null;
}
let addTwoNumbers = function(l1, l2) {
  let ans = new ListNode(0)
  let tmp = ans
  let sum = 0
  let carry = 0//进位标志
  while(l1 || l2 || carry){
    if(l1){
      sum += l1.val
      l1 = l1.next
    }
    if(l2){
      sum += l2.val
      l2 = l2.next
    }
    if(carry) sum++
    carry = parseInt(sum / 10)
    tmp.val = sum % 10
    if(l1 || l2 || carry){
      tmp.next = new ListNode(0)
      tmp = tmp.next
    }
    sum = 0
  }
  return ans
};

let l1 = new ListNode(7)
l1.next = new ListNode(4)
l1.next.next = new ListNode(5)
let l2 = new ListNode(7)
l2.next = new ListNode(4)
l2.next.next = new ListNode(5)
let p = addTwoNumbers(l1, l2)

while(p !== null){
  console.log(p.val)
  p = p.next
}