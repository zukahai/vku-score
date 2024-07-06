import { linearData } from '@/common/linear';
import { IScore } from '@/common/interfaces/score';

interface Subject {
    name: string;
    so_tin_chi: string;
    tags: string[];
}

const subjects: Subject[] = [];

interface HocPhan {
    id: number;
    name: string;
    countTC: number | string | null;
    countLH: number | string | null;
    scoreCC: number | string | null;
    scoreBT: number | string | null;
    scoreGK: number | string | null;
    scoreCK: number | string | null;
    scoreT10: number | string | null;
    scoreCh: number | string | null;
}

function findTagsByName(name: string | null | undefined, subjects: Subject[]): string[] | undefined {
    for (let i = 0; i < subjects.length; i++) {
        const subject = subjects[i];
        if (subject.name === name) {
            return subject.tags;
        }
    }
    return [];
}

export const recommend = (hocphan: IScore[]): (IScore & { difference: number, scorePredict: number })[] => {
    let tags: { [key: string]: { sum: number; count: number } } = {};

    const score: { [key: string]: number } = {
        A: 4,
        B: 3,
        C: 2,
        D: 1,
        F: 0,
        '': 4,
    };

    for (let i = 0; i < hocphan.length; i++) {
        const subject = hocphan[i];
        const tags_subject = findTagsByName(subject.name, subjects);

        if (tags_subject === undefined) {
            tags = { default: { sum: 0, count: 0 } };
        }

        if (Array.isArray(tags_subject)) {
            for (let j = 0; j < tags_subject.length; j++) {
                if (tags[tags_subject[j]] === undefined) {
                    tags[tags_subject[j]] = { sum: 0, count: 0 };
                }

                tags[tags_subject[j]].sum += score[subject.scoreCh || ''];
                tags[tags_subject[j]].count += 1;
            }
        }
    }

    const recommendHocPhan: (IScore & { difference: number, scorePredict: number })[] = [];

    for (let i = 0; i < hocphan.length; i++) {
        const subject = hocphan[i];
        let tags_subject = findTagsByName(subject.name, subjects);

        if (Array.isArray(tags_subject)) {
            tags_subject = tags_subject.sort((a, b) => {
                return tags[b].count - tags[a].count;
            });

            let sumScoreCh = 0;
            let countSubject = 0;
            let sum_difference = 0;

            for (let j = 0; j < tags_subject.length; j++) {
                sumScoreCh = tags[tags_subject[j]].sum;
                countSubject = tags[tags_subject[j]].count;
                sum_difference += (sumScoreCh / countSubject - score[subject.scoreCh || '']) / Math.pow(2, j);
            }

            sum_difference += subject.scoreCh == 'F' ? 10 : 0;

            recommendHocPhan.push({
                ...subject,
                difference: sum_difference,
                scorePredict: sumScoreCh / (countSubject || 1), // Chia cho countSubject để tránh chia cho 0
            });
        }
    }

    recommendHocPhan.sort((a, b) => {
        return b.difference - a.difference;
    });
    return recommendHocPhan;
};

interface ResultItem {
    id: number;
    name: string;
    scorePredict: number;
    scoreT10: number;
    difference: number;
    scoreCh: string;
    countTC: string;
}

interface Result {
    [subject: string]: ResultItem;
}

export const recommendLinear = (scores: IScore[]): (IScore & { difference: number, scorePredict: number })[] => {
    const result: Result = {};
    const recommendHocPhan: (IScore & { difference: number, scorePredict: number })[] = [];
    for (let i = 0; i < scores.length; i++) {
        if (((scores[i].scoreT10 || '') as string) === '') continue;
        let count = 0;
        let sum = 0;
        const nameSubjectY = scores[i].name;

        for (let j = 0; j < scores.length; j++) {
            if (((scores[j].scoreT10 || '') as string) === '') continue;
            const nameSubjectX: string = scores[j].name;
            if (linearData[nameSubjectY] !== undefined) {
                if (linearData[nameSubjectY][nameSubjectX] !== undefined) {
                    if (linearData[nameSubjectY][nameSubjectX].static === 'True') {
                        const slope = linearData[nameSubjectY][nameSubjectX].slope;
                        const intercept = linearData[nameSubjectY][nameSubjectX].intercept;
                        const scoreX: number = parseFloat((scores[j].scoreT10 || '0') as string);
                        const scoreY = parseFloat(slope) * scoreX + parseFloat(intercept);
                        count++;
                        sum = sum + scoreY;
                    }
                }
            }
        }
        const meanScoreY = count == 0 ? 0 : sum / count;
        result[nameSubjectY] = {
            id: scores[i].id,
            name: scores[i].name,
            scorePredict: meanScoreY,
            scoreT10: scores[i].scoreT10 || 0,
            difference: meanScoreY - (scores[i].scoreT10 || 0),
            scoreCh: scores[i].scoreCh || '',
            countTC: (scores[i].countTC || '') as string,
        };
    }

    // convert to array
    for (const subject in result) {
        recommendHocPhan.push({
            ...scores.find(s => s.name === subject)!,
            difference: result[subject].difference,
            scorePredict: result[subject].scorePredict,
        });
    }

    recommendHocPhan.sort((a, b) => {
        return b.difference - a.difference;
    });
    return recommendHocPhan;
};
