import Card from "./components/Card";
import Header from "./components/Header";
import ResizePanel from "react-resize-panel";
import './App.css';

function App() {

  return (
          <>
            <Header></Header>

            <div className="panelsContainer">
              <ResizePanel
                direction="e"
                style={{ width: "290px", minWidth: "160px", maxWidth: "49vw",}}
              >
                <aside className="aside">

                  <Card label="Card 1"></Card>
                  <Card label="Card 2"></Card>
                  <Card label="Card 3"></Card>

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
