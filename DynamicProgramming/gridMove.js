const gridTraverller = (m, n, memo={}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    memo[key] = gridTraverller(m - 1, n, memo) + gridTraverller(m, n - 1, memo);
    return memo[key];
};

console.time('1')
console.log(gridTraverller(1, 1));  //  1
console.timeEnd('1')

console.time('2')
console.log(gridTraverller(2, 3));  //  3
console.timeEnd('2')

console.time('3')
console.log(gridTraverller(3, 2));  //  3
console.timeEnd('3')

console.time('6')
console.log(gridTraverller(3, 3));  //  6
console.timeEnd('6')

console.time('18')
console.log(gridTraverller(18, 18));    //  2333606220
console.timeEnd('18')
