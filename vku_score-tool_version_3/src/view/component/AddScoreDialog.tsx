import React, { useEffect, useState } from 'react';
import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    MenuItem,
    TextField,
    Typography,
} from '@mui/material';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { IScore } from '@/common/interfaces/score';
import { useScore } from '@/view/score/ScoreProvider';
import { Controller, useForm } from 'react-hook-form';
import { literal, minLength, minValue, nullable, number, object, pipe, string, union } from 'valibot';

const schema = object({
    name: pipe(string(), minLength(3, 'Tên học phần phải có ít nhất 3 ký tự')),
    countTC: pipe(number('Số tín chỉ phải là số'), minValue(1, 'Số tín chỉ phải lớn hơn 0')),
    countLH: nullable(number()),
    scoreCC: nullable(number()),
    scoreBT: nullable(number()),
    scoreGK: nullable(number()),
    scoreCK: nullable(number()),
    scoreT10: pipe(number(), minValue(0, 'Điểm hệ 10 phải lớn hơn hoặc bằng 0')),
    scoreCh: union([
        literal('A'),
        literal('B'),
        literal('C'),
        literal('D'),
        literal('F'),
    ]),
    scoreChChange: nullable(string()),
    semester: nullable(string()),
});
const getAllSemester = (scores: IScore[]): string[] => {
    const semesters: string[] = [];
    scores.forEach((score) => {
        if (score.semester && !semesters.includes(score.semester)) {
            semesters.push(score.semester);
        }
    });
    return semesters;
};
const AddScoreDialog: React.FC = () => {
    const { dispatch, state } = useScore();
    const { toggleDialog, scores } = state;
    const [isShowExtra, setIsShowExtra] = useState(false);
    const [semesters, setSemesters] = useState<string[]>(getAllSemester(scores));

    useEffect(() => {
        setSemesters(getAllSemester(scores));
    }, [scores]);

    const { control, handleSubmit, reset, formState: { errors } } = useForm<IScore>({
        resolver: valibotResolver(schema),
        defaultValues: {
            id: 0,
            name: '',
            value: '',
            countTC: null,
            countLH: null,
            scoreCC: null,
            scoreBT: null,
            scoreGK: null,
            scoreCK: null,
            scoreT10: null,
            scoreCh: null,
            scoreChChange: null,
            semester: null,
        },
    });

    const handleClose = () => {
        reset();
        dispatch({ type: 'TOGGLE_DIALOG' });
    };

    const onSubmit = (data: IScore) => {
        dispatch({ type: 'ADD_SCORE', payload: { ...data, id: Math.random() } });
        handleClose();
    };

    return (
        <div>
            <Dialog open={toggleDialog} onClose={handleClose}>
                <DialogTitle>
                    <Box flex={1} display='flex' justifyContent='space-between'>
                        <Typography variant='h6' component='div'>
                            Thêm học phần
                        </Typography>
                        <FormControlLabel
                            label='Hiển thị thêm thông tin'
                            control={
                                <Checkbox
                                    checked={isShowExtra}
                                    onChange={() => setIsShowExtra(!isShowExtra)}
                                />
                            }
                        />
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <Controller
                        name='name'
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin='dense'
                                label='Tên học phần'
                                type='text'
                                fullWidth
                                error={!!errors.name}
                                helperText={errors.name ? errors.name.message : ''}
                            />
                        )}
                    />
                    <Controller
                        name='countTC'
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin='dense'
                                label='Số tín chỉ'
                                type='number'
                                onChange={
                                    (e) => field.onChange(Number(e.target.value))
                                }
                                fullWidth
                                error={!!errors.countTC}
                                helperText={errors.countTC ? errors.countTC.message : ''}
                            />
                        )}
                    />
                    {isShowExtra && (
                        <>
                            <Controller
                                name='countLH'
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        margin='dense'
                                        label='Số lần học'
                                        type='number'
                                        fullWidth
                                        onChange={
                                            (e) => field.onChange(Number(e.target.value))
                                        }
                                        error={!!errors.countLH}
                                        helperText={errors.countLH ? errors.countLH.message : ''}
                                    />
                                )}
                            />
                            <Controller
                                name='scoreCC'
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        margin='dense'
                                        label='Điểm chuyên cần'
                                        type='number'
                                        onChange={
                                            (e) => field.onChange(Number(e.target.value))
                                        }
                                        fullWidth
                                        error={!!errors.scoreCC}
                                        helperText={errors.scoreCC ? errors.scoreCC.message : ''}
                                    />
                                )}
                            />
                            <Controller
                                name='scoreBT'
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        margin='dense'
                                        label='Điểm bài tập'
                                        type='number'
                                        onChange={
                                            (e) => field.onChange(Number(e.target.value))
                                        }
                                        fullWidth
                                        error={!!errors.scoreBT}
                                        helperText={errors.scoreBT ? errors.scoreBT.message : ''}
                                    />
                                )}
                            />
                            <Controller
                                name='scoreGK'
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        margin='dense'
                                        label='Điểm giữa kỳ'
                                        type='number'
                                        onChange={
                                            (e) => field.onChange(Number(e.target.value))
                                        }
                                        fullWidth
                                        error={!!errors.scoreGK}
                                        helperText={errors.scoreGK ? errors.scoreGK.message : ''}
                                    />
                                )}
                            />
                            <Controller
                                name='scoreCK'
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        margin='dense'
                                        label='Điểm cuối kỳ'
                                        onChange={
                                            (e) => field.onChange(Number(e.target.value))
                                        }
                                        type='number'
                                        fullWidth
                                        error={!!errors.scoreCK}
                                        helperText={errors.scoreCK ? errors.scoreCK.message : ''}
                                    />
                                )}
                            />
                        </>
                    )}
                    <Controller
                        name='scoreT10'
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin='dense'
                                label='Điểm hệ 10'
                                onChange={
                                    (e) => field.onChange(Number(e.target.value))
                                }
                                type='number'
                                fullWidth
                                error={!!errors.scoreT10}
                                helperText={errors.scoreT10 ? errors.scoreT10.message : ''}
                            />
                        )}
                    />
                    <Controller
                        name='scoreCh'
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                margin='dense'
                                label='Điểm chữ'
                                select
                                fullWidth
                                error={!!errors.scoreCh}
                                helperText={errors.scoreCh ? errors.scoreCh.message : ''}
                            >
                                {['A', 'B', 'C', 'D', 'F'].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        )}
                    />
                    <Controller
                        name='semester'
                        control={control}
                        render={({ field }) => (
                            <Autocomplete
                                {...field}
                                freeSolo
                                options={semesters}
                                onChange={(event, newValue) => {
                                    field.onChange(newValue);
                                }}
                                onInputChange={(event, newInputValue) => {
                                    field.onChange(newInputValue);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        margin='dense'
                                        label='Học kỳ'
                                        fullWidth
                                    />
                                )}
                            />
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <Button variant={'contained'} onClick={handleClose} color='error'>
                        Hủy
                    </Button>
                    <Button variant={'contained'} onClick={handleSubmit(onSubmit)} color='success'>
                        Thêm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AddScoreDialog;
