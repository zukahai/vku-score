import React, { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from 'react';
import { IScore, ScoreCh } from '@/common/interfaces/score';
import { toast } from 'react-toastify';

// Định nghĩa interface cho state
interface ScoreState {
    scores: IScore[];
    toggleDialog: boolean;
    toggleUploadFile: boolean;
    toggleShowTutorial: boolean;
    toggleShowRecommend: boolean;
}

// Định nghĩa interface cho ScoreContext
interface ScoreContextType {
    state: ScoreState;
    dispatch: Dispatch<Action>;
}

// Khởi tạo giá trị mặc định cho state
const initialState: ScoreState = {
    scores: [],
    toggleDialog: false,
    toggleUploadFile: true,
    toggleShowTutorial: false,
    toggleShowRecommend: false,
};

// Định nghĩa type cho các hành động
type Action =
    | { type: 'ADD_SCORE'; payload: IScore }
    | { type: 'UPDATE_SCORE'; payload: { id: number; updatedScore: IScore } }
    | { type: 'DELETE_SCORE'; payload: { id: number } }
    | { type: 'TOGGLE_DIALOG' }
    | { type: 'SET_SCORES'; payload: IScore[] }
    | { type: 'CHANGE_SCORE_T10'; payload: { row: IScore; newValue: number } }
    | { type: 'TOGGLE_UPLOAD_FILE' }
    | { type: 'TOGGLE_SHOW_TUTORIAL' }
    | { type: 'TOGGLE_SHOW_RECOMMEND' }
    | { type: 'CHANGE_SCORE_CH'; payload: { row: IScore; newValue: ScoreCh } }
    | { type: 'RESET_SCORES' };

// Tạo ScoreContext với giá trị mặc định
const ScoreContext = createContext<ScoreContextType>({
    state: initialState,
    dispatch: () => undefined,
});

const generateIdUnique = (scores: IScore[]): number => {
    const ids = scores.map((score) => score.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
};

// Tạo reducer
const scoreReducer = (state: ScoreState, action: Action): ScoreState => {
    switch (action.type) {
        case 'ADD_SCORE':
            if (state.scores.find((s) => s.name === action.payload.name)) {
                return state;
            }
            action.payload.id = generateIdUnique(state.scores);
            toast.success(`Đã thêm học phần ${action.payload.name}`, {
                toastId: `add_score_${action.payload.id}`,
            });
            return { ...state, scores: [...state.scores, action.payload] };
        case 'UPDATE_SCORE':
            return {
                ...state,
                scores: state.scores.map((score) =>
                    score.id === action.payload.id ? action.payload.updatedScore : score,
                ),
            };
        case 'DELETE_SCORE':
            toast.error(`Đã xóa học phần`, {
                toastId: `delete_score_${action.payload.id}`,
            });
            return {
                ...state,
                scores: state.scores.filter((score) => score.id !== action.payload.id),
            };
        case 'SET_SCORES':
            return { ...state, scores: action.payload };
        case 'CHANGE_SCORE_CH':
            return {
                ...state,
                scores: state.scores.map((score) =>
                    score.id === action.payload.row.id
                        ? {
                            ...score,
                            scoreChChange: action.payload.newValue === action.payload.row.scoreCh ? null : action.payload.newValue,
                        }
                        : score,
                ),
            };
        case 'CHANGE_SCORE_T10':
            return {
                ...state,
                scores: state.scores.map((score) =>
                    score.id === action.payload.row.id
                        ? {
                            ...score,
                            scoreT10: action.payload.newValue,
                        }
                        : score,
                ),
            };
        case 'TOGGLE_DIALOG':
            return { ...state, toggleDialog: !state.toggleDialog };
        case 'TOGGLE_UPLOAD_FILE':
            return { ...state, toggleUploadFile: !state.toggleUploadFile };
        case 'TOGGLE_SHOW_TUTORIAL':
            return { ...state, toggleShowTutorial: !state.toggleShowTutorial };
        case 'TOGGLE_SHOW_RECOMMEND':
            return { ...state, toggleShowRecommend: !state.toggleShowRecommend };
        case 'RESET_SCORES':
            toast.info('Tất cả các điểm đã được đặt lại.', {
                toastId: 'reset_scores',
            });
            return initialState;
        default:
            return state;
    }
};

// Tạo ScoreProvider
const ScoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(scoreReducer, initialState);

    useEffect(() => {
        try {
            const localData = typeof window !== 'undefined' ? localStorage.getItem('scoreState') : null;
            if (localData) {
                const parsedData = JSON.parse(localData);
                if (parsedData) {
                    if (parsedData.scores.length > 0) {
                        dispatch({ type: 'TOGGLE_UPLOAD_FILE' });
                    }
                    dispatch({ type: 'SET_SCORES', payload: parsedData.scores });
                    // nếu scores.length > 0 thì hiện toggleUploadFile = false

                }
            }
        } catch (error) {
            console.error('Failed to load state from localStorage:', error);
        }
    }, []);

    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                localStorage.setItem('scoreState', JSON.stringify(state));
            }
        } catch (error) {
            console.error('Failed to save state to localStorage:', error);
        }
    }, [state]);

    return (
        <ScoreContext.Provider value={{ state, dispatch }}>
            {children}
        </ScoreContext.Provider>
    );
};

// Custom hook để sử dụng ScoreContext
const useScore = () => {
    const context = useContext(ScoreContext);
    if (context === undefined) {
        throw new Error('useScore must be used within a ScoreProvider');
    }
    return context;
};

export { ScoreProvider, useScore };
