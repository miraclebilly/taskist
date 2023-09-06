// Nav Component
import {React} from 'react';
import ThemeToggle from './ThemeToggle'
import './App.css'


const Navbar = (props) => {


  return (
    <nav>
      <div className={`flex border-b  ${props.theme === 'dark'? 'border-white p-4' : 'border-black p-4'} ` }>                             
          <h1 className="text-xl pr-8 text-black p-4 ">TaskList</h1>

          <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
