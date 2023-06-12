import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/FooterComp/Footer';
// import Form from './components/Screen/FormModal/Form';
import Home from './screens/Home/Home';
import Enroll from './screens/Enroll/Enroll';
import Mentorship from './screens/Mentorship/Mentorship';
import About from './screens/About/About';
import CarrerMentorship from './screens/CarrerMentorship/CarrerMentorship';

function App() {
  return (
    <>
      <Routes>
        <Route path='/metronut' element={<Home />} />
        <Route path='/metronut/Enroll' element={<Enroll />} />
        <Route path='/metronut/why-metorship' element={<Mentorship />} />
        <Route path='/metronut/About' element={<About />} />
        <Route path='/metronut/career-mentorship' element={<CarrerMentorship/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;