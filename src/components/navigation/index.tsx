import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import navigationItems from './data';
import './styles.css';

interface NavigationProps {

};

const Navigation: React.FC<NavigationProps> = (): React.ReactElement => {
  const params = useLocation();

  const renderNavItems = (): React.ReactElement[] => {
    return navigationItems.map((navItem): React.ReactElement => {
      return (
        <div 
          className='nav-item' 
          style={{ fontWeight: params.pathname === navItem.path ? 'bold' : 'normal' }} 
          key={navItem.id}
        >
          <Link to={navItem.path}>
            {navItem.name}
          </Link>
        </div>
      );
    });
  };

  return (
    <div className='navigation-container'>
      {renderNavItems()}
    </div>
  );
};

export default Navigation;