var groupAnagrams = function(strs) {

  const map = new Object()
  for (const str of strs) {
    const alpha = new Array(26).fill(0)
    for (const letter of str) {
      const num = letter.charCodeAt() - 'a'.charCodeAt()
      alpha[num] += 1
    }
    map[count] ? map[count].push(str) : map[count] = [str]
  }
  return Object.values(map)

};

var groupAnagrams = function(strs) {
  const map = new Object();
  for (let s of strs) {
      const count = new Array(26).fill(0);
      for (let c of s) {
          count[c.charCodeAt() - 'a'.charCodeAt()]++;
      }
      map[count] ? map[count].push(s) : map[count] = [s];
  }
  return Object.values(map);
};