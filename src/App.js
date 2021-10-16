import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AppRoutes from "./AppRoutes";
import { setAuthentication } from "./AppInitializer";

const history = createBrowserHistory();

function App() {
  React.useEffect(() => {
    setAuthentication();
  }, []);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Router history={history}>
          <AppRoutes />
        </Router>
      </DndProvider>
    </>
  );
}

export default App;
