/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
  const res = new Array(n).fill(0);
  
  for (const pair of bookings) {
      const start = pair[0], end = pair[1], value = pair[2];
      res[start - 1] += value;
      if (end < n) res[end] -= value;
  }
  
  for (let i = 1; i < n; i++) {
      res[i] += res[i - 1];
  }
  return res
};