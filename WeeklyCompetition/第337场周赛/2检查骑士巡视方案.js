/**
 * 骑士在n×n的棋盘上巡视，骑士从左上角出发，访问棋盘上每个格子恰好一次。
 * grid[row][col]表示是骑士访问的第grid[row][col]个单元格
 * 
 * 每次可以水平移动两格并垂直移动一格，或垂直移动两个并水平移动一格
 */

var checkValidGrid = function (grid) {
    if (grid[0][0] !== 0) return false

    const n = grid.length    // n * n
    const map = new Map()
    // key: 0, value: [0,0]，key存值，value存坐标
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            map.set(grid[i][j], [i, j])
        }
    }

    // console.log(map);

    for (let i = 0; i < n ** 2 - 1; i++) {
        const iLocation = map.get(i)    // [xi, yi]
        const iNextLocation = map.get(i + 1)    // [Xi+1, Yi+1]

        if (Math.abs(iNextLocation[0] - iLocation[0]) !== 1 && Math.abs(iNextLocation[0] - iLocation[0]) !== 2) return false
        if (Math.abs(iNextLocation[1] - iLocation[1]) !== 1 && Math.abs(iNextLocation[1] - iLocation[1]) !== 2) return false
        // 如果行数相差一行，那么列数必须要相差2
        if (Math.abs(iNextLocation[0] - iLocation[0]) === 1) {
            if (Math.abs(iNextLocation[1] - iLocation[1]) !== 2) return false
        }
        // 如果列数相差一行，那么行数必须要相差2
        if (Math.abs(iNextLocation[1] - iLocation[1]) === 1) {
            if (Math.abs(iNextLocation[0] - iLocation[0]) !== 2) return false
        }
    }
    return true
};



let grid = [[0, 11, 16, 5, 20], [17, 4, 19, 10, 15], [12, 1, 8, 21, 6], [3, 18, 23, 14, 9], [24, 13, 2, 7, 22]]
console.log(checkValidGrid(grid));
grid = [[0, 3, 6], [5, 8, 1], [2, 7, 4]]
console.log(checkValidGrid(grid));

grid = [[24, 11, 22, 17, 4], [21, 16, 5, 12, 9], [6, 23, 10, 3, 18], [15, 20, 1, 8, 13], [0, 7, 14, 19, 2]]
console.log(checkValidGrid(grid));

grid = [[0, 5, 18, 9, 12, 27], [3, 8, 1, 28, 19, 10], [6, 17, 4, 11, 26, 13], [33, 2, 7, 22, 29, 20], [16, 23, 34, 31, 14, 25], [35, 32, 15, 24, 21, 30]]
console.log(checkValidGrid(grid));