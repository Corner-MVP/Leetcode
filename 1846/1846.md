# 2021/07/15 1846. 减小和重新排列数组后的最大元素

## 题目描述

You are given an array of positive integers `arr`. Perform some operations (possibly none) on `arr` so that it satisfies these conditions:

- The value of the **first** element in `arr` must be `1`.
- The absolute difference between any 2 adjacent elements must be **less than or equal to** `1`. In other words, `abs(arr[i] - arr[i - 1]) <= 1` for each `i` where `1 <= i < arr.length` (**0-indexed**). `abs(x)` is the absolute value of `x`.

There are 2 types of operations that you can perform any number of times:

- **Decrease** the value of any element of `arr` to a **smaller positive integer**.
- **Rearrange** the elements of `arr` to be in any order.

Return *the **maximum** possible value of an element in* `arr` *after performing the operations to satisfy the conditions*.

## 示例

### example 1

```
Input: arr = [2,2,1,2,1]
Output: 2
Explanation: 
We can satisfy the conditions by rearranging arr so it becomes [1,2,2,2,1].
The largest element in arr is 2.
```

### example 2

```
Input: arr = [100,1,1000]
Output: 3
Explanation: 
One possible way to satisfy the conditions is by doing the following:
1. Rearrange arr so it becomes [1,100,1000].
2. Decrease the value of the second element to 2.
3. Decrease the value of the third element to 3.
Now arr = [1,2,3], which satisfies the conditions.
The largest element in arr is 3.
```

### example 3

```
Input: arr = [1,2,3,4,5]
Output: 5
Explanation: The array already satisfies the conditions, and the largest element is 5.
```

### constraints:

- $1 <= arr.length <= 10^5$
- $1 <= arr[i] <= 10^5$

## 解题思路

本题需要`|arr[i] - arr[i-1]| <= 1`且`arr[0] == 1`, 所以为了求`arr`中可能的最大值，就需要`arr[i] - arr[i-1] = 1`尽可能的多，所以可以维护一个数组`res`表示符合题目要求的数组，将`arr`排序，排序后判断`arr[i]`与`res[i-1]`的大小关系

- 如果`arr[i] >= res[i-1] + 1`, 表示`arr[i]`可以通过减小值得到`res[i-1] + 1`,故`res[i] = res[i-1] + 1`
- 如果`arr[i] < res[i-1] + 1`, 表示`arr[i]`无法通过减小值得到`res[i-1] + 1`,故`res[i] = res[i-1]`

最终数组`res`的末尾值就是最后的答案。

## 代码
```
var maximumElementAfterDecrementingAndRearranging = function(arr) {

    arr.sort( (a, b) => a - b)
    const res = [1]

    for (let i = 1; i < arr.length; i++) {
        target = res[i-1] + 1
        if (arr[i] >= target) {
            res.push(target)
        } else {
            res.push(target-1)
        }
    }

    return res[arr.length - 1]

};
```

## 时间(空间)复杂度分析

时间复杂度：`O(nlogn)` `n`为数组`arr`的长度，数组`arr`排序需要`n(logn)`的时间复杂度，遍历数组需要`O(n)`的时间复杂度，所以总的时间复杂度是`O(nlogn)`
空间复杂度: `O(n)` `n`为数组`arr`的长度，需要一个长度为`n`的辅助数组