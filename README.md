### 安装
```
# required: { node: '^18.0.0 || ^20.0.0 || >=22.0.0' }
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

### Demo
1、创建和嵌套组件
2、组件间共享数据
3、react-router
4、ant-design





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

JSX是由 React 推广的 JavaScript 语法扩展。将 JSX 标签与相关的渲染逻辑放在一起，使得创建、维护和删除 React 组件变得容易
JSX 比 HTML 更加严格。你必须闭合标签，如 <br />。你的组件也不能返回多个 JSX 标签。你必须将它们包裹到一个共享的父级中，比如 <div>...</div> 或使用空的 <>...</> 包裹。你的标签和 return 关键字不在同一行，则必须把它包裹在一对括号中


```
<!-- Hello world -->
<div class="awesome" style="border: 1px solid red">
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
</div>
<p>Enter your HTML here</p>


//jsx在线转换器：https://transform.tools/html-to-jsx
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
React 组件使用 props 来进行组件之间的通讯。每个父组件都可以通过为子组件提供 props 的方式来传递信息。
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

在 React 中，useState 以及任何其他以“use”开头的函数都被称为 Hook。
Hook 是特殊的函数，只在 React 渲染时有效
Hooks ——以 use 开头的函数——只能在组件或自定义 Hook 的最顶层调用。 你不能在条件语句、循环语句或其他嵌套函数内调用 Hook。
State 是屏幕上组件实例内部的状态。换句话说，如果你渲染同一个组件两次，每个副本都会有完全隔离的 state！改变其中一个不会影响另一个。

useState Hook 为组件添加状态
const [index, setIndex] = useState(0);
const [showMore, setShowMore] = useState(false);

设置 state 只会为下一次渲染变更 state 的值。一个 state 变量的值永远不会在一次渲染的内部发生变化， 即使其事件处理函数的代码是异步的。
```
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);
        alert(number); // 输出0，设置状态会请求一个新的重新渲染，但不会在已运行的代码中更改它。
      }}>+5</button>
    </>
  )
}
```
在下次渲染前多次更新同一个 state 
setNumber(n => n + 1) 这样传入一个根据队列中的前一个 state 计算下一个 state 的 函数，而不是像 setNumber(number + 1) 这样传入 下一个 state 值。

更新state中对象，你不应该直接修改存放在 React state 中的对象。相反，当你想要更新一个对象时，你需要创建一个新的对象（或者将其拷贝一份），然后将 state 更新为此对象。真正地 触发一次重新渲染
const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
使用 Immer 之类的库来减少重复代码
npm install immer use-immer
const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }
更新state中数组
```
import { useState } from 'react';
import { useImmer } from 'use-immer';

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [list, updateList] = useImmer(initialList);

  function handleToggle(artworkId, nextSeen) {
    updateList(draft => {
      const artwork = draft.find(a =>
        a.id === artworkId
      );
      artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={list}
        onToggle={handleToggle} />
    </>
  );
}
```


有时候你希望两个组件的状态始终同步更改。要实现这一点，可以将相关状态从这两个组件上移除，并把这些状态移到最近的父级组件，然后通过 props 将状态传递给这两个组件。这被称为“状态提升”

React 允许你覆盖默认行为，可通过向组件传递一个唯一 key（如 <Chat key={email}/> 来 强制 重置其状态。React 在移除一个组件时，也会销毁它的 state。

对于那些需要更新多个状态的组件来说，很难一眼看清所有的组件状态更新逻辑。对于这种情况，你可以在组件外部将所有状态更新逻辑合并到一个称为 “reducer” 的函数中。这样，事件处理程序就会变得简洁，因为它们只需要指定用户的 “actions”。在文件的底部，reducer 函数指定状态应该如何更新以响应每个 action

你会通过 props 将信息从父组件传递给子组件。但是，如果要在组件树中深入传递一些 prop，或者树里的许多组件需要使用相同的 prop，那么传递 prop 可能会变得很麻烦。Context 允许父组件将一些信息提供给它下层的任何组件，不管该组件多深层也无需通过 props 逐层透传

状态提升 到太高的层级会导致 “逐层传递 props” 的情况
useContext 是一个 Hook。和 useState 以及 useReducer一样，你只能在 React 组件中（不是循环或者条件里）立即调用 Hook。

提供 context 的组件和使用它的组件之间的层级插入任意数量的组件

状态管理： 随着你的应用的增长，最终在靠近应用顶部的位置可能会有很多 state。许多遥远的下层组件可能想要修改它们。通常 将 reducer 与 context 搭配使用来管理复杂的状态并将其传递给深层的组件来避免过多的麻烦。






Reducer 帮助你合并组件的状态更新逻辑。Context 帮助你将信息深入传递给其他组件。你可以将 reducers 和 context 组合在一起使用，以管理复杂应用的状态




https://zh-hans.react.dev/learn/typescript

1、文档
2、router（reducer, context）
3、ant-design



