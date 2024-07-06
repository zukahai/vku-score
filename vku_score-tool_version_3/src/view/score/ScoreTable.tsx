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
    Button,
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
    Tooltip,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { useScore } from '@/view/score/ScoreProvider';
import { Delete, Restore } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { IScore, ScoreCh } from '@/common/interfaces/score';
import DebouncedInput from '@/view/component/DebouncedInput';

interface IScoreWithAction extends IScore {
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

const ScoreTable: React.FC = () => {
    const { state, dispatch } = useScore();
    const { scores } = state;
    const [searchQuery, setSearchQuery] = useState('');
    const [isShowExtraColumn, setIsShowExtraColumn] = useState(true);

    const handleScoreChange = useCallback((row: IScore, newValue: ScoreCh) => {
        dispatch({ type: 'CHANGE_SCORE_CH', payload: { row, newValue } });
    }, [dispatch]);

    const handleDiem10Change = useCallback((row: IScore, newValue: number) => {
        dispatch({ type: 'CHANGE_SCORE_T10', payload: { row, newValue } });
    }, [dispatch]);

    const sortedScores = useMemo(() => {
        if (!searchQuery) {
            return scores;
        }

        const fieldsToCheck: (keyof IScore)[] = ['name', 'countTC', 'countLH', 'scoreCC', 'scoreBT', 'scoreGK', 'scoreCK', 'scoreT10', 'scoreCh'];
        return [...scores].sort((a, b) => {
            const aMatches = fieldsToCheck.some(field => a[field]?.toString().toLowerCase().includes(searchQuery.toLowerCase()));
            const bMatches = fieldsToCheck.some(field => b[field]?.toString().toLowerCase().includes(searchQuery.toLowerCase()));

            if (aMatches && !bMatches) return -1;
            if (!aMatches && bMatches) return 1;
            return 0;
        });
    }, [scores, searchQuery]);
    const handleRemove = useCallback((id: number) => {
        dispatch({ type: 'DELETE_SCORE', payload: { id } });
    }, [dispatch]);
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
            columnHelper.accessor('action', {
                header: 'Hành động',
                cell: (info) => (
                    <Box flexDirection='row' display='flex' justifyContent='center'>
                        <Tooltip title={'Xóa'}>
                            <IconButton color={'warning'} onClick={() => handleRemove(info.row.original.id)}
                            >
                                <Delete />
                            </IconButton>
                        </Tooltip>
                        {info.row.original.scoreChChange && (
                            <Tooltip title={'Hủy thay đổi'}>
                                <IconButton
                                    color={'primary'}
                                    onClick={() => handleScoreChange(info.row.original, info.row.original.scoreCh as ScoreCh)}
                                >
                                    <Restore />
                                </IconButton>
                            </Tooltip>
                        )
                        }
                    </Box>
                ),
            }),
        ],
        [isShowExtraColumn, handleDiem10Change, handleScoreChange, handleRemove],
    );

    const table = useReactTable({
        data: sortedScores,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        initialState: {
            pagination: {
                pageSize: 100,
            },
        },
    });


    const groupedScores = useMemo(() => {
        return scores.reduce((acc: { [key: string]: IScore[] }, score) => {
            const semester = score.semester || 'Không rõ'; // Assign "Không rõ" if semester is missing
            if (!acc[semester]) {
                acc[semester] = [];
            }
            acc[semester].push(score);
            return acc;
        }, {});
    }, [scores]);

    const handleToggleUploadFile = useCallback(() => {
        dispatch({ type: 'TOGGLE_UPLOAD_FILE' });
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
                        <Typography variant='h6'>Bảng Điểm</Typography>
                        <Box display='flex' alignItems='center'>
                            <FormControlLabel
                                control={<Checkbox onChange={handleToggleUploadFile}
                                                   checked={state.toggleUploadFile} />}
                                label={`${!state.toggleUploadFile ? 'Ẩn' : 'Hiện'} form tải lên`}
                            />
                            <FormControlLabel
                                control={<Checkbox onChange={handleToggleExtraColumns} checked={isShowExtraColumn} />}
                                label={`${!isShowExtraColumn ? 'Ẩn' : 'Hiện'} cột bổ sung`}
                            />
                            <Box>
                               <Tooltip title={'Xoá toàn bộ điểm'}>
                                   <Button
                                       variant='outlined'
                                       color='error'
                                       size={'small'}
                                       onClick={() => dispatch({ type: 'RESET_SCORES' })}
                                   >
                                        Xoá toàn bộ
                                   </Button>
                               </Tooltip>
                            </Box>
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
                    {searchQuery ? (
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
                    ) : (
                        Object.keys(groupedScores).map((semester) => (
                            <Box key={semester} mb={4}>
                                <Typography variant='h6' sx={{ mb: 2 }}>{semester}</Typography>
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
                                            {groupedScores[semester].map((row) => (
                                                <TableRowStyled key={row.id}>
                                                    {table.getRowModel().rows
                                                        .filter(r => r.original.id === row.id)
                                                        .map((r) => r.getVisibleCells().map((cell) => (
                                                            <TableCellStyled
                                                                key={cell.id}
                                                                style={{ backgroundColor: getColor(cell.row.original.scoreCh || null, cell.row.original.scoreChChange || null) }}
                                                            >
                                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                            </TableCellStyled>
                                                        )))
                                                    }
                                                </TableRowStyled>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>
                        ))
                    )}
                </Box>
            </CardContent>
        </Card>
    );
};

export default ScoreTable;
