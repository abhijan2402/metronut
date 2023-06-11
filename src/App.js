import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/FooterComp/Footer';
// import Form from './components/Screen/FormModal/Form';
import Home from './screens/Home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/metronut' element={<Home />} />
      </Routes>
        
      <Footer />
    </>
  );
}

export default App;
