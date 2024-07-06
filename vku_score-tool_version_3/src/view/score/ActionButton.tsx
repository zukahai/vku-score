import { Tooltip } from '@mui/material';
import Fab from '@mui/material/Fab';
import { Add, QuestionMark } from '@mui/icons-material';
import React, { useCallback } from 'react';
import { keyframes, styled } from '@mui/system';
import { useScore } from '@/view/score/ScoreProvider';

const subtlePulseAndRotate = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.05);
  }
`;
const FloatingButtonContainerRight = styled('div')({
    position: 'fixed',
    bottom: 10,
    right: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    zIndex: 1000,
});

const FloatingButtonContainerLeft = styled('div')({
    position: 'fixed',
    bottom: 10,
    left: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    zIndex: 1000,
});

const FabStyled = styled(Fab)({
    animation: `${subtlePulseAndRotate} 1s infinite`,
});
const ActionButton = () => {
    const { dispatch, state } = useScore();
    const { scores } = state;
    const toggleDialog = useCallback(() => {
        dispatch({ type: 'TOGGLE_DIALOG' });
    }, [dispatch]);

    const toggleTutorial = useCallback(() => {
        dispatch({ type: 'TOGGLE_SHOW_TUTORIAL' });
    }, [dispatch]);
    const toggleRecommend = useCallback(() => {
        dispatch({ type: 'TOGGLE_SHOW_RECOMMEND' });
    }, [dispatch]);
    return (
        <>
            <FloatingButtonContainerLeft>
                <Tooltip onClick={toggleDialog} title={'Thêm học phần'} arrow>
                    <Fab color='primary' size={'medium'} aria-label='add'>
                        <Add />
                    </Fab>

                </Tooltip>
                <Tooltip title={'Xem hướng dẫn'} arrow>
                    <Fab onClick={toggleTutorial} color='warning' size={'medium'} aria-label='add'>
                        <QuestionMark />
                    </Fab>

                </Tooltip>

            </FloatingButtonContainerLeft>
            {scores.length > 0 && (<FloatingButtonContainerRight>
                <Tooltip title={'Gợi ý cải thiện học phần'} arrow>
                    <FabStyled variant={'extended'} color='success' aria-label='add' size={'medium'}
                               onClick={toggleRecommend}>
                        Gợi ý cải thiện học phần
                    </FabStyled>
                </Tooltip>
            </FloatingButtonContainerRight>)}
        </>
    );
};


export default ActionButton;