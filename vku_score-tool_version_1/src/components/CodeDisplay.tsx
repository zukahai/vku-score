import React, { FunctionComponent, useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Button } from 'antd';
import { green } from '@ant-design/colors';
import { useNotification } from '../contexts/Notification';
interface OwnProps {
    content: string;
    language: string;
}

type Props = OwnProps;

const CodeDisplay: FunctionComponent<Props> = (props) => {
    const {openNotification} = useNotification();
    const [isCopy, setIsCopy] = useState(false);
    const handleCopyOnClick = () => {
        navigator.clipboard.writeText(props.content).then();
        openNotification('Copied!');
        setIsCopy(true);
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsCopy(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [isCopy]);
    return (
        <>
            <div style={{ textAlign: 'right', margin: '5px 0px' }}>
                <Button size={'small'} style={{ textAlign: 'center',
                    backgroundColor: green[6],
                 }} type='primary' onClick={handleCopyOnClick} 
                
                >
                    {isCopy ? 'Copied' : 'Copy'}
                </Button>
            </div>
            <SyntaxHighlighter
                language={props.language}
                style={darcula}
                CodeTag={'code'}
                showLineNumbers={true}
                children={props.content}
            ></SyntaxHighlighter>
        </>
    );
};

export default CodeDisplay;
