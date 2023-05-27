import React, { FunctionComponent } from 'react';
import { IScore } from '../pages/score/Score.tsx';
import { ColumnsType } from 'antd/es/table';
import { Button, Col, Select, Table, Tag } from 'antd';

interface OwnProps {
    scores: IScore[];
    scoreModified: IScore[];
    changeModified: (score: IScore) => void;
}

interface ColorType {
    [key: string]: string;
}

export const colorType: ColorType = {
    A: '#007D00',
    B: '#1127FF',
    C: '#647B92',
    D: '#FDBD48',
    F: '#FF0000',
};

type Props = OwnProps;
export const typeScore = [
    {
        value: 'A',
        label: 'A',
    },
    {
        value: 'B',
        label: 'B',
    },
    {
        value: 'C',
        label: 'C',
    },
    {
        value: 'D',
        label: 'D',
    },
    {
        value: 'F',
        label: 'F',
    },
];

export const getAllHighScoreThanCurrent = (scoreChu: string) => {
    if (scoreChu === '') {
        return typeScore;
    }
    return typeScore.filter((item) => item.value <= scoreChu);
};

const TableScore: FunctionComponent<Props> = (props) => {
    const columns: ColumnsType<IScore> = [
        {
            title: 'STT',
            key: 'stt',
            dataIndex: 'id',
        },
        {
            title: 'Học phần',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Số tín chỉ',
            key: 'countTC',
            dataIndex: 'countTC',
        },
        {
            title: 'Số lần học',
            key: 'countLH',
            dataIndex: 'countLH',
        },
        {
            title: 'Điểm chuyên cần',
            key: 'scoreCC',
            dataIndex: 'scoreCC',
            render: (scoreCC) => <span>{scoreCC || '-'}</span>,
        },
        {
            title: 'Điểm bài tập',
            key: 'scoreBT',
            dataIndex: 'scoreBT',
            render: (scoreBT) => <span>{scoreBT || '-'}</span>,
        },
        {
            title: 'Điểm giữa kỳ',
            key: 'scoreGK',
            dataIndex: 'scoreGK',
            render: (scoreGK) => <span>{scoreGK || '-'}</span>,
        },
        {
            title: 'Điểm cuối kỳ',
            key: 'scoreCK',
            dataIndex: 'scoreCK',
            render: (scoreCK) => <span>{scoreCK || '-'}</span>,
        },
        {
            title: 'Điểm tổng kết',
            key: 'scoreT10',
            dataIndex: 'scoreT10',
            render: (scoreT10) => <span>{scoreT10 || '-'}</span>,
        },
        {
            title: 'Điểm Chữ',
            key: 'scoreCh',
            dataIndex: 'scoreCh',
            render: (scoreCh) => (
                <Col flex={1} style={{ textAlign: 'center' }}>
                    <Tag
                        color={colorType[scoreCh]}
                        style={{ marginTop: '5px', textAlign: 'center', fontStyle: 'bold' }}
                    >
                        {scoreCh}
                    </Tag>
                </Col>
            ),
        },
        {
            title: 'Thay đổi',
            key: 'action',
            dataIndex: 'scoreCh',
            render: (scoreCh, record, index) => {
                const isChanged = scoreCh !== props.scoreModified[index].scoreCh;
                return (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            minWidth: '165px',
                            maxWidth: '165px',
                            minHeight: '59px',
                        }}
                    >
                        <Select
                            value={props.scoreModified[index].scoreCh}
                            style={{ fontWeight: 'bold' }}
                            disabled={scoreCh === 'A'}
                            options={getAllHighScoreThanCurrent(scoreCh)}
                            onChange={(value) => {
                                const modifiedScore = { ...record, scoreCh: value };
                                props.changeModified(modifiedScore);
                            }}
                        />
                        {isChanged && (
                            <Tag color={colorType['A']} style={{ marginTop: '5px', width: '100%' }}>
                                {scoreCh === '' ? 'Chưa có điểm.' : `Điểm trước khi cải thiện ${scoreCh}.`}
                            </Tag>
                        )}
                    </div>
                );
            },
        },
    ];
    const [isShowExtraColumn, setIsShowExtraColumn] = React.useState(true);
    const toggleExtraColumn = () => {
        setIsShowExtraColumn(!isShowExtraColumn);
    };
    const dynamicColumns = isShowExtraColumn
        ? columns
        : columns.filter(
              (column) =>
                  column.key !== 'countLH' &&
                  column.key !== 'scoreCC' &&
                  column.key !== 'scoreBT' &&
                  column.key !== 'scoreGK' &&
                  column.key !== 'scoreCK' &&
                  column.key !== 'scoreT10',
          );

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div>
                    <Button type="primary" onClick={toggleExtraColumn}>
                        {isShowExtraColumn ? 'Ẩn cột phụ' : 'Hiện cột phụ'}
                    </Button>
                </div>
            </div>
            <Table
                columns={dynamicColumns}
                dataSource={props.scores}
                bordered
                pagination={false}
                style={{
                    fontWeight: 'bold',
                }}
            ></Table>
        </>
    );
};

export default TableScore;
