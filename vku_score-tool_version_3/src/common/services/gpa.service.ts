import { IScore, ScoreCh } from '@/common/interfaces/score';

const gpaMap: Record<ScoreCh, number> = {
    'A': 4.0,
    'B': 3.0,
    'C': 2.0,
    'D': 1.0,
    'F': 0.0,
};

// Hàm chuyển đổi điểm chữ thành giá trị GPA
function convertScoreChToGPA(scoreCh: ScoreCh | null | ''): number {
    if (scoreCh === null || scoreCh === '') return 0.0;
    return gpaMap[scoreCh as ScoreCh];
}

// Hàm tính GPA từ danh sách các điểm
export function calculateGPA(scores: IScore[]): { gpa: number, gpaNew: number, difference: number, allTinChi: number, gpa10: number } {
    if (scores.length === 0) return { gpa: 0.0, gpaNew: 0.0, difference: 0.0, allTinChi: 0, gpa10: 0.0 };

    let totalGPA = 0;
    let totalCredits = 0;
    let totalGPANew = 0;
    let totalCreditsNew = 0;
    let totalGPA10 = 0;
    let allTinChi = 0;

    for (const score of scores) {
        const credits = score.countTC || 0;
        allTinChi += credits;

        if (score.scoreCh !== null) {
            totalGPA += convertScoreChToGPA(score.scoreCh as ScoreCh) * credits;
            totalCredits += credits;
        }

        const effectiveScoreCh = score.scoreChChange !== null ? score.scoreChChange : score.scoreCh;
        if (effectiveScoreCh !== null) {
            totalGPANew += convertScoreChToGPA(effectiveScoreCh as ScoreCh) * credits;
            totalCreditsNew += credits;
        }

        if (score.scoreT10 !== null && score.scoreT10 !== undefined) {
            totalGPA10 += score.scoreT10 * credits;
        }
    }

    const gpa = totalCredits === 0 ? 0.0 : totalGPA / totalCredits;
    const gpaNew = totalCreditsNew === 0 ? 0.0 : totalGPANew / totalCreditsNew;
    const difference = gpaNew - gpa;

    const gpa10 = allTinChi === 0 ? 0.0 : totalGPA10 / allTinChi;

    return { gpa, gpaNew, difference, allTinChi, gpa10 };
}
