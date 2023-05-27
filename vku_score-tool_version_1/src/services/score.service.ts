import { Score } from '../components/TableScore.tsx';

interface ScoreCount {
    countA: number;
    countB: number;
    countC: number;
    countD: number;
    countF: number;
    countTotal: number;
}

const initialScoreCount: ScoreCount = {
    countA: 0,
    countB: 0,
    countC: 0,
    countD: 0,
    countF: 0,
    countTotal: 0,
};

export class ScoreService {
    private scores: Score[] = [];
    private scoreCount: ScoreCount = initialScoreCount;

    public setScore(scores: Score[]) {
        this.scores = [...scores]; // Gán scores vào một mảng mới
        this.scoreCount = initialScoreCount;
        this.calcScoreCount();
    }

    public calcScoreCount() {
        this.scoreCount = { ...initialScoreCount }; // Gán initialScoreCount vào scoreCount
        this.scores.forEach((item) => {
            if (item.scoreCh === 'A') {
                this.scoreCount.countA += item.countTC || 0;
                this.scoreCount.countTotal += item.countTC || 0;
            } else if (item.scoreCh === 'B') {
                this.scoreCount.countB += item.countTC || 0;
                this.scoreCount.countTotal += item.countTC || 0;
            } else if (item.scoreCh === 'C') {
                this.scoreCount.countC += item.countTC || 0;
                this.scoreCount.countTotal += item.countTC || 0;
            } else if (item.scoreCh === 'D') {
                this.scoreCount.countD += item.countTC || 0;
                this.scoreCount.countTotal += item.countTC || 0;
            } else if (item.scoreCh === 'F') {
                this.scoreCount.countF += item.countTC || 0;
                this.scoreCount.countTotal += item.countTC || 0;
            }
        });
    }

    public calcGPA() {
        console.log(this.scoreCount);
        return (
            (4 * this.scoreCount.countA +
                3 * this.scoreCount.countB +
                2 * this.scoreCount.countC +
                1 * this.scoreCount.countD) /
            this.scoreCount.countTotal
        );
    }
}
