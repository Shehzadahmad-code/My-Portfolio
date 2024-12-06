// import logo from './logo.svg';
import './App.css';
import ContactMe from './components/ContactMe/ContactMe.jsx';
import Heading from './components/Heading/Heading.js';
import Navbar from './components/Navbar';
import Skills from './components/Skills/Skills.jsx';
import Footer from './footer.jsx';
// import ContactMe from './components/ContactMe/ContactMe.jsx';

function App() {
  return (
    <>
    
    <Navbar/>
    <div>
      <Heading/>
    </div>
    <Skills/>
    <ContactMe/>
    <Footer/>
    </>
  );
}

export default App;
