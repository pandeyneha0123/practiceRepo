// non decreasing subsequences

var findSubsequences = function(nums) {
    let n = nums.length
    let res = []

    let helper = function (i, sub) {
        let unique = new Set()
        for (let j = i; j < n; j++) {
            if (unique.has(nums[j]) || sub.length > 0 && sub[sub.length - 1] > nums[j]) continue
            unique.add(nums[j])
            sub.push(nums[j])
            if (sub.length >= 2) res.push([...sub])
            helper(j+1, sub)
            sub.pop()
        }
    }

    helper(0, [])
    return res
};