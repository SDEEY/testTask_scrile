function getPairs(initialArray, sum) {
    const pairs = [];

    let newArray = initialArray

    initialArray.forEach((e, index) => {
        const number = newArray.find((el, ind) => e + el === sum && ind !== 0)

        if (number || number === 0) {
            const indexOfNumber = newArray.findIndex(e1 => e1 === number)
            const indexOfNumber2 = newArray.findIndex(e2 => e2 === e)

            newArray = newArray.filter((value, i) => i !== indexOfNumber2 && i !== indexOfNumber)

            pairs.push([e, number])
        } else {
            let indexOfNumber3 = newArray.findIndex(e3 => e3 === e)
            newArray = newArray.filter((value, i) => i !== indexOfNumber3)
        }

    });

    return pairs
}

console.log(getPairs([-5, 33, 2, 2, 3, 5, 0, 10, 3], 5))
// [[-5, 10], [2, 3], [2, 3], [5, 0]]
console.log(getPairs([22, 3, 5, 0, 2, 2], 5))
// [[3, 2], [5, 0]]
console.log(getPairs([5, 5, 5, 0, 0, 0, 5], 5))
// [[5, 0], [5, 0], [5, 0]]
console.log(getPairs([3, 3, 6, 0], 6))
// [[3, 3], [6, 0]]
