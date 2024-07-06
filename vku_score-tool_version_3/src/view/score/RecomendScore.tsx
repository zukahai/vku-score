import React, { useCallback, useMemo, useState } from 'react';
import {
    ColumnDef,
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import {
    Autocomplete,
    Box,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Chip,
    FormControlLabel,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    TextField,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { useScore } from '@/view/score/ScoreProvider';
import { IScore, ScoreCh } from '@/common/interfaces/score';
import DebouncedInput from '@/view/component/DebouncedInput';
import { recommendLinear } from '@/common/services/recomend.service';

interface IScoreWithAction extends IScore {
    difference: number;
    scorePredict: number;
    action?: string;
}

const TableRowStyled = styled(TableRow)`
  padding: 0.5rem;
  text-align: center;
`;

const TableCellStyled = styled(TableCell)`
  color: #3b4055;
  padding: 0.5rem;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  background-color: ${(props) => props.theme.palette.background.default};

  &:last-child {
    border-right: none;
  }
`;

const TableCellHeader = styled(TableCell)`
  color: #3b4055;
  font-weight: bold;
  border-bottom: 1px solid #e0e0e0;
  border-right: 1px solid #e0e0e0;
  background-color: ${(props) => props.theme.palette.background.default};
  text-align: center;
  &:last-child {
    border-right: none;
  }
`;

const getColor = (scoreCh: ScoreCh | null, scoreChChange: ScoreCh | null) => {
    if (scoreCh !== scoreChChange && scoreChChange !== null) {
        return '#82ffb4';
    }
    return '';
};

const getChipColor = (scoreCh: ScoreCh | null | undefined) => {
    if (!scoreCh) return 'default';
    switch (scoreCh) {
        case 'A':
            return 'success';
        case 'B':
            return 'primary';
        case 'C':
            return 'warning';
        case 'D':
            return 'secondary';
        case 'F':
            return 'error';
        default:
            return 'default';
    }
};

const scoreOptionsMap: { [key in Exclude<ScoreCh, null>]: ScoreCh[] } = {
    'F': ['A', 'B', 'C', 'D', 'F'],
    'D': ['A', 'B', 'C', 'D'],
    'C': ['A', 'B', 'C'],
    'B': ['A', 'B'],
    'A': ['A'],
};

const columnHelper = createColumnHelper<IScoreWithAction>();

const RecommendScoreTable: React.FC = () => {
    const { state, dispatch } = useScore();
    const { scores } = state;
    const [searchQuery, setSearchQuery] = useState('');
    const [isShowExtraColumn, setIsShowExtraColumn] = useState(false);

    const handleScoreChange = useCallback((row: IScore, newValue: ScoreCh) => {
        dispatch({ type: 'CHANGE_SCORE_CH', payload: { row, newValue } });
    }, [dispatch]);

    const handleDiem10Change = useCallback((row: IScore, newValue: number) => {
        dispatch({ type: 'CHANGE_SCORE_T10', payload: { row, newValue } });
    }, [dispatch]);

    const recommendedScores = useMemo(() => recommendLinear(scores).filter((score) => {
        if (score.difference >0) {
            return true;
        }
    }), [scores]);

    const sortedScores = useMemo(() => {
        if (!searchQuery) {
            return recommendedScores;
        }

        return recommendedScores.filter((score: IScoreWithAction) =>
            score.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            score.scoreCh?.toLowerCase().includes(searchQuery.toLowerCase()),
        );
    }, [recommendedScores, searchQuery]);

    const columns = useMemo<ColumnDef<IScoreWithAction, any>[]>(
        () => [
            columnHelper.accessor('id', {
                header: 'ID',
                cell: (info) => (
                    <Typography sx={{ fontWeight: 'bold' }} variant='body1'>
                        {info.row.original.id}
                    </Typography>
                ),
            }),
            columnHelper.accessor('name', {
                header: 'Tên học phần',
                cell: (info) => (
                    <Typography sx={{ fontWeight: 'bold' }} variant='body1' textAlign={'left'}>
                        {info.row.original.name}
                    </Typography>
                ),
            }),
            columnHelper.accessor('countTC', {
                header: 'Số tín chỉ',
            }),
            ...(isShowExtraColumn ? [
                columnHelper.accessor('countLH', {
                    header: 'Số lần học',
                }),
                columnHelper.accessor('scoreCC', {
                    header: 'Điểm chuyên cần',
                }),
                columnHelper.accessor('scoreBT', {
                    header: 'Điểm bài tập',
                }),
                columnHelper.accessor('scoreGK', {
                    header: 'Điểm giữa kỳ',
                }),
                columnHelper.accessor('scoreCK', {
                    header: 'Điểm cuối kỳ',
                }),
            ] : []),
            columnHelper.accessor('scoreT10', {
                header: 'Điểm hệ 10',
                cell: (info) => (
                    <DebouncedInput
                        value={info.row.original.scoreT10?.toString() || ''}
                        variant='outlined'
                        onChange={(value) => handleDiem10Change(info.row.original, Number(value))}
                        debounce={500}
                    />
                ),
            }),
            columnHelper.accessor('scoreCh', {
                header: 'Điểm chữ',
                cell: (info) => (
                    <Chip
                        color={getChipColor(info.row.original.scoreCh)}
                        sx={{ fontWeight: 'bold' }}
                        label={info.row.original.scoreCh || ''}
                    />
                ),
            }),
            columnHelper.accessor('scoreChChange', {
                header: 'Thay đổi',
                cell: (info) => (
                    <Autocomplete
                        disabled={info.row.original.scoreCh === 'A'}
                        disableClearable
                        renderInput={(params) => (
                            <TextField {...params} label='Điểm chữ' variant='outlined' />
                        )}
                        options={scoreOptionsMap[info.row.original.scoreCh || 'F']}
                        value={(info.row.original.scoreChChange || info.row.original.scoreCh || null) as ScoreCh}
                        onChange={(event, newValue) => handleScoreChange(info.row.original, newValue as ScoreCh)}
                        isOptionEqualToValue={(option, value) => option === value}
                    />
                ),
            }),
            // columnHelper.accessor('difference', {
            //     header: 'Difference',
            //     cell: (info) => (
            //         <Typography sx={{ fontWeight: 'bold' }} variant='body1'>
            //             {info.row.original.difference}
            //         </Typography>
            //     ),
            // }),
            columnHelper.accessor('scorePredict', {
                header: 'Điểm dự đoán',
                cell: (info) => (
                    <Chip color={'success'} label={info.row.original.scorePredict.toFixed(2)} />
                ),
            }),
        ],
        [handleScoreChange, handleDiem10Change, isShowExtraColumn],
    );

    const table = useReactTable({
        data: sortedScores,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 100,
            },
        },
    });

    const handleRemove = useCallback((id: number) => {
        dispatch({ type: 'DELETE_SCORE', payload: { id } });
    }, [dispatch]);

    const handleToggleExtraColumns = () => {
        setIsShowExtraColumn(!isShowExtraColumn);
    };

    return (
        <Card>
            <CardHeader
                title={
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant='h6'>Điểm Đề Xuất</Typography>
                        <Box display='flex' alignItems='center'>
                            <FormControlLabel
                                control={<Checkbox onChange={handleToggleExtraColumns} checked={isShowExtraColumn} />}
                                label={`${isShowExtraColumn ? 'Ẩn' : 'Hiện'} cột bổ sung`}
                            />
                        </Box>
                    </Box>
                }
            />
            <CardContent>
                <Box>
                    <Box
                        sx={{
                            marginBottom: 2,
                            flexDirection: 'row',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{ flex: 2, display: 'flex', justifyContent: 'flex-end' }}>
                            <DebouncedInput
                                fullWidth
                                label='Search'
                                variant='outlined'
                                value={searchQuery}
                                onChange={value => setSearchQuery(value as string)}
                                debounce={500}
                            />
                        </Box>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => (
                                            <TableCellHeader key={header.id}>
                                                <TableSortLabel
                                                    active={header.column.getIsSorted() !== false}
                                                    direction={header.column.getIsSorted() ? 'desc' : 'asc'}
                                                    onClick={header.column.getToggleSortingHandler()}
                                                >
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext(),
                                                    )}
                                                </TableSortLabel>
                                            </TableCellHeader>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableHead>
                            <TableBody>
                                {table.getRowModel().rows.map((row) => (
                                    <TableRowStyled key={row.id}>
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCellStyled
                                                key={cell.id}
                                                style={{ backgroundColor: getColor(cell.row.original.scoreCh || null, cell.row.original.scoreChChange || null) }}
                                            >
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCellStyled>
                                        ))}
                                    </TableRowStyled>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </CardContent>
        </Card>
    );
};

export default RecommendScoreTable;