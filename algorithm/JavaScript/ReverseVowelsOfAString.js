/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let l = 0, r = s.length - 1;
  const res = new Array(s.length).fill('')
  while (l <= r) {
    if (vowels.indexOf(s[l]) !== -1 && vowels.indexOf(s[r]) !== -1) {
      res[l] = s[r];
      res[r] = s[l];
      l += 1;
      r -= 1;
    }

    if (vowels.indexOf(s[l]) === - 1) {
      res[l] = s[l];
      l += 1
    }

    if (vowels.indexOf(s[r]) === -1) {
      res[r] = s[r];
      r -= 1
    }
  }
  return res.join('')
};