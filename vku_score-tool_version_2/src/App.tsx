import { FloatButton, Layout, Modal, theme, Typography } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './App.css';
import AppHeader from './components/HeaderComponent.tsx';
import Score from './pages/score/Score.tsx';
import { useState } from 'react';
import Tutorial from './components/Tutorial.tsx';

function App() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
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
    return (
        <Layout>
            <Modal title="Hướng dẫn sử dụng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1000}>
                <Tutorial />
            </Modal>
            <AppHeader />
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 550,
                    background: colorBgContainer,
                }}
            >
                <Score></Score>
            </Content>
            <Footer>
                <Typography.Text type="secondary">Copyright © 2022</Typography.Text>
            </Footer>
            <FloatButton.Group shape="circle" style={{ right: '10' }}>
                <FloatButton
                    icon={<QuestionCircleOutlined />}
                    onClick={showModal}
                    tooltip="Hướng dẫn sử dụng"
                ></FloatButton>
                <FloatButton.BackTop></FloatButton.BackTop>
            </FloatButton.Group>
        </Layout>
    );
}

export default App;
