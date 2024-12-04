const assert = require("assert");
const ValidPalindrome = require("./valid_palindrome");

describe("ValidPalindrome", function () {
  it("should return true for a valid palindrome", function () {
    const validPalindrome = new ValidPalindrome();
    assert.strictEqual(
      validPalindrome.isPalindrome("A man, a plan, a canal: Panama"),
      true
    );
  });

  it("should return false for an invalid palindrome", function () {
    const validPalindrome = new ValidPalindrome();
    assert.strictEqual(validPalindrome.isPalindrome("race a car"), false);
  });

  it("should return true for an empty string", function () {
    const validPalindrome = new ValidPalindrome();
    assert.strictEqual(validPalindrome.isPalindrome(""), true);
  });

  it("should return true for a string with only non-alphanumeric characters", function () {
    const validPalindrome = new ValidPalindrome();
    assert.strictEqual(validPalindrome.isPalindrome("!!!"), true);
  });

  it("should return true for a single character string", function () {
    const validPalindrome = new ValidPalindrome();
    assert.strictEqual(validPalindrome.isPalindrome("a"), true);
  });

  it("should return true for a string with mixed case letters", function () {
    const validPalindrome = new ValidPalindrome();
    assert.strictEqual(
      validPalindrome.isPalindrome("Able was I ere I saw Elba"),
      true
    );
  });
});
