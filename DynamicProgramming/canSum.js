const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    if (targetSum in memo) return memo[targetSum];

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};

const camSumWrapper = (targetSum, numbers) => {
    console.time('canSum');
    let value = canSum(targetSum, numbers);
    console.timeEnd('canSum');
    return value;
};

console.assert(camSumWrapper(7, [2, 3]));          // true
console.assert(camSumWrapper(7, [5, 3, 4, 7]));    // true
console.assert(camSumWrapper(7, [2, 4]) == false);          // false
console.assert(camSumWrapper(8, [2, 3, 5]));       // true
console.assert(camSumWrapper(300, [7, 14]) == false);       // false
