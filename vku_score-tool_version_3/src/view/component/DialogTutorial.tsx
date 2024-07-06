import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Tutorial from '@/view/component/Tutorial';
import { useScore } from '@/view/score/ScoreProvider';

const TutorialDialog: React.FC = () => {


    const { state, dispatch } = useScore();
    const { toggleShowTutorial } = state;

    const handleClose = () => {
        dispatch({ type: 'TOGGLE_SHOW_TUTORIAL' });
    };

    return (

        <Dialog open={toggleShowTutorial} onClose={handleClose} maxWidth='lg' fullWidth>
            <DialogTitle>Hướng dẫn sử dụng</DialogTitle>
            <DialogContent dividers>
                <Tutorial />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color='primary'>
                    Đóng
                </Button>
            </DialogActions>
        </Dialog>

    );
};

export default TutorialDialog;
