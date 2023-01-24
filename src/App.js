import Button from "./components/Button";
import Stack from "./components/Stack";
import './App.css';

function App() {
  function handleClick() {
    console.log('dale don dale');
  }
  return (
    <>
      <Button
        label="lolo"
        backgroundColor="green"
        size="lg"
        onClick={handleClick}
      />
      <Button
        label="lolo2"
        size="sm"
      />
      <Stack>
        <div className="stack-item">1</div>
        <div className="stack-item">2</div>
        <div className="stack-item">3</div>
        <div className="stack-item">4</div>
        <div className="stack-item">5</div>
      </Stack>
    </>
  );
}

export default App;
