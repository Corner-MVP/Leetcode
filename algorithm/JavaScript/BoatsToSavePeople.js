/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  let res = 0;
  people.sort((a, b) => a - b)
  let light = 0, heavy = people.length - 1
  while (light <= heavy) {
      if (people[light] + people[heavy] > limit) {
          heavy -= 1
      } else {
          heavy -= 1
          light += 1
      }
      res += 1
  }
  return res
};