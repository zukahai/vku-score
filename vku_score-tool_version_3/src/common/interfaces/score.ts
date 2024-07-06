export type ScoreCh = "A" | "B" | "C" | "D" | "F";
export interface IScore {
    value: string;
    key?: number | null;
    id: number;
    name: string;
    countTC?: number | null;
    countLH?: number | null;
    scoreCC?: number | null;
    scoreBT?: number | null;
    scoreGK?: number | null;
    scoreCK?: number | null;
    scoreT10?: number | null;
    scoreCh?: ScoreCh | null ;
    scoreChChange?: ScoreCh | null;
    semester?: string | null;
}