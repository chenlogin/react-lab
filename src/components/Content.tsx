import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import ManuList from '../routes/index';

interface MenuItem {
  title: string;
  path: string;
  icon?: string;
  iconColor?: string;
  component: React.ComponentType<any>;
}

const MainContent: React.FC = () => {
  return (
    <Routes>
      {ManuList.map((item: MenuItem) => (
        <Route
          key={item.path}
          path={item.path}
          element={<item.component />}
        />
      ))}
    </Routes>
  );
};

export default MainContent;