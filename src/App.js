import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import LatestRelease from './components/LatestRelease'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Registration from './components/Registration'

function App() {
  return (
    <div>
      <BrowserRouter>
     <MyNav />
    
     <Routes>
      <Route path="/Registration" element={<Registration />} />
      <Route path="/" element={<LatestRelease />} />
    </Routes>
     
     
      
     <MyFooter />
     </BrowserRouter>
    </div>
         
       

  );
}

export default App;
