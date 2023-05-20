import React, { useCallback, useState } from 'react';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { Layout } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
import { Divider, Radio, Typography } from 'antd';

interface MyDropzoneProps {
    onFilesSelected: (files: FileWithPath[]) => void;
}

const MyDropzone: React.FC<MyDropzoneProps> = ({ onFilesSelected }) => {
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
            //json
            'application/json': ['.json'],
        },
        maxFiles: 1,
    });

    return (
        <Layout
            {...getRootProps()}
            className={`dropzone ${isDragActive ? 'active' : ''}`}
            style={{ padding: '2rem', borderRadius: '5px' }}
        >
            <input {...getInputProps()} type="file" />
            {isDragActive ? (
                <Typography.Title level={5}> Kéo file vào đây</Typography.Title>
            ) : (
                <Typography.Title level={5}> Bạn có thể kéo file vào hoặc click vào đây</Typography.Title>
            )}
            {isFilePick && <Paragraph>File đã được chọn</Paragraph>}
        </Layout>
    );
};

export default MyDropzone;
