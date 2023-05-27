import React, { useCallback, useState } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { Layout, Typography } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Paragraph from 'antd/es/typography/Paragraph';

interface MyDropzoneProps {
    onFilesSelected: (files: FileWithPath[]) => void;
}

const CustomDropzone: React.FC<MyDropzoneProps> = ({ onFilesSelected }) => {
    const [isFilePick, setIsFilePick] = useState(false);

    const onDrop = useCallback(
        (acceptedFiles: FileWithPath[]) => {
            onFilesSelected(acceptedFiles);
            setIsFilePick(true);
        },
        [onFilesSelected],
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            // Chỉ chấp nhận các file JSON
            'application/json': ['.json'],
        },
        maxFiles: 1,
    });

    return (
        <Layout
            {...getRootProps()}
            className={`dropzone ${isDragActive ? 'active' : ''}`}
            style={{ padding: '1rem', borderRadius: '5px', border: '2px dashed #ddd' }}
        >
            <input {...getInputProps()} type="file" />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                <InboxOutlined style={{ fontSize: '3rem', color: '#5cab3d', marginBottom: '1rem' }} />
                <Typography.Title level={4}>Drop file or click</Typography.Title>
                <Typography.Text type="secondary" style={{ textAlign: 'center' }}>
                    Click hoặc kéo file vào đây để tải lên dữ liệu
                </Typography.Text>
                <Typography.Text type="secondary" style={{ textAlign: 'center' }}>
                    Chỉ chọn được file <b style={{ color: '#5cab3d' }}>JSON</b>
                </Typography.Text>
            </div>
            {isFilePick && <Paragraph>{isFilePick}</Paragraph>}
        </Layout>
    );
};

export default CustomDropzone;
