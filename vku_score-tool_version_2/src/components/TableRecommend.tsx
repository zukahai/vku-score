import React, { FunctionComponent, useEffect } from 'react';
import { colorType, getAllHighScoreThanCurrent } from './TableScore.tsx';
import { Col, Select, Skeleton, Table, Tag, Typography } from 'antd';
import { IScore } from '../pages/score/Score.tsx';
import { ColumnsType } from 'antd/es/table';

export interface Recommend {
    id: number;
    value: string;
    key?: number | null;
    name: string;
    sumScoreCh: string;
    countTch: number;
    tags: string[];
    difference: number;
}

interface OwnProps {
    recommends: Recommend[];
    scoreModified: IScore[];
    changeModified: (score: IScore) => void;
}

type Props = OwnProps;
const getElmentById = (id: number, recommends: IScore[]) => {
    return recommends.find((recommend) => recommend.id === id);
};
const TableRecommend: FunctionComponent<Props> = (props) => {
    const [isLoading, setIsLoading] = React.useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    const filteredRecommends = props.recommends.filter((recommend) => recommend.difference > 0);
    const filteredRecommendsWithKey = filteredRecommends.map((recommend, index) => ({
        ...recommend,
        key: index + 1,
    }));

    const columns: ColumnsType<Recommend> = [
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
            title: 'Điểm Chữ',
            key: 'sumScoreCh',
            dataIndex: 'sumScoreCh',
            render: (sumScoreCh) => (
                <Col flex={1} style={{ textAlign: 'center' }}>
                    <Tag
                        color={colorType[sumScoreCh]}
                        style={{ marginTop: '5px', textAlign: 'center', fontStyle: 'bold' }}
                    >
                        {sumScoreCh}
                    </Tag>
                </Col>
            ),
        },
        {
            title: 'Thay đổi',
            key: 'action',
            dataIndex: 'sumScoreCh',
            render: (sumScoreCh, record) => {
                const score = getElmentById(record.id, props.scoreModified) as IScore;
                const isChanged = score?.scoreCh !== sumScoreCh;
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
                            // defaultValue={score?.scoreCh}
                            style={{ fontWeight: 'bold' }}
                            disabled={sumScoreCh === 'A'}
                            value={score?.scoreCh}
                            options={getAllHighScoreThanCurrent(sumScoreCh)}
                            onChange={(value) => {
                                const modifiedScore = { ...score, scoreCh: value };
                                props.changeModified(modifiedScore);
                            }}
                        />
                        {isChanged && (
                            <Tag color={colorType['A']} style={{ marginTop: '5px', width: '100%' }}>
                                {sumScoreCh === '' ? 'Chưa có điểm.' : `Điểm trước khi cải thiện ${sumScoreCh}.`}
                            </Tag>
                        )}
                    </div>
                );
            },
        },
    ];
    return (
        <div>
            {isLoading ? (
                <Skeleton />
            ) : (
                <div>
                    <Typography.Text type="success" style={{ marginBottom: '10px' }}>
                        Chúng tôi đã phân tích thế mạnh của bạn. Bạn nên ưu tiên học cải thiện những môn dưới đây, theo
                        thứ tự ưu tiên trừ trên xuống.
                    </Typography.Text>
                    <Table
                        columns={columns}
                        dataSource={filteredRecommendsWithKey}
                        pagination={false}
                        style={{
                            fontWeight: 'bold',
                            marginTop: '10px',
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default TableRecommend;
