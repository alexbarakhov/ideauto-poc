import Header from "./components/Header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Main from "./components/Main";
import './App.css';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header></Header>
      <Main />
    </DndProvider>
  );
}

export default App;
