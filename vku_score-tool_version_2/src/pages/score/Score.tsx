import React, { FunctionComponent, useEffect, useState } from 'react';
import { removeAscent } from '../../services/string.service.ts';
import { FileWithPath } from 'react-dropzone';
import CustomDropzone from '../../components/CustomDropzone.tsx';
import TableScore from '../../components/TableScore.tsx';
import { ScoreService } from '../../services/score.service.ts';
import GPAView from '../../components/GPAView.tsx';
import { useNotification } from '../../contexts/Notification.tsx';
import FloatingButton from '../../components/FloatingButton.tsx';
import { Button, Collapse, FloatButton, Modal, Skeleton, Typography } from 'antd';
import TableRecommend from '../../components/TableRecommend.tsx';
import { recommend } from '../../services/recomend.service.ts';
import CodeDisplay from '../../components/CodeDisplay.tsx';
import data from '../../datas/data.json';
import { PlusOutlined } from '@ant-design/icons';
import AddScore from '../../components/AddScore.tsx';

const { Panel } = Collapse;

export interface IScore {
    value: string;
    key?: number | null;
    id: number;
    name: string;
    countTC?: number | null;
    countLH?: number | null;
    scoreCC?: number | null;
    scoreBT?: number | null;
    scoreGK?: number | null;
    scoreCK?: number | null;
    scoreT10?: number | null;
    scoreCh?: string | null;
}

const scoreService = new ScoreService();
const validateData = (scores: IScore[]): IScore[] => {
    scores = scores.map((score, index) => {
        score.key = index + 1;
        score.id = index + 1;
        score.value = removeAscent(score.name);
        return score;
    });
    return scores;
};
const generateScoreIdUnique = (scores: IScore[]): number => {
    return Math.max(...scores.map((score) => score.id)) + 1;
};

const checkNameExist = (scores: IScore[], name: string): boolean => {
    return scores.some((score) => score.value === name);
};
const readJsonFile = async (file: File) => {
    const fileContent = await file.text();
    return JSON.parse(fileContent);
};
const Score: FunctionComponent = () => {
    const { openNotification } = useNotification();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [scoreData, setScoreData] = useState<IScore[]>([]);
    const [scoreModified, setScoreModified] = useState<IScore[]>([]);
    const [currentGPA, setCurrentGPA] = useState<number>(0);
    const [newGPA, setNewGPA] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalAdd, setIsModalAdd] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const showModalAdd = () => {
        setIsModalAdd(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleOkAdd = () => {
        setIsModalAdd(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleCancelAdd = () => {
        setIsModalAdd(false);
    };
    const loadingFromLocalStorage = () => {
        setScoreData(JSON.parse(localStorage.getItem('scoreAll') || '[]'));
        setScoreModified(JSON.parse(localStorage.getItem('scoreAll') || '[]'));
    };
    const saveToLocalStorage = (data: IScore[]) => {
        localStorage.setItem('scoreAll', JSON.stringify(data));
    };
    const onFilesSelected = async (files: FileWithPath[]) => {
        const file = files[0];
        readJsonFile(file).then((res) => {
            if (!res.scoreAll) {
                openNotification('File tải lên không đúng!', 'error');
                return;
            }
            setIsLoading(true);
            res.scoreAll.forEach((item: any) => {
                item.key = item.id;
                item.value = removeAscent(item.name);
            });

            const scoreUpload = validateData(res.scoreAll);
            setScoreData(scoreUpload);
            setScoreModified(scoreUpload);
            scoreService.setScore(scoreUpload);
            setCurrentGPA(scoreService.calcGPA());
            setNewGPA(scoreService.calcGPA());
            openNotification('Load dữ liệu thành công !', 'success');
            saveToLocalStorage(scoreUpload);
            const time = setTimeout(() => {
                setIsLoading(false);
                clearTimeout(time);
            }, 1000);
        });
    };
    useEffect(() => {
        scoreService.setScore(scoreModified);
        setNewGPA(scoreService.calcGPA());
    }, [scoreModified]);

    useEffect(() => {
        if (scoreData.length > 0) {
            openNotification('GPA đã thay đổi thành ' + newGPA.toFixed(2), 'success');
        }
    }, [newGPA]);

    useEffect(() => {
        scoreService.setScore(scoreData);
        setCurrentGPA(scoreService.calcGPA());
        setNewGPA(scoreService.calcGPA());
    }, [scoreData]);

    const addScore = (score: IScore) => {
        if (checkNameExist(scoreData, score.value)) {
            openNotification('Học phần đã tồn tại!', 'error');
            return;
        }
        score.id = generateScoreIdUnique(scoreData);
        setScoreData([...scoreData, score]);
        setScoreModified([...scoreModified, score]);
        openNotification('Thêm thành công!', 'success');
        saveToLocalStorage(scoreData);
    };

    const removeScore = (score: IScore) => {
        const index = scoreData.findIndex((s) => s.id === score.id);
        if (index === -1) {
            return;
        }
        setScoreData([...scoreData.slice(0, index), ...scoreData.slice(index + 1)]);
    };

    const updateScoreModified = (score: IScore) => {
        setScoreModified(
            scoreModified.map((s) => {
                if (s.id === score.id) {
                    return { ...s, ...score };
                }
                return s;
            }),
        );
    };

    return (
        <div>
            <CustomDropzone onFilesSelected={onFilesSelected} />

            <div style={{ marginTop: '10px' }}>
                <Button onClick={loadingFromLocalStorage} type={'primary'}>
                    Load dữ liệu cũ
                </Button>
            </div>

            {isLoading ? (
                <>
                    <Skeleton />
                </>
            ) : (
                <>
                    {scoreData.length > 0 ? (
                        <div style={{ marginTop: '20px' }}>
                            <GPAView GPA={currentGPA} GPAChange={newGPA} />
                            <TableScore
                                scores={scoreData}
                                changeModified={updateScoreModified}
                                scoreModified={scoreModified}
                            />
                            <FloatingButton onClick={showModal}>Gợi ý cải thiện học phần</FloatingButton>
                            <FloatButton
                                icon={<PlusOutlined />}
                                onClick={showModalAdd}
                                type={'primary'}
                                tooltip={'Thêm học phần'}
                                style={{ bottom: 30, left: 30 }}
                            ></FloatButton>
                            <Modal
                                title="Gợi ý cải thiện học phần"
                                open={isModalOpen}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                width={800}
                            >
                                <TableRecommend
                                    recommends={recommend(scoreData)}
                                    scoreModified={scoreModified}
                                    changeModified={updateScoreModified}
                                />
                            </Modal>
                            <Modal
                                title={'Thêm học phần'}
                                open={isModalAdd}
                                onOk={handleOkAdd}
                                onCancel={handleCancelAdd}
                                width={800}
                            >
                                <AddScore addScore={addScore} />
                            </Modal>
                        </div>
                    ) : (
                        <div style={{ marginTop: '10px' }}>
                            <Collapse accordion>
                                <Panel header="Code lấy dữ liệu học phần" style={{ fontWeight: 'bold' }} key="1">
                                    <Typography.Text type="danger">
                                        Chúng tôi cam kết 100% không thu thập dữ liệu người dùng. Đoạn code này mục đích
                                        chỉ lấy thông tin điểm của người dùng ở phía frontend và không can thiệp vào hệ
                                        thống của trường.
                                    </Typography.Text>
                                    <CodeDisplay content={data.code2} language={'javascript'} />
                                </Panel>
                            </Collapse>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Score;
