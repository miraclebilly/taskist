
import './App.css';
import Main from './Main'
import Nav from './nav'
import SideBar from './sidebar'


function App() {
  return (
    <div>
    <Nav />
    <div className="flex">
      <SideBar />
      <Main />
    </div>
   
  </div>
  );
}

export default App;
