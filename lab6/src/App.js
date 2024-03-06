import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import IndexPage from './indexpage.js';
import MangoChicken from './mango-chicken.js';
import './style.css'
import './normalize.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<IndexPage />}/>
          <Route path="/mango-chicken" element={<MangoChicken />}/>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}




export default App;
