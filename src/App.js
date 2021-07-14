import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  HomeTwoTone,
  FileImageTwoTone,
  AudioTwoTone,
  VideoCameraTwoTone,
  BlockOutlined,
} from '@ant-design/icons';
import './css/App.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeTwoTone />}>
              首页
            </Menu.Item>
            <SubMenu key="sub1" icon={<FileImageTwoTone />} title="图片水印">
              <Menu.Item key="3">嵌入</Menu.Item>
              <Menu.Item key="4">提取</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AudioTwoTone />} title="音频水印">
              <Menu.Item key="6">嵌入</Menu.Item>
              <Menu.Item key="8">提取</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<VideoCameraTwoTone />} title="视频水印">
              <Menu.Item key="6">嵌入</Menu.Item>
              <Menu.Item key="8">提取</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<BlockOutlined />} title="区块链水印">
              <Menu.Item key="6">嵌入</Menu.Item>
              <Menu.Item key="8">提取</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ position: 'fixed', zIndex: 1, padding: 0, background: "#001529" }}>

          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>图片水印</Breadcrumb.Item>
              <Breadcrumb.Item>嵌入</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default App;
