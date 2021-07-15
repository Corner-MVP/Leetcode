import collections
class Solution:
    def displayTable(self, orders):

        graph = collections.defaultdict(dict)
        food = set()

        for order in orders:
            table = order[1]
            foodItem = order[2]
            if foodItem not in graph[table]:
                graph[table][foodItem] = 0
            graph[table][foodItem] += 1
            food.add(foodItem)
        
        res = []
        title = ['Table']
        title += list(sorted(food))
        res.append(title)

        sequence = list(graph.keys())
        sequence.sort(key = lambda x: int(x))
        

        for i in range(len(sequence)):
            table = sequence[i]
            temp = [table]
            for key in title[1:]:
                if key not in graph[table]:
                    temp.append('0')
                else:
                    temp.append(str(graph[table][key]))
            res.append(temp)
        
        return res

        
        
        