class Solution:
    def corpFlightBookings(self, bookings, n):

        res = [0 for _ in range(n)]

        for start, end, value in bookings:
            res[start - 1] += value
            if end < n:
                res[end] -= value
        
        for i in range(1, n):
            res[i] += res[i - 1]
        
        return res