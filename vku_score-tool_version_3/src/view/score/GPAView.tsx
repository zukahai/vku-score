import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useScore } from '@/view/score/ScoreProvider';
import { calculateGPA } from '@/common/services/gpa.service';
import { toast } from 'react-toastify';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Title = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    fontWeight: 'bold',
}));

const MainTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
}));

const GpaDisplay: React.FC = () => {
    const { state } = useScore();
    const { scores } = state;
    const [gpa, setGpa] = useState(0.0);
    const [gpaNew, setGpaNew] = useState(0.0);
    const [difference, setDifference] = useState(0.0);
    const [gpa10, setGpa10] = useState(0.0);
    const [allTinChi, setAllTinChi] = useState(0);

    useEffect(() => {
        const { gpa, gpaNew, difference, gpa10, allTinChi } = calculateGPA(scores);
        setGpa(gpa);
        setGpaNew(gpaNew);
        setDifference(difference);
        setGpa10(gpa10);
        setAllTinChi(allTinChi);
        toast.success(`GPA đã được cập nhật thành ${gpaNew.toFixed(2)}`, {
            toastId: `update_gpa_${gpaNew}`,
        });
    }, [scores]);

    return (
        <Card variant='outlined' sx={{ marginTop: 2, marginBottom: 2 }}>
            <CardContent>
                <Box>
                    <Grid container spacing={3} justifyContent='center' alignItems='center'>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Item>
                                <HeaderTitle variant='h6'>GPA Cũ</HeaderTitle>
                                <MainTypography variant='h4' color='green'>
                                    {gpa.toFixed(2)}
                                </MainTypography>
                                <Typography variant='subtitle1' color='green'>
                                    {gpa.toFixed(8)}
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Item>
                                <HeaderTitle variant='h6'>GPA Mới</HeaderTitle>
                                <MainTypography variant='h4' color='green'>
                                    {gpaNew.toFixed(2)}
                                </MainTypography>
                                <Typography variant='subtitle1' color='green'>
                                    {gpaNew.toFixed(8)}
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Item>
                                <HeaderTitle variant='h6'>Độ Chênh Lệch </HeaderTitle>
                                <MainTypography variant='h4' color='green'>
                                    {difference.toFixed(3)}
                                </MainTypography>
                                <Typography variant='subtitle1' color='green'>
                                    {difference.toFixed(8)}
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Item>
                                <HeaderTitle variant='h6'>Điểm 10</HeaderTitle>
                                <MainTypography variant='h4' color='green'>
                                    {gpa10.toFixed(2)}
                                </MainTypography>
                                <Typography variant='subtitle1' color='green'>
                                    {gpa10.toFixed(8)}
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Item>
                                <HeaderTitle variant='h6'>Tín Chỉ</HeaderTitle>
                                <MainTypography variant='h4' color='green'>
                                    {allTinChi}
                                </MainTypography>
                                <Typography variant='subtitle1' color='green'>
                                    số lượng tín chỉ
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
};

export default GpaDisplay;
