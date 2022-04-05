import React from 'react';
import Button from './components/Button/button';
import MenuItem from './components/Menu/menuItem';
import Menu from './components/Menu/menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={'0'}>
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link2</MenuItem>
          <MenuItem>cool link3</MenuItem>
        </Menu>
        <Button
          onClick={(e) => {
            e.preventDefault();
            alert(123);
          }}
        >
          {' '}
          Hello{' '}
        </Button>
        <Button disabled> Hello </Button>
        <Button btnType={'primary'} size={'lg'}>
          Hello
        </Button>
        <Button btnType={'danger'} size={'lg'}>
          Hello
        </Button>
        <Button btnType={'link'} href="http://www.baidu.com">
          {' '}
          Baidu Link{' '}
        </Button>
        <Button btnType={'link'} href="http://www.baidu.com" disabled>
          {' '}
          Baidu Link{' '}
        </Button>

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
