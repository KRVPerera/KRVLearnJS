const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    if (targetSum in memo) return memo[targetSum];

    let goodArray = null;
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);

        if (remainderResult != null) {
            let newArray = [...remainderResult, num];
            if (goodArray == null) {
                goodArray = newArray;
                continue;
            }
            if (newArray.length < goodArray.length) {
                goodArray = newArray;
            }
        }
    }

    memo[targetSum] = goodArray;
    return memo[targetSum];
};

const camSumWrapper = (targetSum, numbers) => {
    console.time('canSum ' + targetSum + ' : ' + numbers);
    let value = howSum(targetSum, numbers);
    console.timeEnd('canSum ' + targetSum + ' : ' + numbers);
    if (value != null) {
        console.log("Found a list : " + value.length);
    }
    console.log("\n")
    return value != null;
};

console.assert(camSumWrapper(7, [2, 3])); // true
console.assert(camSumWrapper(7, [5, 3, 4, 7])); // true
console.assert(camSumWrapper(7, [2, 4]) == false); // false
console.assert(camSumWrapper(8, [2, 3, 5])); // true
console.assert(camSumWrapper(300, [7, 14]) == false); // false
