/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
 var escapeGhosts = function(ghosts, target) {
  const start = [0, 0];
  const distance = shortestDistance(start, target)
  for (const ghost of ghosts) {
      const ghostDistance = shortestDistance(ghost, target);
      if (ghostDistance <= distance) {
          return false;
      }
  }
  return true;
};

const shortestDistance = (start, end) => {
  return Math.abs(end[0] - start[0]) + Math.abs(end[1] - start[1]);
}