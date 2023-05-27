import React, { FunctionComponent, useState } from 'react';
import { Button, Form, Input, Layout, notification, Select } from 'antd';
import { Score, typeScore } from './TableScore.tsx';
import { removeAscent } from '../services/string.service.ts';
import { useNotification } from '../contexts/Notification.tsx';

interface OwnProps {
    addScore: (score: Score) => boolean;
}

type Props = OwnProps;

const AddScore: FunctionComponent<Props> = (props) => {
    const [nameScore, setNameScore] = useState('');
    const [countTC, setCountTC] = useState(2);
    const [scoreCh, setScoreCh] = useState('A');
    const {openNotification} = useNotification();

    function handleSelectChange(value: any) {
        setScoreCh(value);
    }


    const handleAddScore = () => {
        if (nameScore === '') {
            openNotification('Không được để trống');
            return;
        }
        if (countTC <= 0) {
            openNotification('Số tín chỉ phải lớn hơn 0');
            return;
        }
        if (scoreCh === '') {
            openNotification('Không được để trống');
            return;
        }
         props.addScore({
            name: nameScore,
            countTC: countTC,
            scoreCh: scoreCh,
            value: removeAscent(nameScore),
        });

        
    };

    return (
        <Layout
            style={{
                padding: '24px',
                marginBottom: '24px',
                borderRadius: '5px',
            }}
        >
            <Form layout="vertical">
                <Form.Item label="Học Phần" name="name">
                    <Input
                        placeholder="input placeholder"
                        value={nameScore}
                        defaultValue={nameScore}
                        onChange={(e) => setNameScore(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Số Tín Chỉ" name="countc">
                    <Input
                        type="number"
                        placeholder="input placeholder"
                        value={countTC}
                        onChange={(e) => {
                            setCountTC(Number(e.target.value));
                        }}
                    />
                </Form.Item>
                <Form.Item label="Xếp Loại" name="scoreCh">
                    <Select
                        style={{ width: '100%' }}
                        options={typeScore}
                        value={scoreCh}
                        onChange={(value) => handleSelectChange(value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        onClick={() => {
                            handleAddScore();
                        }}
                    >
                        Thêm Học Phần
                    </Button>
                </Form.Item>
            </Form>
        </Layout>
    );
};

export default AddScore;
