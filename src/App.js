import React from "react";
import { AppBar, Container, Toolbar} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';


function App() {
  return (
    <div className="App">
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
          <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default App;
