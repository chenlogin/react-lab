## React Router

### 1、react-router是核心库，提供路由的基本逻辑和组件，比如Router、Route、Routes

React Router 是一个基于 React 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。

https://react-guide.github.io/react-router-cn/index.html
- React Router v7 requires the following minimum versions
  - node@20
  - react@18
  - react-dom@18
- a basic template
  - npx create-react-router@latest my-react-router-app

### 2、react-router-dom是专门为web应用设计的，它包含核心库的所有内容，并添加了浏览器环境特定的组件，比如BrowserRouter、Link、NavLink等。

- 基础用法
```
// App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
 
function App() {
  return (
    <BrowserRouter>
      {/* 导航链接 */}
      <nav>
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="/user">用户</Link>
      </nav>
 
      {/* 路由配置 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}
```
- 路由类型
  - BrowserRouter
  - HashRouter
- 路由集中配置
```
// routes.js
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'users', element: <Users /> }
    ]
  }
]
 
// App.jsx
import { useRoutes } from 'react-router-dom'
 
function App() {
  const element = useRoutes(routes)
  return element
}
```









