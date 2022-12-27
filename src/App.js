import "./App.css";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Todo from "./components/todo";
import Inpogress from "./components/inpogress";
import Completed from "./components/completed";

function App() {
  return (
    <div className="flex flex-row  h-screen  ">
      <div>
        <Sidebar />
      </div>
      <div className="bg-gray-200 overflow-auto">
        <Main />
        <div className="flex flex-row  gap-8 ml-8 mr-8 flex-grow o">
          <Todo />

          <Inpogress />
          <Completed />
        </div>
      </div>
    </div>
  );
}

export default App;
