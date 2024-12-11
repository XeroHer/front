
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddTeam from './Components/AddTeam';
import UpdateTeam from './Components/UpdateTeam';
import ShowTotal from './Components/ShowTotal';
import DeleteData from './Components/DeleteData';
import Display from './Components/Display';
import Result from './Components/Result';
import Watch from './Components/Watch';


function App() {

  
  return (
    <>
     <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<AddTeam/>} />
          <Route path="/UpdateTeam" element={<UpdateTeam/>} />
          <Route path="/ShowTotal" element={<ShowTotal/>} />
          <Route path="/DeleteData" element={<DeleteData/>} />
          <Route path="/Display" element={<Display/>} />
          <Route path="/Result" element={<Result/>} />
          <Route path="/Watch" element={<Watch/>} />

         </Routes>
      </div>
     </Router>
    </>
  );
}

export default App;
