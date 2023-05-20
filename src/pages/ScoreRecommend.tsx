import React, { FunctionComponent, useEffect, useState } from 'react';
import { FileWithPath } from 'react-dropzone';
import { ScoreService } from '../services/score.service.ts';
import MyDropzone from '../components/FormUpload.tsx';
import TableScore, { Score } from '../components/TableScore.tsx';
import GPAView from '../components/GPAView.tsx';
import { Collapse, Modal, Typography, notification } from 'antd';
import TableRecommend from '../components/TableRecommend.tsx';
import { recommend } from '../services/recomend.service.ts';
import FloatingButton from '../components/FloatingButton.tsx';
import CodeDisplay from '../components/CodeDisplay.tsx';
import data from '../datas/data.json';
import { removeAscent } from '../services/string.service.ts';
import { useNotification } from '../contexts/Notification.tsx';
const { Panel } = Collapse;
const readJsonFile = async (file: File) => {
    const fileContent = await file.text();
    return JSON.parse(fileContent);
};

const scoreService = new ScoreService();

const checkExitName = (name: string | null | undefined, scores: Score[]) => {
    return scores.some((item) => item.name === name);
};

const generateIdUnique = (scores: Score[]) => {
    let max = 0;
    scores.forEach((item) => {
        if (typeof item.id === 'number') {
            max = Math.max(max, item.id);
        }
    });
    return max + 1;
};
const ScoreRecommend: FunctionComponent = () => {

    const {openNotification} = useNotification();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [score, setScore] = useState<Score[]>([]);
    const [modifiedScore, setModifiedScore] = useState<Score[]>([]);
    const [GPA, setGPA] = useState<number>(0);
    const [GPAChange, setGPAChange] = useState<number>(0);
    useEffect(() => {
        const scoreService = new ScoreService();
        scoreService.setScore(modifiedScore);
        setGPAChange(scoreService.calcGPA());
    }, [modifiedScore]);
    useEffect(() => {
        const scoreService = new ScoreService();
        scoreService.setScore(score);
        setGPA(scoreService.calcGPA());
    }, [score]);
    useEffect(() => {
        scoreService.setScore(modifiedScore);
        setGPAChange(scoreService.calcGPA());
        if(score.length!==0){
            openNotification(`Thay đổi thành công GPA đã thay đổi ${GPAChange.toFixed(2) }`, 'success');

        }
    }, [GPAChange]);

    const addScore = (newScore: Score): boolean => {
        if (checkExitName(newScore.name, score)) {
            openNotification('Học phần này đã tồn tại!', 'error');
            return false;
        } else {
            newScore.id = generateIdUnique(score);
            newScore.key = newScore.id;
            setScore([...score, newScore]);
            setModifiedScore([...modifiedScore, newScore]);
            openNotification('Thêm thành công!', 'success');
            return true;
        }
        return false;
    };
    const removeScore = (id: number): boolean => {
        setScore(score.filter((item) => item.id !== id));
        setModifiedScore(modifiedScore.filter((item) => item.id !== id));
        openNotification('Xóa thành công!', 'success');
        return true;
    };
    const onFilesSelected = async (files: FileWithPath[]) => {
        const file = files[0];
        readJsonFile(file).then((res) => {
            if(!res.scoreAll){
                openNotification('File tải lên không đúng!', 'error');
                return;
            }
            res.scoreAll.forEach((item: any) => {
                item.key = item.id;
                item.value = removeAscent(item.name);
            });
            setScore(res.scoreAll);
            setModifiedScore(res.scoreAll);
            scoreService.setScore(res.scoreAll);
            setGPA(scoreService.calcGPA());
            openNotification('Cập nhật dữ liệu học phần thành công!', 'success');
        });
    };

    const setNewScore = (newScore: Score): void => {
        setModifiedScore(modifiedScore.map((item) => (item.id === newScore.id ? newScore : item)));
        
        
    };

    return (
        <div>
            <MyDropzone onFilesSelected={onFilesSelected} />
            {score && score.length > 0 ? (
                <>
                    <GPAView GPA={GPA} GPAChange={GPAChange} />
                    <Modal title="Gợi ý cải thiện học phần" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <TableRecommend recommends={recommend(score)} />
                    </Modal>
                    <TableScore score={score} removeScore={removeScore} addScore={addScore} setNewScore={setNewScore} />
                    <FloatingButton
                        onClick={showModal}
                        children={
                            <p
                                style={{
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    color: '#fff',
                                }}
                            >
                                Gợi ý cải thiện học phần
                            </p>
                        }
                    />
                </>
            ) : (
                <div style={{ marginTop: '10px' }}>
                    <Collapse accordion>
                        <Panel header="Code lấy dữ liệu học phần" style={{ fontWeight: 'bold' }} key="1">
                            <Typography.Text  type="danger">
                                Chúng tôi cam kết 100% không thu thập dữ liệu người dùng. Đoạn code này mục đích chỉ 
                                lấy thông tin điểm của người dùng ở phía frontend và không can thiệp vào hệ thống của trường.
                                </Typography.Text>
                            <CodeDisplay content={data.code2} language={'javascript'} />
                        </Panel>
                    </Collapse>
                </div>
            )}
        </div>
    );
};

export default ScoreRecommend;
