import React from "react";
import { Image, Button, Space, Typography, Form, Modal, Row, Col, Empty } from 'antd';
import { InfoCircleTwoTone } from '@ant-design/icons';
import PicturesWall from './PicturesWall'
import nuist1 from '../assets/nuist1.jpg'
import nuist2 from '../assets/nuist2.png'
import nuist_logo from '../assets/nuist_logo.jpg'

const { Title } = Typography;
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
class Embed extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [
            {
                uid: '1',
                name: 'image.png',
                status: 'done',
                url: nuist1,
            },
            {
                uid: '2',
                name: 'image.png',
                status: 'done',
                url: nuist2,
            },

        ],
        wm_fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: nuist_logo,
            },
        ],
        embed: false,
    };
    // 照片墙
    handleCancel = () => this.setState({ previewVisible: false });
    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    handleChange = ({ fileList }) => {
        console.log(fileList)
        for (let img of fileList) {
            if (img.status === "error") {
                img.status = "done"
            }
        }
        this.setState({ fileList: fileList })
    };

    wm_handleChange = ({ fileList }) => {
        console.log(fileList)
        for (let img of fileList) {
            if (img.status === "error") {
                img.status = "done"
            }
        }
        this.setState({ wm_fileList: fileList })
    };
    // 嵌入对话框
    handleOk = () => {
        this.setState({ embed: true })
    }
    embed = () => {
        Modal.confirm({
            title: '已选择载体图片' + this.state.fileList.length + '张，是否确认嵌入?',
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
                            <div style={{ textAlign: "center", margin: "0 0 16px 0",  fontSize: "22px", fontFamily: "微软雅黑", fontWeight: "bold" }}>
                                上传载体图片和水印图片
                            </div>
                            {/* <Title level={4} style={{marginLeft:"35px"}}>载体图片：</Title> */}
                            <Form.Item
                                label="载体图片："
                                name="origin"
                            >
                                <div style={{ border: "1px solid blue", background:"aliceblue", padding: "10px", width: "360px" }}>
                                    <PicturesWall fileList={this.state.fileList} uploadButton={true} handleCancel={this.handleCancel} handlePreview={this.handlePreview} handleChange={this.handleChange}></PicturesWall>
                                </div>
                            </Form.Item>
                            {/* <Title level={4} style={{marginLeft:"35px"}}>水印图片：</Title> */}

                            <Form.Item
                                label="水印图片"
                                name="wm"
                            >
                                <div style={{ border: "1px solid blue", background:"aliceblue", padding: "10px", width: "360px" }}>

                                    <PicturesWall fileList={this.state.wm_fileList} uploadButton={true} handleCancel={this.handleCancel} handlePreview={this.handlePreview} handleChange={this.wm_handleChange}></PicturesWall>
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
                            <div style={{ textAlign: "center", margin: "0 0 16px 0", fontSize: "22px", fontFamily: "微软雅黑", fontWeight: "bold" }}>
                                嵌入水印后图片
                            </div>

                            {this.state.embed ?
                                <>
                                    <Form.Item wrapperCol={{ offset: 3, span: 16 }} >
                                        <div style={{ border: "1px solid blue", background:"aliceblue", padding: "10px", width: "470px", height:"300px" }}>

                                            <PicturesWall fileList={this.state.fileList} uploadButton={false} handleCancel={this.handleCancel} handlePreview={this.handlePreview} handleChange={this.handleChange}></PicturesWall>
                                        </div>
                                        <div style={{ position: "absolute", bottom: "-65px" }}>
                                            <Button type="primary" htmlType="submit" style={{ width: "220px", marginLeft:"130px", height: "45px", fontSize: "22px", fontFamily: "微软雅黑" }}>
                                                批量下载
                                            </Button>
                                        </div>
                                    </Form.Item>
                                </>
                                : <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                                    <div style={{ height: "60px" }}></div>
                                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                    <div style={{ textAlign: "center", fontSize: "18px"}}>
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