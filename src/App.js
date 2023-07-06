import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Quiz from './pages/Quiz';
import Home from './pages/Home';
import Err404 from './pages/Err404';
import './styles/App.css';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/quiz" element={ <Quiz />}></Route>
      <Route path="/" element={ <Home />}></Route>
      <Route path="*" element={ <Err404 />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
