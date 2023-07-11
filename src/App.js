import About from './pages/about';
import Auth from './pages/auth';
import Home from './pages/home';
import NoMatch from './pages/noMatch';
import './styles/index.scss'
import { Route, Routes } from "react-router-dom";
/**
 * 
 * sacrificio propio
 * voluntad de llevar el peso de tu cruz: catastrofes de tu vida
 * 
  alentar a otros a moverse adelante

  "todo lo que tienes es todo lo que necesitas!"


  estoy genuinamente agradecido por la capacidad de crear y construir a través del 
  código. Es una herramienta poderosa que nos permite dar vida a ideas, conectar 
  personas y mejorar la forma en que vivimos y trabajamos. En este mundo digital 
  en constante evolución, la programación se ha convertido en una habilidad 
  esencial para impulsar el progreso y la innovación.

  Pero no solo quiero quedarme con la gratitud, también siento una profunda 
  responsabilidad de retribuir a la sociedad todo lo que la programación me ha 
  dado. Quiero utilizar mis conocimientos y habilidades para hacer una diferencia 
  positiva en el mundo que me rodea. Hay tantas oportunidades para aplicar la 
  programación en áreas como la educación, la salud, el medio ambiente y generar 
  mas igualdad de oportunidades.
  Estoy convencido de que, a través de la colaboración y el intercambio de 
  conocimientos, podemos lograr cambios significativos. Quiero trabajar junto a 
  otros desarrolladores, empresas y organizaciones para desarrollar proyectos con
   un propósito, proyectos que no solo sean técnicamente sólidos, sino que 
   también tengan un impacto positivo en la sociedad.

 * 
 */

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
