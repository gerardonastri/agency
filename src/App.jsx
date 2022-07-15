import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './container/Home/Home'
import Services from './container/Services/Services';
import Process from './container/Process/Process';
import Clients from './container/Clients/Clients';
import Features from './container/Features/Features';
import About from './container/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Process />
      <Clients />
      <Features />
      <About />
      <Footer />
    </div>
  );
}

export default App;
