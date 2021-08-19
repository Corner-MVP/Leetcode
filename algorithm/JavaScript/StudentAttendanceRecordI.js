/**
 * @param {string} s
 * @return {boolean}
 */
 var checkRecord = function(s) {
  n = s.length;
  let absent = 0, late = 0;
  for (let i = 0; i < n; i ++) {
      if (s[i] === 'A') {
          absent += 1;
      } else if (s[i] === 'L') {
          let index = 0;
          while (i < n && s[i] === 'L') {
              i += 1;
              index += 1;
          }
          i -= 1;
          late = Math.max(index, late);
      }
  }
  return absent < 2 && late < 3 ? true : false;
};