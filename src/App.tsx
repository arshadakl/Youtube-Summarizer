import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="leading-normal tracking-normal text-indigo-400 m-0 bg-cover bg-fixed bg-[url('/header.png')] " style={{height:"100vh"}}>
    <NavBar/>
    <Hero/>
    </div>
  );
}

export default App;
