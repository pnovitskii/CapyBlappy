//import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Landing></Landing>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
