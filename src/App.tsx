import React from 'react';
import SiderContent from '@/components/SiderBar';
import MainContent from '@/components/Content';
import './App.css'
import { Layout } from 'antd'; // 按需引入

const { Header, Footer, Sider, Content } = Layout;
const layoutStyle = {
  height: '100vh',
};
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
const siderStyle: React.CSSProperties = {
  backgroundColor: '#fff',
};
const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
function App() {
  return (
    <>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Header</Header>
        <Layout>
          <Sider width="256" style={siderStyle}>
            <SiderContent />
          </Sider>
          <Content style={contentStyle}>
            <MainContent />
          </Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </>
  )
}

export default App
