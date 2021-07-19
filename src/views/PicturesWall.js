import React from "react";
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';



class PicturesWall extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    console.log(this.props)
  }
  state = {
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
  };

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>上传</div>
      </div>
    );
    return (
      <>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={this.props.fileList}
          onPreview={this.props.handlePreview}
          onChange={this.props.handleChange}
        >
          {this.props.uploadButton?uploadButton:null}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.props.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </>
    );
  }
}

export default PicturesWall;