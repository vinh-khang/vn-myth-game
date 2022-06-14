import BattleStart from "./components/Homepage/Battle/BattleStart/BattleStart";
import Homepage from "./components/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import './App.scss';
import Login from "./components/Login/Login";
import BattleWaiting from "./components/Homepage/Battle/BattleWaiting/BattleWaiting";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { PrivateRoute } from './utils/common';

function App() {

  return (
    <DndProvider backend={HTML5Backend} >
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
        } />
        <Route path="/battle-start" element={<BattleStart />} />
        <Route path="/battle-waiting" element={<BattleWaiting />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </DndProvider>
  );
}

export default App;
