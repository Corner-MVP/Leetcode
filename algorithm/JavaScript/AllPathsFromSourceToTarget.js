/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
  const len = graph.length;
  const visited = new Array(len).fill(0);
  let res = [];
  const dfs = (start, end, visited, path, graph) => {
    if (start === end) {
      res.push(path.slice())
      return
    }
    for (const vertex of graph[start]) {
      if (!visited[vertex]) {
        visited[vertex] = 1
        path.push(vertex)
        dfs(vertex, end, visited, path, graph)
        path.pop()
        visited[vertex] = 0
      }
    }
  }
  dfs(0, len - 1, visited, [0], graph);
  return res;
};