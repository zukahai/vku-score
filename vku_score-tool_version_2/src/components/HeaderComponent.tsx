import React from 'react';
import { Button, Layout, Typography } from 'antd';
import logo from '../datas/images/logovku.png';

const { Header } = Layout;
const AppHeader = () => {
    return (
        <Header style={{ background: '#fff', padding: 0, display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="logo" style={{ width: '100px' }} />
                    <Typography.Title level={2} style={{ marginLeft: '10px', color: '#5cab3d', marginTop: '10px' }}>
                        VKU SCORE
                    </Typography.Title>
                </div>
                <div>
                    <Button type="dashed" style={{ marginRight: '10px' }}>
                        Giới thiệu
                    </Button>
                </div>
            </div>
        </Header>
    );
};

export default AppHeader;
