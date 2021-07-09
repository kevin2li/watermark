import React from "react";
import {
    Upload,
    Form,
    Button,
    Typography,
    Modal
} from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { InfoCircleTwoTone } from '@ant-design/icons';
const { Title } = Typography
const { confirm } = Modal;
function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
const layout = {
    labelCol: { span: 2, offset: 6 },
    wrapperCol: { span: 4, },
};
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};
/* eslint-enable no-template-curly-in-string */

class Embed extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-4',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },

        ],
        wm_fileList: [],
    };

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

    handleChange = ({ fileList }) => this.setState({ fileList });
    handleChange_wm = ({ wm_fileList }) => this.setState({ wm_fileList });
    embed = () => {
        Modal.confirm({
            title: '已选择原始图片' + this.state.fileList.length + '张，是否确认嵌入?',
            icon: <InfoCircleTwoTone />,
            content: '',
            okText: '确认嵌入',
            cancelText: '取消',
            centered: true
          });
    }
    render() {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <>
                <div style={{ textAlign: "center", height:"65px", margin: "30px 0 0 0" }}>
                    <Typography>
                        <Title>水印嵌入系统</Title>
                    </Typography>
                </div>
                <Form
                    {...layout}
                    ref={this.formRef}
                    name="nest-messages"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    validateMessages={validateMessages}
                    style={{ margin: "30px 0 0 0" }}
                >
                    <div style={{height:"175px"}}>
                    <Form.Item
                        name=""
                        label="上传原始图片"
                        wrapperCol={{ offset: 1, span: 16 }}>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onPreview={this.handlePreview}
                            onChange={this.handleChange}
                        >
                            {uploadButton}
                        </Upload>
                    </Form.Item>
                    </div>
                    <div style={{height:"175px"}}>
                    <Form.Item
                        name=""
                        label="上传水印图片"
                        wrapperCol={{ offset: 1, span: 16 }}>
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            onPreview={this.handlePreview}
                            onChange={this.handleChange_wm}
                        >
                            {uploadButton}
                        </Upload>
                    </Form.Item>

                    </div>
                    <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
                        <Button type="primary" htmlType="submit" onClick={this.embed}>
                            嵌入水印
                        </Button>
                        <div style={{width:"20px", display:"inline-block"}}></div>
                        <Button htmlType="button" onClick={this.onReset}>
                            重置
                        </Button>
                    </Form.Item>
                </Form>

                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </>
        );
    }
}

export default Embed;