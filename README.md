### 安装
```
# required: { node: '^18.0.0 || ^20.0.0 || >=22.0.0' }
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

### 安装 Ant Design
```
npm install antd
npm install @ant-design/v5-patch-for-react-19

// Import the compatibility package at the application entry
// antd 5 兼容 React 19
import '@ant-design/v5-patch-for-react-19';
```

### react-router-dom（[查看路由配置](./documents/ROUTER.md)）
```
<BrowserRouter>
  ├─ Layout
  │    ├─ Header
  │    ├─ Layout
  │    │    ├─ Sider (包含 SiderContent)
  │    │    └─ Content (包含 IndexRouter)
  │    └─ Footer
  └─
```

### React使用
- https://zh-hans.react.dev/learn
- React 组件是返回标签的 JavaScript 函数，React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母。
```
function MyButton() {
  return (
    <button>我是一个按钮</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>欢迎来到我的应用</h1>
      <MyButton />
    </div>
  );
}
```
- JSX是由 React 推广的 JavaScript 语法扩展。将 JSX 标签与相关的渲染逻辑放在一起，使得创建、维护和删除 React 组件变得容易。JSX 比 HTML 更加严格。你必须闭合标签，如 <br />。你的组件也不能返回多个 JSX 标签。你必须将它们包裹到一个共享的父级中，比如 <div>...</div> 或使用空的 <>...</> 包裹。你的标签和 return 关键字不在同一行，则必须把它包裹在一对括号中
- jsx在线转换器：https://transform.tools/html-to-jsx
```
<!-- Hello world -->
<div class="awesome" style="border: 1px solid red">
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
</div>
<p>Enter your HTML here</p>

// 等价于
<>
  {/* Hello world */}
  <div className="awesome" style={{ border: "1px solid red" }}>
    <label htmlFor="name">Enter your name: </label>
    <input type="text" id="name" />
  </div>
  <p>Enter your HTML here</p>
</>
```
- 添加样式
  - 在 React 中，你可以使用 className 来指定一个 CSS 的 class
- JSX 会让你把标签放到 JavaScript 中。而大括号会让你 “回到” JavaScript 中
- style={{}} 并不是一个特殊的语法，而是 style={ } JSX 大括号内的一个普通 {} 对象
```
return (
  <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
);
```

- 从 React 引入 useState，组件中声明一个 state 变量，从 useState 中获得两样东西：当前的 state（count），以及用于更新它的函数（setCount）。你可以给它们起任何名字，但按照惯例会像 [something, setSomething] 这样为它们命名，如果你多次渲染同一个组件，每个组件都会拥有自己的 state
- 以 use 开头的函数被称为 Hook。useState 是 React 提供的一个内置 Hook。Hook 比普通函数更为严格。你只能在你的组件（或其他 Hook）的 顶层 调用 Hook。如果你想在一个条件或循环中使用 useState，请提取一个新的组件并在组件内部使用它

- 状态提升
  - 要从多个子组件收集数据，或让两个子组件相互通信，请改为在其父组件中声明共享 state。父组件可以通过 props 将该 state 传回给子组件。这使子组件彼此同步并与其父组件保持同步。
- 反向数据流
  - 添加一个 onChange 事件处理器，使用其设置父组件的 state
```
<SearchBar
  filterText={filterText}
  inStockOnly={inStockOnly}
  onFilterTextChange={setFilterText}
  onInStockOnlyChange={setInStockOnly} />
```
- React 组件使用 props 来进行组件之间的通讯。每个父组件都可以通过为子组件提供 props 的方式来传递信息。
```
export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}
//读取props
function Avatar({ person, size = 100 }) {
  // 在这里 person 和 size 是可访问的
}
//等价于于从函数参数中读取属性
function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}
```

### Hooks（[详情](./documents/HOOKS.md)）
https://zh-hans.react.dev/reference/react/hooks
- useState Hook 为组件添加状态；
- useContext Hook 为组件提供上下文；
- useReducer Hook 为组件提供状态管理；
- useRef Hook 为组件提供引用；
- useEffect Hook 为组件添加生命周期方法；

