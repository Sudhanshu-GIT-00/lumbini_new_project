import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ConnectModal from './Components/ConnectModal';
import Partners from './Components/Partners';
import { BrowserRouter as Router, Route, Routes, Link, } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard';
import AboutUs from './Components/Pages/AboutUs';
import Services from './Components/Pages/Services';
import Projects from './Components/Pages/Projects';
import Jobs from './Components/Pages/Jobs';
import ContactUs from './Components/Pages/ContactUs';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Routes>
            <Route exact path="/about" element={<AboutUs/>} />
            <Route exact path="/services" element={<Services/>} />
            <Route exact path="/projects" element={<Projects/>} />
            <Route exact path="/jobs" element={<Jobs/>} />
            <Route exact path="/contactus" element={<ContactUs/>} />
            
            {/* <Route exact path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} /> */}
            {/* for rendering depending on a promise */}
            <Route path="/" element={<Dashboard />} /> 
             {/* Default root should be at bottom */}
    </Routes>
    
    
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
