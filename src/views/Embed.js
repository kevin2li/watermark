import React from "react";
import { Image, Button, Space, Typography, Form, Modal, Row, Col, Empty } from 'antd';
import { InfoCircleTwoTone } from '@ant-design/icons';
import PicturesWall from './PicturesWall'
import origin from '../assets/origin.jpg'
import wm from '../assets/wm.png'
const { Title } = Typography;

class Embed extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        embed: false,
        fileList: []
    };
    // 嵌入对话框
    handleCancel = () => this.setState({ previewVisible: false });
    handleOk = () => {
        this.setState({ embed: true })
    }
    embed = () => {
        Modal.confirm({
            title: '已选择载体图片' + 1 + '张，是否确认嵌入?',
            icon: <InfoCircleTwoTone />,
            content: '',
            okText: '确认嵌入',
            cancelText: '取消',
            centered: true,
            onOk: () => {
                this.handleOk();
            }
        });
        // this.setState({ embed: isOk})
    }

    onReset = () => {
        this.setState({ embed: false })
    }
    render() {
        return (
            <>
                <Row>
                    <Col span={24}>
                        <div style={{ textAlign: "center" }}>
                            <Title level={2} >图像水印嵌入</Title>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Form
                            name="basic"
                            labelCol={{ offset: 0, span: 5 }}
                            wrapperCol={{ offset: 1, span: 18 }}
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                            style={{ borderRight: "1px solid #1890ff", margin: "10px 0" }}
                        >
                            <div style={{ textAlign: "center", margin: "0 0 16px 0", fontSize: "16px", fontFamily: "微软雅黑", fontWeight: "bold" }}>
                                上传载体图片和水印图片
                            </div>
                            {/* <Title level={4} style={{marginLeft:"35px"}}>载体图片：</Title> */}
                            <Form.Item
                                label="载体图片："
                                name="origin"
                            >
                                <div style={{border:"1px solid blue", padding:"10px", width: "360px"}}>
                                <PicturesWall img={origin}></PicturesWall>
                                </div>
                            </Form.Item>
                            {/* <Title level={4} style={{marginLeft:"35px"}}>水印图片：</Title> */}

                            <Form.Item
                                label="水印图片"
                                name="wm"
                            >
                                <div style={{border:"1px solid blue", padding:"10px", width: "360px"}}>

                                <PicturesWall img={wm}></PicturesWall>
                                </div>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 6, span: 16 }} >
                                <div style={{ position: "absolute", bottom: "-20px" }}>
                                    <Button type="primary" htmlType="submit" style={{ width: "220px", height: "45px", fontSize: "22px", fontFamily: "微软雅黑" }} onClick={this.embed}>
                                        嵌入水印
                                    </Button>
                                    <span style={{ width: "30px", display: "inline-block" }}></span>
                                    <Button type="button" htmlType="submit" style={{ width: "110px", height: "45px", fontSize: "22px", fontFamily: "微软雅黑" }} onClick={this.onReset}>
                                        重置
                                    </Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={12}>
                        <div style={{ margin: "10px 0" }}>
                            <div style={{ textAlign: "center", margin: "0 0 16px 0", fontSize: "16px", fontFamily: "微软雅黑", fontWeight: "bold" }}>
                                嵌入水印后图片
                            </div>

                            {this.state.embed ? 
                            <>
                                <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
                                    <Space style={{marginLeft:"53px"}}>
                                        <Image
                                            width={100}
                                            height={100}
                                            src={this.state.embed ? origin : "error"}
                                            fallback="data:image/png;base64,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"
                                        />
                                    </Space>
                                    <div style={{ position: "absolute", bottom: "-262px" }}>
                                    <Button type="primary" htmlType="submit" style={{ width: "220px", height: "45px", fontSize: "22px", fontFamily: "微软雅黑" }}>
                                            批量下载
                                        </Button>
                                    </div>
                                </Form.Item>
                                </>
                                : <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                                    <div style={{ height:"60px"}}></div>
                                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                    <div style={{ textAlign: "center" }}>
                                        请在左侧先上传图片
                                    </div>
                                </Form.Item>}
                        </div>
                    </Col>
                </Row>
                <Modal
                    visible={this.state.previewVisible}
                    title={this.state.previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
                </Modal>
            </>
        );
    }
}

export default Embed;