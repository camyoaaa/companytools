function getRandomNumber(start, end, fixed = 0) {
    let differ = end - start
    let random = Math.random()
    return Number((start + differ * random).toFixed(fixed))
}

function getScore() {
    let arr = ['4.7', '4.8', '4.9'];
    return arr[getRandomNumber(0, arr.length - 1)];
}

function toNormalNumber(str, int = true) {
    if (!int) {
        return Number(str.replace(',', ''));
    }
    return parseInt(str.replace(',', ''));
}

function getGrade() {
    let grade = [{
            g: 'LV1',
            max: '99.1'
        },
        {
            g: 'LV2',
            max: '999.1'
        },
        {
            g: 'LV3',
            max: '9,999.1'
        },
        {
            g: 'LV4',
            max: '99,999.1'
        }
    ]
    grade = grade.map((i) => {
        console.log(toNormalNumber(i.max) / 10, toNormalNumber(i.max), getRandomNumber(toNormalNumber(i.max) / 10, toNormalNumber(i.max)));
        let d = getRandomNumber(toNormalNumber(i.max) / 10, toNormalNumber(i.max));
        return {
            ...i,
            d,
            c: Number(toNormalNumber(i.max, false) - d).toLocaleString()
        }
    });
    console.log(grade[getRandomNumber(0, grade.length - 1)]);
    return grade[getRandomNumber(0, grade.length - 1)]
}