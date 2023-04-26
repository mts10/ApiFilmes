
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './componentes/Header';
import Cadastro from './pages/cadastro';
import Home from './pages/home';
import Detalhes from './pages/detalhes';

function App() {
  return (
    
       <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='detalhes/:filme' element={<Detalhes />} />
          <Route path='cadastro' element={<Cadastro/>}/>
          <Route path='*' element={<h1>Pagina nao encontrada!</h1>}/>
        </Routes>
    </Router>
    
  );
}

export default App;
