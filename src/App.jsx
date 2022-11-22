import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const token = Cookies.get('token');
  return (
    <BrowserRouter>
      <Routes>{token ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Login />} />}</Routes>
    </BrowserRouter>
  );
}

export default App;
