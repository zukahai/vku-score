import React from 'react';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import RecommendScoreTable from '@/view/score/RecomendScore';
import { useScore } from '@/view/score/ScoreProvider';


const RecommendScoreTableDialog: React.FC = () => {
    const { state, dispatch } = useScore();
    const { toggleShowRecommend } = state;

    const onClose = () => {
        dispatch({ type: 'TOGGLE_SHOW_RECOMMEND' });
    };
    return (
        <Dialog open={toggleShowRecommend} onClose={onClose} maxWidth='lg' fullWidth>
            <DialogContent>
                <RecommendScoreTable />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color='primary'>
                    Đóng
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RecommendScoreTableDialog;