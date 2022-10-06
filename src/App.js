import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path = '/' element = {<Home/>}></Route>
        <Route path = '/all' element = {<AllUsers/>}></Route>
        <Route path = '/add' element = {<AddUser/>}></Route>
        <Route path = '/edit/:id' element = {<EditUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
