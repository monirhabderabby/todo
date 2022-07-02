import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calender from "./Pages/Calender/Calender";
import CompleteTasks from "./Pages/CompleteTasks/CompleteTasks";
import Todo from "./Pages/Todo/Todo";
import TNavbar from "./Shared/TNavbar";
import "react-day-picker/dist/style.css";
import TFooter from "./Shared/TFooter";
import 'antd/dist/antd.min.css'

function App() {
    return (
        <div className="App">
            <TNavbar />
            <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/completetasks" element={<CompleteTasks />} />
                <Route path="/calender" element={<Calender />} />
            </Routes>
            <TFooter />
        </div>
    );
}

export default App;
