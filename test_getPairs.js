function getPairs(initialArray, sum) {
    const pairs = [];

    let newArray = initialArray

    initialArray.forEach((e, index) => {
        const number = newArray.find((el, ind) => e + el === sum && ind !== 0)

        if(number || number === 0){
            const indexOfNumber = newArray.findIndex(e1 => e1 === number)
            const indexOfNumber2 = newArray.findIndex(e2 => e2 === e)

            newArray = newArray.filter((value, i) =>i !== indexOfNumber2 && i !== indexOfNumber)

            pairs.push([e, number])
        } else {
            let indexOfNumber3 = newArray.findIndex(e3 => e3 === e)
            newArray = newArray.filter((value, i) =>i !== indexOfNumber3)
        }

    });

    return pairs
}

function resultsMatched(array, sum, expectedArr) {
    const filterNewArrayReusable = (e) => {
        const e_finded = newArray.find((e_find, i_find) => {
            let bool = e_find.every((value, i) => value === e[i])
            return bool === true || (e_find[0] === e[1] && e_find[1] === e[0])
        })

        if(e_finded){
            newArray = newArray.filter((e_filter, i_filter) => {
                return e_filter[0] !== e_finded[0] || e_filter[1] !== e_finded[1]
            })
        }
    }

    let res = getPairs(array, sum);

    let newArray = expectedArr

    let boolean = ''

    if(res.length !== expectedArr.length){
        console.log(false)
    } else {
        res.forEach((e, index) => {
            boolean = e.every((value, i) => value === expectedArr[index][i])

            if(boolean === false){
                if(e[0] === expectedArr[index][1] && e[1] === expectedArr[index][0]){
                    filterNewArrayReusable(e)
                } else { filterNewArrayReusable(e) }

            } else { filterNewArrayReusable(e) }
        })
    }

    if(newArray.length === 0){
        return true
    } else {
        return false
    }

}

console.log(resultsMatched([-5, 33, 2, 2, 3, 5, 0, 10, 3], 5, [[ -5, 10], [2, 3], [5, 0], [3, 2]]))