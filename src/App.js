import React from 'react';
import { Layout, Menu, Typography, Breadcrumb } from 'antd';
import Embed from './views/Embed';
import './App.css';
const { Header, Footer, Content } = Layout;
const { Link } = Typography

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      image_data: null,
      current_tab: '1'
    }
    this.menuRef = React.createRef();
  }

  render() {
    var content;
    content = <Embed></Embed>

    return (
      <Layout className="layout">
        <Header>
          <div className="logo">企业版</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={this.switch_nav}><Link >水印嵌入</Link></Menu.Item>
            <Menu.Item key="2" onClick={this.switch_nav}><Link >水印提取</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }} className="site-layout-background">
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <div className="site-layout-content">
            {content}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
  }
}

export default App;