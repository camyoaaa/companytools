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
        return Number(String(str).replace(',', ''));
    }
    return parseInt(String(str).replace(',', ''));
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
        let d = getRandomNumber(toNormalNumber(i.max) / 10, toNormalNumber(i.max));
        return {
            ...i,
            d: d.toLocaleString(),
            c: Number(toNormalNumber(i.max, false) - d).toLocaleString()
        }
    });
    return grade[getRandomNumber(0, grade.length - 1)]
}


function getPDDTitle() {
    var randomTitle = ['南极人卡尚莱品专卖店', '潇潇男鞋', '创美益服饰专营店', '匹跑服饰专营店', '香约纸品专卖店', 'U哈家纺', '卡信互联图书专营店'];
    return randomTitle[getRandomNumber(0, randomTitle.length)];
}