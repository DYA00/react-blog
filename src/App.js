import './App.css';
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import Navbar from './Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Routes>
            <Route path='/' element = {<HomePage />} />
            <Route path='/about' element = {<AboutPage />} />
            <Route path='/articles' element = {<ArticlesListPage />} />
            <Route path='/articles/:articleId' element = {<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
