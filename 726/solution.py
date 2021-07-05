class Solution:
    def countOfAtoms(self, formula):
      length = len(formula)
      stack = [{}]
      index = 0

      while index < length:
        ch = formula[index]
        if ch == '(':
          index += 1
          stack.append({})
        elif ch == ')':
          index += 1
          num, index = self.getNum(formula, index)
          popDict = stak.pop()
          topDict = stack[-1]
          for key, value in popDict:
            topDict[key] = value * num if not topDict.has_key(key) else topDict[key] + value * num
        else:
          atom, index = self.getAtom(formula, index)
          num, index = self.getAtom(formula, index)
          topDict = stack[-1]
          topDict[atom] = num if not topDict.has_key(atom) else topDict[atom] + num
      
      lastDict = stack.pop()
      order = lastDict.keys().sort()
      res = ''
      for ch in order:
        res += ch + str(lastDict[ch])
      
      return res

    
    def getNum(self, formula, index):
      res = []
      res.append(formula[index])
      while index < len(formula) and formula[index].islower():
        res.append(formula[index])
        index += 1
      
      return ''.join(res), index

    def getAtom(self, formula, index):
      if index == len(formula) or !formula[index].isdigit():
        return 1
      
      num = 0
      while index < len(formula) and formula[index].isdigit():
        num = num * 10 + int(formula[index])
        index += 1
      
      return num, index