/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let t1 = l1;
    let t2 = l2;
    let carry = 0;
    let sum = 0;
    let dummy = new ListNode(-1);
    let temp = dummy;

    while(carry != 0 || t1 != null || t2!=null){
        let x = t1==null?0:t1.val;
        let y = t2==null?0:t2.val;
        sum = x+y+carry;
        carry = parseInt(sum/10);
        sum = sum%10;
        temp.next = new ListNode(sum);
        temp = temp.next;

        if(t1 != null) t1 = t1.next;
        if(t2 != null) t2 = t2.next;
    }
    return dummy.next;
};

// seconde solution

var addTwoNumbers = function(l1, l2) {
  
  let head=new ListNode();
  let curr=head;
   l1=reverseList(l1);
    l2=reverseList(l2);
  let carry=0;
  let sum=0;
  while(l1 || l2){
    let l1val=l1?l1.val:0;
    let l2val=l2?l2.val:0;
    sum=l1val+l2val+carry;
    
    carry=sum>9?1:0;
    if(l1){
      l1.val=sum%10
      curr.next=l1;
    }else{
      l2.val=sum%10;
      curr.next=l2;
    }
    if(l1) l1=l1.next;
    if(l2) l2=l2.next;
    curr=curr.next;
  }
  if(carry>0){
    curr.next=new ListNode(1);
  }
  let res=reverseList(head.next);
  return res;
  
};

function reverseList(head){
  let cur=head,prev=null
  while(cur!=null){
    let next=cur.next;
    cur.next=prev;
    prev=cur;
    cur=next;
  }
  return prev;
}













    
