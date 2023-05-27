import { Button, Layout, theme, Typography } from 'antd';
import { Content, Footer } from 'antd/es/layout/layout';
import { FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import './App.css';
import AppHeader from './components/HeaderComponent.tsx';
import Score from './pages/score/Score.tsx';

function App() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
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
                <FloatButton icon={<QuestionCircleOutlined />}></FloatButton>
                <FloatButton.BackTop></FloatButton.BackTop>
            </FloatButton.Group>
        </Layout>
    );
}

export default App;
