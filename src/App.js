import Button from "./components/Button";
import Stack from "./components/Stack";
import ResizePanel from "react-resize-panel";
import style from './App.css';

function App() {
  function handleClick() {
    console.log('dale don dale');
  }
  return (

      <div className="mainContainer">

        <ResizePanel
          direction="e"
          style={{ width: "25%", minWidth: "200px", }}
        >
          <aside className="aside">

            <Stack wrap>
              <div>
              <Button
                label="button"
                backgroundColor="green"
                size="lg"
                onClick={handleClick}
              />
              </div>

              <div className="stack-item">box</div>
              <div>

              <Button
                label="Button 2"
                size="sm"
              />
              </div>
              <div className="stack-item">box</div>
            </Stack>
          </aside>
        </ResizePanel>

        <main className="main">
        <ResizePanel
          direction="e"
          style={{ width: "50%", maxWidth: "70vw",}}
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




  );
}

export default App;
