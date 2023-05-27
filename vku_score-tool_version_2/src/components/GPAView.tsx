import { Col, Divider, Layout, Row, Tag, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { FunctionComponent } from 'react';

interface GPAProps {
    GPA: number;
    GPAChange: number;
}

const GPAView: FunctionComponent<GPAProps> = (props) => {
    return (
        <Content>
            <Layout
                style={{
                    marginTop: '10px',
                    marginBottom: '10px',
                    padding: '24px',
                    borderRadius: '5px',
                }}
            >
                <Row style={{ borderRadius: '5px' }}>
                    <Col flex={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Divider plain orientation={'center'} style={{ background: '#fff', padding: '24px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography.Title level={3}>GPA Cũ</Typography.Title>
                                <Typography.Text style={{ fontWeight: 'bold' }}>
                                    <Tag
                                        style={{
                                            fontSize: '24px',
                                            padding: '10px',
                                        }}
                                        color={props.GPA >= props.GPAChange ? 'green' : 'red'}
                                    >
                                        {props.GPA.toFixed(2)}
                                    </Tag>
                                </Typography.Text>
                                <Typography.Text style={{ fontWeight: 'bold' }}>
                                    <Tag
                                        style={{
                                            marginTop: '10px',
                                        }}
                                        color={props.GPAChange <= props.GPA ? 'green' : 'red'}
                                    >
                                        {props.GPA}
                                    </Tag>
                                </Typography.Text>
                            </div>
                        </Divider>
                    </Col>
                    <Col flex={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Divider plain orientation={'center'} style={{ background: '#fff', padding: '24px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography.Title level={3}>GPA Mới</Typography.Title>
                                <Typography.Text style={{ fontWeight: 'bold' }}>
                                    <Tag
                                        style={{
                                            fontSize: '24px',
                                            padding: '10px',
                                        }}
                                        color={props.GPAChange >= props.GPA ? 'green' : 'red'}
                                    >
                                        {props.GPAChange.toFixed(2)}
                                    </Tag>
                                </Typography.Text>
                                <Typography.Text style={{ fontWeight: 'bold' }}>
                                    <Tag
                                        style={{
                                            marginTop: '10px',
                                        }}
                                        color={props.GPAChange >= props.GPA ? 'green' : 'red'}
                                    >
                                        {props.GPAChange}
                                    </Tag>
                                </Typography.Text>
                            </div>
                        </Divider>
                    </Col>
                    <Col flex={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Divider plain orientation={'center'} style={{ background: '#fff', padding: '24px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography.Title level={3}>Độ Chênh Lệch</Typography.Title>
                                <Typography.Text style={{ fontWeight: 'bold' }}>
                                    <Tag
                                        style={{
                                            fontSize: '24px',
                                            padding: '10px',
                                        }}
                                        color={props.GPA - props.GPAChange <= 0 ? 'green' : 'red'}
                                    >
                                        {(props.GPAChange - props.GPA).toFixed(3)}
                                    </Tag>
                                </Typography.Text>
                                <Typography.Text style={{ fontWeight: 'bold' }}>
                                    <Tag
                                        style={{
                                            marginTop: '10px',
                                        }}
                                        color={props.GPAChange >= props.GPA ? 'green' : 'red'}
                                    >
                                        {props.GPAChange - props.GPA}
                                    </Tag>
                                </Typography.Text>
                            </div>
                        </Divider>
                    </Col>
                </Row>
            </Layout>
        </Content>
    );
};

export default GPAView;
