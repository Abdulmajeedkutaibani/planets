import Button from './components/Button';
import mars from './components/assets/planet-mars-internal.svg';
function App() {
  return (
    <div className='App'>
      <div className='container'>
        <img src={mars} alt='' />
        <Button />
      </div>
    </div>
  );
}

export default App;
