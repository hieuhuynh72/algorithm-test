function getPalindrome(string) {
  const middleIndex = string.length / 2;
  const left = string.substring(0, Math.floor(middleIndex)).split("");
  const right = string.substring(Math.ceil(middleIndex)).split("").reverse();

  for (let i = 0; i < left.length; i++) {
    if (left[i] !== right[i] && left[i] !== "?" && right[i] !== "?") {
      return "NO";
    } else if (left[i] === "?" && right[i] === "?") {
      left[i] = "a";
      right[i] = "a";
    } else if (left[i] === "?") {
      left[i] = right[i];
    } else {
      right[i] = left[i];
    }
  }

  return [...left, ...right.reverse()].join("");
}

console.log(getPalindrome("?ab??a"));
console.log(getPalindrome("bab??a"));
console.log(getPalindrome("?a?"));
