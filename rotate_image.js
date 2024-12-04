class RotateImage {
  /**
   * @param {number[][]} matrix
   * @return {void}
   */
  rotate(matrix) {
    let l = 0;
    let r = matrix.length - 1;

    while (l < r) {
      for (let i = 0; i < r - l; i++) {
        const topLeft = matrix[l][l + i];

        matrix[l][l + i] = matrix[l + i][r];
        matrix[l + i][r] = matrix[r][r - i];
        matrix[r][r - i] = matrix[r - i][l];
        matrix[r - i][l] = topLeft;

        // matrix[l][l + i] = matrix[r - i][l];
        // matrix[r - i][l] = matrix[r][r - i];
        // matrix[r][r - i] = matrix[l + i][r];
        // matrix[l + i][r] = topLeft;
      }
      l++;
      r--;
    }
  }
}

module.exports = RotateImage;
