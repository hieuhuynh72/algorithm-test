const RotateImage = require("./rotate_image");
const assert = require("assert");

describe("RotateImage", function () {
  it("should rotate a 3x3 matrix", function () {
    const rotateImage = new RotateImage();
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expected = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ];
    rotateImage.rotate(matrix);
    assert.deepStrictEqual(matrix, expected);
  });

  // it("should rotate a 4x4 matrix", function () {
  //   const rotateImage = new RotateImage();
  //   const matrix = [
  //     [5, 1, 9, 11],
  //     [2, 4, 8, 10],
  //     [13, 3, 6, 7],
  //     [15, 14, 12, 16],
  //   ];
  //   const expected = [
  //     [11, 10, 2, 5],
  //     [9, 8, 4, 1],
  //     [1, 4, 8, 9],
  //     [15, 7, 10, 11],
  //   ];
  //   rotateImage.rotate(matrix);
  //   assert.deepStrictEqual(matrix, expected);
  // });

  // it("should rotate a 2x2 matrix", function () {
  //   const rotateImage = new RotateImage();
  //   const matrix = [
  //     [1, 2],
  //     [3, 4],
  //   ];
  //   const expected = [
  //     [3, 1],
  //     [4, 2],
  //   ];
  //   rotateImage.rotate(matrix);
  //   assert.deepStrictEqual(matrix, expected);
  // });

  it("should handle an empty matrix", function () {
    const rotateImage = new RotateImage();
    const matrix = [];
    const expected = [];
    rotateImage.rotate(matrix);
    assert.deepStrictEqual(matrix, expected);
  });

  it("should handle a 1x1 matrix", function () {
    const rotateImage = new RotateImage();
    const matrix = [[1]];
    const expected = [[1]];
    rotateImage.rotate(matrix);
    assert.deepStrictEqual(matrix, expected);
  });
});
