import React from 'react';
import { Avatar, Layout, Menu, Breadcrumb, Input, Typography, Tabs} from 'antd';
import {
  HomeOutlined,
  FileImageOutlined,
  AudioOutlined,
  VideoCameraOutlined,
  BlockOutlined,
  UserOutlined,
  BellOutlined,
  MailOutlined,
  SettingOutlined,
  SearchOutlined,
  QuestionOutlined,

} from '@ant-design/icons';
import './css/App.css';
import logo from './assets/logo.png'
import Embed from './views/Embed'
import Extract from './views/Extract'
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;
const { TabPane } = Tabs;
const { Title } = Typography;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  callback = (key) => {
    console.log(key);
  }
  onFinish = (values) => {
    console.log('Success:', values);
  };
  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    const { collapsed } = this.state;
    const onSearch = value => console.log(value);

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} width="240px">
          <div className="logo">
            <img src={logo} style={{ width: "48px", height: "48px", alt: "" }}></img>
            <span style={{ fontFamily: "楷体", fontSize: "34px" }}>版权卫士</span>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" style={{ fontSize: "20px" }}>
            <Menu.Item key="1" icon={<HomeOutlined style={{ fontSize: '24px' }} />}>
              首页
            </Menu.Item>
            <Menu.Item key="2" icon={<FileImageOutlined style={{ fontSize: '24px' }} />}>
              图片水印
            </Menu.Item>
            <Menu.Item key="3" icon={<AudioOutlined style={{ fontSize: '24px' }} />}>
              音频水印
            </Menu.Item>
            <Menu.Item key="4" icon={<VideoCameraOutlined style={{ fontSize: '24px' }} />}>
              视频水印
            </Menu.Item>
            <Menu.Item key="5" icon={<BlockOutlined style={{ fontSize: '24px' }} />}>
              区块链水印
            </Menu.Item>

            <Menu.Item key="6" icon={<QuestionOutlined style={{ fontSize: '24px' }} />} style={{ position: 'absolute', bottom: "100px" }}>
              帮助
            </Menu.Item>
            <Menu.Item key="7" icon={<UserOutlined style={{ fontSize: '24px' }} />} style={{ position: 'absolute', bottom: "50px" }}>
              关于我们
            </Menu.Item>
          </Menu>


        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, background: "#001529", height: "64px" }}>
            <div style={{ float: "left" }}>
              <Search prefix={<SearchOutlined />} placeholder="search..." onSearch={onSearch} enterButton />
            </div>
            <div style={{ float: "right", color: "white" }}>
              <Avatar style={{ backgroundColor: '#001529' }} icon={<BellOutlined />} />
              <Avatar style={{ backgroundColor: '#001529' }} icon={<MailOutlined />} />
              <Avatar style={{ backgroundColor: '#001529' }} icon={<UserOutlined />} />
              <span style={{ color: "white" }}>Kevin</span>
              <Avatar style={{ backgroundColor: '#001529' }} icon={<SettingOutlined />} />
            </div>
          </Header>

          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>图片水印</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: "5px 24px 24px 5px", minHeight: 520, backgroundSize: "100% 100%" }}>
              <Tabs onChange={this.callback} type="card" size='large'>
                <TabPane tab="水印嵌入" key="1" style={{ fontSize: "22px" }}>
                  <Embed />
                </TabPane>
                <TabPane tab="水印提取" key="2">
                  <Extract />
                </TabPane>
              </Tabs>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Kevin</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default App;
