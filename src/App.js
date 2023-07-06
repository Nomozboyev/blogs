import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Blog, Register, Login } from './pages';
import { Header, Footer } from './components';
import { AuthUserContext } from './utils/auth';

function App() {
  return (
    <AuthUserContext>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </AuthUserContext>
  );
}

export default App;
