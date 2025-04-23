import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import ManuList from '../routes/index';
import { useNavigate } from 'react-router-dom';
function SiderContent() {
  const history = useNavigate();
  const handleClick = ({ item }) => {
    const path = item.props.path;
    history(path);
  };
  const items = [
    {
      key: 'sub1',
      label: 'Navigation One',
      icon: <MailOutlined />,
      children: [
        {
          key: 'g1',
          label: 'Item 1',
          type: 'group',
          children: [
            { key: '1', label: ManuList[0].title, path: ManuList[0].path },
            { key: '2', label: ManuList[1].title, path: ManuList[1].path },
          ],
        },
      ],
    },
    {
      key: 'sub2',
      label: 'Navigation Two',
      icon: <AppstoreOutlined />,
      children: [
        {
          key: 'sub3',
          label: 'Submenu',
          children: [
            { key: '3', label: ManuList[2].title, path: ManuList[2].path },
          ],
        },
      ],
    },
  ];

  return (
    <Menu
      onClick={ handleClick }
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  )
}
export default SiderContent