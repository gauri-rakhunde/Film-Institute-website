// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Courses from './pages/Courses'
import RF from './component/form'
import Admission from './component/Admission';
import Contactus from './component/Contact';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Aboutus' element={<Aboutus/>}/>
      <Route path='/Courses' element={<Courses/>}/>
      <Route path='/RF' element={<RF/>}/>
      <Route path='/Admission' element={<Admission/>}/>
      <Route path='/Contactus' element={<Contactus/>}/>
      
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
