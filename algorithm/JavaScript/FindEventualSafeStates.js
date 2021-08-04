/**
 * @param {number[][]} graph
 * @return {number[]}
 */
 var eventualSafeNodes = function(graph) {
    
  const n = graph.length
  const color = new Array(n).fill(0)

  const dfs = (node) => {

    if (color[node] > 0) {
      return color[node] === 2
    }
    color[node] = 1
    for (const nextNode of graph[node]) {
      if (!dfs(nextNode)) return false
    }
    color[node] = 2
    return true

  }
  const res = []
  for (let i = 0; i < n; i++) {
    dfs(i) ? res.push(i) : null
  }
  return res

};