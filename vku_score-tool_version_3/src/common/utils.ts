import { IScore, ScoreCh } from '@/common/interfaces/score';

export const isScoreArray = (data: any): data is IScore[] => {
    if (!Array.isArray(data)) {
        return false;
    }

    return data.every(item => {
        if (typeof item !== 'object' || item === null) {
            return false;
        }

        const {
            value,
            key,
            id,
            name,
            countTC,
            countLH,
            scoreCC,
            scoreBT,
            scoreGK,
            scoreCK,
            scoreT10,
            scoreCh,
            scoreChChange,
            semester,
        } = item;

        const isValidScoreCh = (score: any): score is ScoreCh | null => {
            const validScores: ScoreCh[] = ["A", "B", "C", "D", "F"];
            return score === null || validScores.includes(score);
        };

        return (
            typeof value === 'string' &&
            (typeof key === 'number' || key === null || key === undefined) &&
            typeof id === 'number' &&
            typeof name === 'string' &&
            (typeof countTC === 'number' || countTC === null || countTC === undefined) &&
            (typeof countLH === 'number' || countLH === null || countLH === undefined) &&
            (typeof scoreCC === 'number' || scoreCC === null || scoreCC === undefined) &&
            (typeof scoreBT === 'number' || scoreBT === null || scoreBT === undefined) &&
            (typeof scoreGK === 'number' || scoreGK === null || scoreGK === undefined) &&
            (typeof scoreCK === 'number' || scoreCK === null || scoreCK === undefined) &&
            (typeof scoreT10 === 'number' || scoreT10 === null || scoreT10 === undefined) &&
            isValidScoreCh(scoreCh) &&
            isValidScoreCh(scoreChChange) &&
            (typeof semester === 'string' || semester === null || semester === undefined)
        );
    });
};
