import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">
          other pages
        </div>
      </div>
    </>
  );
}

export default App;
