// median of two sorted arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length > nums2.length) {
      return findMedianSortedArrays(nums2, nums1)
    }
    let elementsOnLeft = Math.floor((nums1.length + nums2.length + 1)/2)
    let low = 0, high = nums1.length
    while(low <= high) {
      let cut1 = low + Math.floor((high-low)/2)
      let cut2 = elementsOnLeft - cut1
      let left1 = cut1 === 0 ? -Infinity : nums1[cut1-1]
      let left2 = cut2 === 0 ? -Infinity : nums2[cut2-1]
      let right1 = cut1 === nums1.length ? Infinity : nums1[cut1]
      let right2 = cut2 === nums2.length ? Infinity : nums2[cut2]
      if(left1 > right2) {
        // move left, reduce left1
        high = cut1
      } else if(left2 > right1) {
        // move right, reduce right1
        low = cut1 + 1
      } else {
        // found the solution
        const isOdd = (nums1.length + nums2.length) % 2 !== 0
        if(isOdd) {
          return Math.max(left1, left2)
        } else {
          
          return ((Math.max(left1, left2) + Math.min(right1, right2))/2)
        }
      }
    }
  };