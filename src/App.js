import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedInfo from './components/FeaturedInfo';
function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Navbar />
        <div className='content'>
          <Hero />
          <FeaturedInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
