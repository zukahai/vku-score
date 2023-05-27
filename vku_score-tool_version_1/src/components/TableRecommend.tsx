import React, { FunctionComponent } from 'react';
import { colorType, Score } from './TableScore.tsx';
import { Button, Col, Table, Tag, Typography } from 'antd';
import { removeAscent } from '../services/string.service.ts';

export interface Recommend {
    key?: number | null;
    name: string;
    sumScoreCh: string;
    countTch: number;
    tags: string[];
    difference: number;
}
interface OwnProps {
    recommends: Recommend[];
}

type Props = OwnProps;

const TableRecommend: FunctionComponent<Props> = (props) => {
    const filteredRecommends = props.recommends.filter((recommend) => recommend.difference > 0);
    const filteredRecommendsWithKey = filteredRecommends.map((recommend, index) => ({
        ...recommend,
        key: index + 1,
    }));
    return (
        <div>
            <Typography.Text type="success" style={{ marginBottom: '10px' }}>
                Chúng tôi đã phân tích thế mạnh của bạn. Bạn nên ưu tiên học cải thiện những môn dưới đây, theo thứ tự
                ưu tiên trừ trên xuống.
            </Typography.Text>
            <Table
                id={'table-recommend'}
                dataSource={filteredRecommendsWithKey}
                pagination={false}
                style={{ fontWeight: 'bold', marginTop: '10px' }}
                rowKey={'id'}
            >
                <Table.Column title="Tên" dataIndex="name" key="name" />
                <Table.Column title="Số tín chỉ" dataIndex="countTch" key="countTch" />
                <Table.Column
                    title="Điểm"
                    dataIndex="sumScoreCh"
                    key="sumScoreCh"
                    render={(data, record, index) => {
                        return (
                            <Col flex={1} style={{ textAlign: 'center' }}>
                                <Tag
                                    color={colorType[data]}
                                    style={{ marginTop: '5px', textAlign: 'center', fontStyle: 'bold' }}
                                >
                                    {data}
                                </Tag>
                            </Col>
                        );
                    }}
                />
                <Table.Column
                    title="Hành Động"
                    dataIndex="name"
                    key="action"
                    render={(data, record, index) => {
                        return (
                            <Col flex={1} style={{ textAlign: 'center' }}>
                                <Button
                                    type="link"
                                    size={'small'}
                                    style={{ textAlign: 'center' }}
                                    href={`#${removeAscent(data)}`}
                                >
                                    <Button type={'primary'} size={'small'}>
                                        Thay đổi
                                    </Button>
                                </Button>
                            </Col>
                        );
                    }}
                />
            </Table>
        </div>
    );
};

export default TableRecommend;
