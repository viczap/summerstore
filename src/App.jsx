import './App.css';
import Button from 'react-bootstrap/Button';

function App() {

  const showMessageInConsole = () => {
    console.log("You've clicked the button" + Math.random());
  }

  return (
    <div>
      <h1>Summer Store</h1>
      <p>This is my e-commerce!</p>
      <Button onClick={showMessageInConsole}>Show alert</Button>
    </div>
  );
}

export default App;
