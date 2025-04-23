### react router
https://reactrouter.com/start/framework/routing
- React Router v7 requires the following minimum versions
  - node@20
  - react@18
  - react-dom@18
- a basic template
npx create-react-router@latest my-react-router-app


npm install --save react-router


React Router 是一个基于 React 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。

路由配置
首先，react-router应该是核心库，提供路由的基本逻辑和组件，比如Router、Route、Routes这些。
react-router-dom则是专门为web应用设计的，它包含核心库的所有内容，并添加了浏览器环境特定的组件，比如BrowserRouter、Link、NavLink等。

```
<BrowserRouter>
  <Layout style={layoutStyle}>
    <Header style={headerStyle}>Header</Header>
    <Layout>
      <Sider width="25%" style={siderStyle}>
        <SiderContent />
      </Sider>
      {/* 内容区域使用路由出口 */}
      <Content style={contentStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/link" element={<LinkPage />} />
        </Routes>
      </Content>
    </Layout>
    <Footer style={footerStyle}>Footer</Footer>
  </Layout>
</BrowserRouter>
```

https://juejin.cn/post/7460163795564331043
https://baimingxuan.github.io/react-router6-doc/start/overview
https://blog.csdn.net/m0_73574455/article/details/144777301
https://reactrouter.com/home
https://blog.csdn.net/lph159/article/details/140732920
https://www.runoob.com/react/react-router.html
https://react-guide.github.io/react-router-cn/docs/guides/basics/RouteConfiguration.html