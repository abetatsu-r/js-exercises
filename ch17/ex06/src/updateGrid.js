// Life Game のルールに従ってセルを更新する
function updateGrid(grid, ROWS, COLS) {
  // 新しいグリッドを作成
  const nextGrid = grid.map((arr) => [...arr]);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // 周囲のセルの生存数を数える
      const n_alive = [
        grid[row - 1]?.[col - 1],
        grid[row - 1]?.[col],
        grid[row - 1]?.[col + 1],
        grid[row]?.[col - 1],
        grid[row]?.[col + 1],
        grid[row + 1]?.[col - 1],
        grid[row + 1]?.[col],
        grid[row + 1]?.[col + 1],
      ].filter((x) => x).length;

      // 生きたセルの場合
      if (grid[row][col]) {
        // 周囲に生きたセルが2個または3個の場合のみ生存する
        if (n_alive === 2 || n_alive === 3) {
          nextGrid[row][col] = true;
        } else {
          nextGrid[row][col] = false;
        }
      } else {
        // 死んだセルの場合
        // 周囲に生きたセルが3つある場合は生きたセルへと変わる
        if (n_alive === 3) {
          nextGrid[row][col] = true;
        } else {
          nextGrid[row][col] = false;
        }
      }
    }
  }
  return nextGrid;
}

export default updateGrid;
