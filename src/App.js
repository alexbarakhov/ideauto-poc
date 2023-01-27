import Header from "./components/Header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Main from "./components/Main";
import './App.css';

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";



const theme = createTheme({

  palette: {
    primary: {
      main: '#00ff00'
    },
    secondary: green
  }

})

function App() {
  return (
      <ThemeProvider theme={theme}>
        <DndProvider backend={HTML5Backend}>
          <Header></Header>
          <Main />
        </DndProvider>
      </ThemeProvider>

  );
}

export default App;
