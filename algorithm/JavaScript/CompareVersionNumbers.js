/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {

  let p1 = 0, p2 = 0
  const len1 = version1.length, len2 = version2.length
  
  while (p1 < len1 || p2 < len2) {
      
      let i1 = getNextChunk(version1, len1, p1).res
      p1 = getNextChunk(version1, len1, p1).start
      
      let i2 = getNextChunk(version2, len2, p2).res
      p2 = getNextChunk(version2, len2, p2).start
      
      if (i1 !== i2) {
          return i1 > i2 ? 1 : -1
      }
      
      
  }
  
  return 0
  
};

let getNextChunk = (version, length, start) => {
  
  if (start > length - 1) return{ res: 0, start}
  
  let index = start
  
  while (index < length && version[index] !== '.') {
      index += 1
  }
  console.log('index is: ', index)
  const res = index >= length ? Number(version.substring(start, length)) : Number(version.substring(start, index))
  
  start = index + 1
  
  return {res, start}
  
}