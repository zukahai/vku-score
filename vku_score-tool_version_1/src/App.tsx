import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, CodeOutlined } from '@ant-design/icons';
import { Button, FloatButton, Image, Layout, theme, Typography } from 'antd';
import ScoreRecommend from './pages/ScoreRecommend.tsx';
import './App.css';
import logo from './datas/images/logovku.png';
import { Footer } from 'antd/es/layout/layout';
const { Header, Sider, Content } = Layout;

interface ScoreCount {
    A: number;
    B: number;
    C: number;
    D: number;
    F: number;
}

const App: React.FC = () => {
    const readJsonFile = async (file: File) => {
        const fileContent = await file.text();
        return JSON.parse(fileContent);
    };

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'start',
                            marginLeft: '20px',
                            flexDirection: 'column',
                        }}
                    >
                        <Image src={logo} height={30} preview={false} />
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <ScoreRecommend />
                </Content>
            </Layout>
            <FloatButton.Group>
                <FloatButton icon={<CodeOutlined />} tooltip={'Code Lấy Danh Sách Điểm'} />
                <FloatButton.BackTop />
            </FloatButton.Group>
            <Footer style={{ textAlign: 'center' }}>VKU SCORE ©2023 Created by Gớm Chời Team & Contributors</Footer>
        </Layout>
    );
};

export default App;
