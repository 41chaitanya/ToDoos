import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Outlet /> {/* Nested Routes Render Here */}
    </div>
  );
}

export default App;
