import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
library.add(fas);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" theme="primary" size="10x" />
        <Menu
          defaultIndex="0"
          onSelect={(index) => {
            alert(index);
          }}
          mode="vertical"
          defaultOpenSubMenus={['2']}
        >
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link2</MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
          </SubMenu>
          <MenuItem>cool link3</MenuItem>
        </Menu>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
