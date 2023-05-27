import subjects from '../datas/subject.json';
import { Score } from '../components/TableScore.tsx';

interface Subject {
    name: string;
    so_tin_chi: string;
    tags: string[];
}

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

export const recommend = (hocphan: Score[]) => {
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

    console.log(tags);

    const recommendHocPhan: {
        name: string;
        sumScoreCh: any;
        countTch: any;
        tags: string[];
        difference: number;
    }[] = [];

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
            sum_difference += ((subject.scoreCh == 'F') ? 10 : 0);

            recommendHocPhan.push({
                name: subject.name || '',
                sumScoreCh: subject.scoreCh,
                countTch: subject.countTC,
                tags: tags_subject,
                difference: sum_difference,
            });
        }
    }

    recommendHocPhan.sort((a, b) => {
        return b.difference - a.difference;
    });

    return recommendHocPhan;
};
