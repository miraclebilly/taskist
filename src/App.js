
import './App.css';
import AddTask from './add'
import Nav from './nav'
import SideBar from './sidebar'


function App() {
  return (
    <div>
    <Nav />
    <div className="flex">
      <SideBar />
      <AddTask />
    </div>
   
  </div>
  );
}

export default App;
