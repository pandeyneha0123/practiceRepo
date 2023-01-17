/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// add two numbers problem2
var arrayFromListNode = function(ln) {
    let res = [ln.val];
    while (ln.next) {
        ln = ln.next;
        res.push(ln.val);
    }

    return res;
}

var linkedListFromArray = function (a) {    
    for (let i=0; i<a.length; i++) {
        a[i] = new ListNode(a[i]);
        if (i!=0 && i<a.length) {
            a[i-1].next = a[i];
        } else {
            a[i].next = null;
        }
    }

    return a[0];
}

var addTwoArrays = function (a1, a2) {
    let shorterArray;
    let longerArray;
    if (a1.length > a2.length) {
        longerArray = a1;
        shorterArray = a2;
    } else {
        longerArray = a2;
        shorterArray = a1;
    }

    for (let i=0; i<shorterArray.length; i++) {
        longerArray[i] = longerArray[i] + shorterArray[i];
    }

    for (let i=0; i<longerArray.length; i++) {
        if (longerArray[i]>=10) {
            if (i+1 >= longerArray.length) {
                longerArray.push(1);
            } else {
                longerArray[i+1] = longerArray[i+1] + 1;
            }
            longerArray[i] = longerArray[i]-10;
        }
    }

    return longerArray;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1_array = arrayFromListNode(l1);
    let l2_array = arrayFromListNode(l2);

    let res = addTwoArrays(l1_array, l2_array);

    return linkedListFromArray(res);
};