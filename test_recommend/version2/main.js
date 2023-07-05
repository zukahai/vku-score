let scoreUserAll = scoreUser.scoreAll;

let result = {}
let recommendHocPhan = []

for (let i = 0; i < scoreUserAll.length; i ++) {
    if (scoreUserAll[i]['scoreT10'] === '') continue;
    
    let count = 0
    let sum = 0
    let nameSujectY = scoreUserAll[i]['name'];

    for (let j = 0; j < scoreUserAll.length; j++) {
        if (scoreUserAll[j]['scoreT10'] === '') continue;
        let nameSujectX = scoreUserAll[j]['name'];
        if (linear[nameSujectY] !== undefined) {
            if (linear[nameSujectY][nameSujectX] !== undefined) {
                if (linear[nameSujectY][nameSujectX]['static'] ===  "True") {
                    let slope = linear[nameSujectY][nameSujectX]['slope']
                    let intercept = linear[nameSujectY][nameSujectX]['intercept']
                    let scoreX =  scoreUserAll[j]['scoreT10']
                    let scoreY =  parseFloat(slope) * parseFloat(scoreX) + parseFloat(intercept);
                    count++;
                    sum = parseFloat(sum) + parseFloat(scoreY);

                    // if (nameSujectY == 'Cấu trúc dữ liệu và giải thuật') {
                    //     console.log(scoreY, scoreX, nameSujectX)
                    // }
                }
            }
        }
    }
    let meanScoreY = (count == 0) ? 0 : (sum / count);
    result[nameSujectY] = {
        "name": scoreUserAll[i]['name'],
        "scorePredict" : meanScoreY,
        "scoreT10": scoreUserAll[i]['scoreT10'],
        "difference": meanScoreY - scoreUserAll[i]['scoreT10'],
        "scoreCh": scoreUserAll[i]['scoreCh'],
        "countTC": scoreUserAll[i]['countTC'],
    }
}

// convert to array
for (let subject in result)
recommendHocPhan.push({
    "name": subject,
    "scorePredict" : result[subject]['scorePredict'],
    "scoreT10": result[subject]['scoreT10'],
    "difference": result[subject]['scorePredict'] - result[subject]['scoreT10'],
    "scoreCh": result[subject]['scoreCh'],
    "countTC": result[subject]['countTC'],
})

recommendHocPhan.sort((a, b) => {
    return b.difference - a.difference
})

console.log(recommendHocPhan)

    