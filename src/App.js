import Button from "./components/Button";
import Stack from "./components/Stack";
import ResizePanel from "react-resize-panel";
import './App.css';

function App() {

  function handleClick() {
    console.log('dale don dale');
  }

  return (
<>
    <header className="header">
      <Stack wrap>
        <Button label="Button"/>
        <Button label="Button 2"/>
        <Button
          label="Button 3"
          backgroundColor="lightgreen"
          onClick={handleClick}
        />
      </Stack>
    </header>

    <div className="panelsContainer">

        <ResizePanel
          direction="e"
          style={{ width: "290px", minWidth: "160px", maxWidth: "49vw",}}
        >
          <aside className="aside">

            <div className="card"></div>
          </aside>
        </ResizePanel>

        <main className="main">
        <ResizePanel
          direction="e"
          style={{ width: "30vw", minWidth: "240px", maxWidth: "50vw",}}
        >
          <div className="sections">
            <section className="section section--1">Drop 1</section>
            <section className="section section--2">Drop 2</section>
            <section className="section section--3">Drop 3</section>
          </div>
          </ResizePanel>
          <div className="table"></div>

        </main>

    </div>
</>

  );
}

export default App;
