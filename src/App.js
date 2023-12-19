import './App.css';
import Header from './components/Header';
import ResponsiveAppBar from './components/Navbar';
import ValueProposotion from './components/ValueProposotion';


function App() {
  return (
    <>
        <ResponsiveAppBar/>
        <Header />
        <ValueProposotion />
    </>
  );
}

export default App;
