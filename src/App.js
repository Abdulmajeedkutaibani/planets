import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Navbar />
        <div className='content'>
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;
