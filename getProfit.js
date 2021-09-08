function getProfit(arr) {
    let newArray = arr

    let diff_s = []

    let result = null

    newArray.forEach(e => {
        const res = newArray.filter(el => el > e)
        newArray = newArray.filter((element, index) => index !== 0)

        const minValue = Math.min(e, ...res)
        const maxValue = Math.max(e, ...res)
        const diff = maxValue - minValue

        diff_s.push(diff)
    })

    const maxIndex = diff_s.reduce((highestIndex, element, index, array) => {
        return element > array[highestIndex] ? index : highestIndex;
    }, 0);

    const indexOfNumber = arr.findIndex(e1 => e1 === arr[[maxIndex]] + diff_s[maxIndex])

    result = [maxIndex, indexOfNumber]

    if(maxIndex === 0 && indexOfNumber === 0){
        return []
    } else {
        return result
    }
}

console.log(getProfit([13, 6, 3, 4, 10, 2, 3]))
// result: [2, 4]
console.log(getProfit([6, 5, 4, 3]))
// result: []
console.log(getProfit([3, 3, 3, 3]))
// result: []
