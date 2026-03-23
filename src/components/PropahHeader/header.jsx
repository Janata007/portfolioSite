import React from 'react';
import './header.css';

const Header = () => {
  const menus = ['home', 'projects', 'art', 'contact'];
  
  return (
    <header className='header'>
      <nav>
        <ul>
          {menus.map((menu, index) => (
            <li key={index}>
              <a href={`#${menu}`}>{menu}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;