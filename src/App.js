import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/FooterComp/Footer';
// import Form from './components/Screen/FormModal/Form';
import Home from './screens/Home/Home';
import Navbar from './components/navbar/Navbar';
import Enroll from './screens/Enroll/Enroll';
import Mentorship from './screens/Mentorship/Mentorship';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/metronut' element={<Home />} />
        <Route path='/Enroll' element={<Enroll/>} />
        <Route path='/why-metorship' element={<Mentorship/>} />
      </Routes>
        
      <Footer />
    </>
  );
}

export default App;
