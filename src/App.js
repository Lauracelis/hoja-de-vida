import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Inicio from './pages/Index';
import PerfilProfesional from './pages/PerfilProfesional';
import Experiencia from './pages/Experiencia';
import Educacion from './pages/Educacion';
import Habilidades from './pages/Habilidades'
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Inicio} />
      <Route path='/PerfilProfesional' component={PerfilProfesional}/>
      <Route path= '/Experiencia' component={Experiencia}/>
      <Route path= '/Educacion' component={Educacion}/>
      <Route path= '/Habilidades' component={Habilidades}/>
      </Switch>
    </Router>
  );
}

export default App;
