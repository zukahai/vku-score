import React, { useCallback, useState } from 'react';
import { Accept, useDropzone } from 'react-dropzone';
import { Box, Button, Chip, Paper, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { isScoreArray } from '@/common/utils';
import { useScore } from '@/view/score/ScoreProvider';

const FileUpload: React.FC = () => {
    const { state, dispatch } = useScore();
    const [file, setFile] = useState<File | null>(null);
    const { toggleUploadFile } = state;
    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFile(acceptedFiles[0] || null); // Chỉ chọn tệp đầu tiên
    }, []);

    const accept: Accept = {
        'application/json': ['.json'],
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept,
        maxSize: 5000000,
        maxFiles: 1, // Chỉ cho phép chọn một tệp
    });

    const handleFileRead = (file: File) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const content = event.target?.result as string;
            try {
                const jsonData = JSON.parse(content);
                if (isScoreArray(jsonData)) {
                    dispatch({ type: 'SET_SCORES', payload: jsonData });
                    toast.success('Tệp JSON đã được tải lên');
                    dispatch({ type: 'TOGGLE_UPLOAD_FILE' });
                } else {
                    toast.error('Tệp JSON không đúng định dạng');
                }
            } catch (e) {
                toast.error('Không thể đọc tệp JSON');
            }
        };
        reader.readAsText(file);
    };
    const handleSubmit = () => {
        if (file) {
            handleFileRead(file); // Đọc nội dung tệp sau khi gửi
            setFile(null); // Xóa tệp sau khi gửi
        }
    };

    return (
        <>
            {toggleUploadFile && (
                <Box sx={{ marginBottom: 2 , width: '100%' }}>
                    <Paper sx={{ padding: 2, textAlign: 'center' }}>
                        <Typography variant='h6' gutterBottom>
                            Tải lên tệp
                        </Typography>
                        <Box
                            {...getRootProps()}
                            sx={{
                                border: '2px dashed gray',
                                padding: 4,
                                textAlign: 'center',
                                cursor: 'pointer',
                                marginBottom: 2,
                            }}
                        >
                            <input {...getInputProps()} />
                            <p>Kéo & thả tệp vào đây, hoặc nhấn để chọn tệp</p>
                        </Box>
                        {file && <Chip label={file.name} sx={{ margin: 1 }} />}
                        <Box sx={{ marginTop: 2 }}>
                            <Button variant='contained' color='primary' onClick={handleSubmit} sx={{ marginRight: 1 }}>
                                Gửi
                            </Button>
                            <Button variant='contained' color='secondary' onClick={() => setFile(null)}>
                                Hủy bỏ
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            )}
        </>
    );
};

export default FileUpload;
