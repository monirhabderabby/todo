import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calender from './Pages/Calender/Calender';
import CompleteTasks from './Pages/CompleteTasks/CompleteTasks';
import Todo from './Pages/Todo/Todo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Todo />} />
        <Route path='/completetasks' element={<CompleteTasks />} />
        <Route path='/calender' element={<Calender />} />
      </Routes>
    </div>
  );
}

export default App;
