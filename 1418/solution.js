const displayTable = orders => {

    const food = new Set()
    const count = new Map()

    for (const order of orders) {
        const foodItem = order[2]
        const table = parseInt(order[1])
        food.add(foodItem)
        const map = count.get(table) || new Map()
        map.set(foodItem, (map.get(foodItem) || 0) + 1)
        count.set(table, map)
    }

    lenFood = food.size
    const res = []
    const title = []
    for (const foodItem of food) {
        title.push(foodItem)
    }
    title.sort()
    title.unshift('Table')
    res.push(title)
    const tables = []
    for (const table of count.keys()){
        tables.push(table)
    }
    tables.sort((a, b) => a - b)
    const lenCount = tables.length

    for (let i = 0; i < lenCount; i++) {
        const temp = []
        const table = tables[i]
        temp.push(table.toString())
        for (let j = 1; j < lenFood+1; j++) {
            const food = title[j]
            temp.push((count.get(table).get(food) || 0).toString())
        }
        res.push(temp)
    }

    return res

}

const orders = [["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]

console.log(displayTable(orders))