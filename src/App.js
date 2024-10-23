import { Route,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import CaseCreation from './Components/CaseCreation';
import Hospital from './Components/Hospital';
import NavbarAside from './Components/NavbarAside';
import Product from './Components/Product';
import Categories from './Components/Categories';
import Departments from './Components/Departments';
import Doctors from './Components/Doctors';
import Priniciples from './Components/Priniciples';
import SalesEmploye from './Components/SalesEmploye';
import HospitalForm from './Components/Hospitals/HospitalForm';

function App() {
  return (
    <div className="App">
    <NavbarAside/>
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='product' element={<Product/>}/>
    <Route path='casecreation' element={<CaseCreation/>}/>
    <Route path='categories' element={<Categories/>}/>
    <Route path='departments' element={<Departments/>}/>
    <Route path='doctors' element={<Doctors/>}/>
    <Route path='hospital' element={<Hospital/>}/>
    <Route path='principles' element={<Priniciples/>}/>
    <Route path='SalesEmploye' element={<SalesEmploye/>}/>
    <Route path='HospitalForm' element={<HospitalForm/>}/>
    </Routes>
    </div>
  );
}

export default App;
