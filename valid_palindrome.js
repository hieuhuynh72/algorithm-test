class ValidPalindrome {
  isAlphanumeric(char) {
    return (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    );
  }

  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    let alphanumericString = "";

    for (const c of s) {
      if (this.isAlphanumeric(c)) alphanumericString += c.toLowerCase();
    }

    return (
      alphanumericString === alphanumericString.split("").reverse().join("")
    );
  }
}

module.exports = ValidPalindrome;
