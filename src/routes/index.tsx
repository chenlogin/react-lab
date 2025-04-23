import React from 'react';
import Home from '@/views/Home';
import Detail from '@/views/Detail';
import LinkPage from '@/views/LinkPage';

// 定义菜单项的类型
interface MenuItem {
  title: string;
  path: string;
  icon: string;
  iconColor: string;
  component: React.ComponentType; // 组件类型
}

const ManuList: MenuItem[] = [
    {
        title: '首页',
        path: '/',
        icon: '&#xe628;',
        iconColor: '#ff08f5',
        component: Home
    },
    {
        title: '详情页',
        path: '/detail',
        icon: '&#xe660;',
        iconColor: '#6a00fe',
        component: Detail
    },
    {
        title: '友情链接',
        path: '/link',
        icon: '&#xe693;',
        iconColor: '#f50707',
        component: LinkPage
    }
];
export default ManuList;