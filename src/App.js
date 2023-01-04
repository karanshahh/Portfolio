import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './navbar/NavBar'
import Home from './home/Home'
import About from './about/About';
import Skills from './skills/Skills';

export default function App() {
  return (
    <div className="App wave">
      <NavBar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}


