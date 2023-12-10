import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Signup from './comoponents/Signup';
import Login from './comoponents/Login';
import CreateNote from './comoponents/CreateNote';
import Notes from './comoponents/Notes';
function App() {
  return (
    <div className="App">
     <h2>Notes app</h2>

     <Routes>
      <Route path='/register' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/addnote' element={<CreateNote/>} />
      <Route path='/notes' element={<Notes/>} />
     </Routes>
    </div>
  );
}

export default App;
