import NavBar from "./components/NavBar";
import Main from "./components/Main";
export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar/>
      <Main/>
    </div>
  );
}