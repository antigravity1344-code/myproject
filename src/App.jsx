import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import StoryPage from './pages/StoryPage.jsx';
import StoriesPage from './pages/StoriesPage.jsx';
import NotesPage from './pages/NotesPage.jsx';
import NotePage from './pages/NotePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PoemPage from './pages/PoemPage.jsx';
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.hash ? location.hash.replace('#', '') : location.pathname === '/contact' ? 'contact' : '';

    if (!targetId) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return;
    }

    requestAnimationFrame(() => {
      const target = document.getElementById(targetId);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  }, [location.pathname, location.hash]);

  return (
    <div className="app-container">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/story/:id" element={<StoryPage />} />
        <Route path="/note/:id" element={<NotePage />} />
        <Route path="/poem" element={<PoemPage />} />
      </Routes>

      <footer id="contact" className="site-footer">
        <div className="footer-copyright">
          © ۲۰۲۶ علی رضایی. تمام حقوق محفوظ است.
        </div>
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://t.me" target="_blank" rel="noreferrer">Telegram</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </footer>
    </div>
  );
}

export default App;