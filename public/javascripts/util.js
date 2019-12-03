function getRandomNumber(start, end, fixed = 0) {
    let differ = end - start
    let random = Math.random()
    return Number((start + differ * random).toFixed(fixed))
}

function getScore() {
    let arr = ['4.7', '4.8', '4.9'];
    return arr[getRandomNumber(0, arr.length - 1)];
}