var countOfAtoms = function(formula) {
  
  let index = 0
  const len = formula.length
  const stack = [new Map()]

  while (index < len) {
    const ch = formula[index]

    const getAtom = () => {
      const res = []
      res.push(formula[index])
      while (index < len && formula[index] >= 'a' && formula[index] <= 'z') {
        res.push(formula[index])
        index += 1
      }
      return res.join('')
    }

    const getNum = () => {
      if (index === len || isNan(Number(formula[index]))) return 1

      let num = 0
      while (index < len && !isNan(Number(formula[index]))) {
        num = num * 10 + formula[index].charCodeAt() - '0'.charCodeAt();
        index += 1
      }
    }

    if (ch === '(') {
      index += 1;
      stack.unshift(new Map());
    } else if (ch === ')') {
      index += 1
      const num = getNum()
      popMap = stack.shift()
      topMap = stack[0]
      for (const [key, value] of popMap.entries()) {
        topMap.set(key, topMap[key] || 0 + value * num)
      }
    } else {
      const atom = getAtom()
      const num = getNum()
      const topMap = stack[0]
      topMap.set(atom, topMap[atom] || 0 + num)
    }

  }

  let map = stack.pop()
  map = Array.form(map)
  map.sort()
  const res = []
  for (const [key, value] of map) {
    res.push(key)
    if (value > 1) {
      res.push(value)
    }
  }

  return res.join('')

}