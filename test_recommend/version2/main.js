let scoreUserAll = scoreUser.scoreAll;

let result = {}

for (let i = 0; i < scoreUserAll.length; i ++) {
    let count = 0
    let sum = 0
    let nameSujectY = scoreUserAll[i]['name'];

    for (let j = 1; j < scoreUserAll.length; j++) {
        let nameSujectX = scoreUserAll[j]['name'];
        if (linear[nameSujectY] !== undefined) {
            if (linear[nameSujectY][nameSujectX] !== undefined) {
                if (linear[nameSujectY][nameSujectX]['static'] ===  "True") {
                    let slope = linear[nameSujectY][nameSujectX]['slope']
                    let intercept = linear[nameSujectY][nameSujectX]['intercept']
                    let scoreX =  scoreUserAll[i]['scoreT10']
                    let scoreY =  parseFloat(slope) * parseFloat(scoreX) + parseFloat(intercept);
                    count++;
                    sum = parseFloat(sum) + parseFloat(scoreY);
                }
            }
        }
    }
    let meanScoreY = (count == 0) ? 0 : (sum / count);
    result[nameSujectY] = {
        "scorePredict" : meanScoreY,
        "scoreT10": scoreUserAll[i]['scoreT10'],
        "scoreCh": scoreUserAll[i]['scoreCh'],
        "name": scoreUserAll[i]['name'],
        "countTC": scoreUserAll[i]['countTC'],
    }
}
console.log(result)
    