class Solution:
    def numRescueBoats(self, people, limit):
        res = 0
        people.sort()
        light, heavy = 0, len(people) - 1

        while light <= heavy:
            if people[light] + people[heavy] > limit:
                heavy -= 1
            else:
                light += 1
                heavy -= 1
            res += 1
        
        return res