import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';
import Workspace from '../pages/workspace/Workspace';
import Statistics from '../pages/statistics/Statistics';

const Header = () => {
  const {
    list_menu,
    container_menu,
    submenu_workspace,
    submenu_statistics,
    submenu_enter_active,
    submenu_exit_active
  } = css;
  const [activeWorkspace, setActiveWorkspace] = useState(false);
  const [activeStatistics, setActiveStatistics] = useState(false);
  const getActiveStatistics = `${submenu_statistics} ${
    activeStatistics ? submenu_enter_active : submenu_exit_active
  }`;

  const getActiveWorkspace = `${submenu_workspace} ${
    activeWorkspace ? submenu_enter_active : submenu_exit_active
  }`;


  // ${activeStatistics ? submenu_enter_active : ''}

  // const getActiveClass = ({ isActive }) => (isActive ? active : '');

  console.log('Статистика', activeStatistics);
  console.log('Звіти', activeWorkspace);

  return (
    <div className={container_menu}>
      <div className={list_menu}>
        <NavLink to="news">Новини</NavLink>
        <NavLink to="admin">Адмін</NavLink>
        <NavLink
          onClick={() => setActiveWorkspace(true)}
          onMouseEnter={() => setActiveWorkspace(true)}
          onMouseLeave={() => setActiveWorkspace(false)}
        >
          Звіти
        </NavLink>
        <NavLink
          onClick={() => setActiveStatistics(true)}
          onMouseEnter={() => setActiveStatistics(true)}
          onMouseLeave={() => setActiveStatistics(false)}
        >
          Статистика
        </NavLink>
        <NavLink to="chat">Чат</NavLink>
      </div>

      <div
        className={getActiveWorkspace}
        onMouseEnter={() => setActiveWorkspace(true)}
        onMouseLeave={() => setActiveWorkspace(false)}
        onFocus={() => setActiveWorkspace(true)}
        onBlur={() => setActiveWorkspace(false)}
        onClick={() => setActiveWorkspace(false)}
      >
        <Workspace />
      </div>

      <div
        className={getActiveStatistics}
        onMouseEnter={() => setActiveStatistics(true)}
        onMouseLeave={() => setActiveStatistics(false)}
        onFocus={() => setActiveStatistics(true)}
        onBlur={() => setActiveStatistics(false)}
        onClick={() => setActiveStatistics(false)}
      >
        <Statistics />
      </div>
      <Outlet />
    </div>
  );
};

export default Header;

// const links = [
//   { to: 'news', label: 'Новини' },
//   { to: 'admin', label: 'Адмін' },
//   { to: 'workspace', label: 'Звіти', subLinks: <Workspace /> },
//   { to: 'statistics', label: 'Статистика', subLinks: <Statistics /> },
//   { to: 'chat', label: 'Чат' },
// ];
