/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {

    const relation = new Map()
    for (const group of prerequisites) {
      const child = group[0], parent = group[1]
      relation.get(parent) ? relation.get(parent).push(child) : relation.set(parent, [child])
    }

    const visited = new Array(numCourses).fill(0)

    const dfs = (node) => {

      if (visited[node] === 1) return false
      if (visited[node] === 2) return true
      
      visited[node] = 1
      if (relation.get(node)) {
        for (const nextNode of relation.get(node)) {
          if (!dfs(nextNode)) return false
        }
      }

      visited[node] = 2
      return true

    }

    for (let course = 0; course < numCourses; course++) {
      if (!dfs(course)) return false
    }
    return true

};