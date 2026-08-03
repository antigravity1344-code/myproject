import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import StoryPage from './pages/StoryPage.jsx';
import NotePage from './pages/NotePage.jsx';
import PoemPage from './pages/PoemPage.jsx';
import AdminPage from './pages/AdminPage.jsx'; // ۱. وارد کردن کامپوننت پنل مدیریت
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:id" element={<StoryPage />} />
        <Route path="/note/:id" element={<NotePage />} />
        <Route path="/poem" element={<PoemPage />} />
        <Route path="/admin" element={<AdminPage />} /> {/* ۲. ثبت مسیر پنل مدیریت */}
      </Routes>

      <footer className="site-footer">
        <div className="footer-copyright">
          © ۲۰۲۶ محمد قنبری تمام حقوق محفوظ است.
        </div>
        <div className="footer-socials">
          <a href="#instagram">Instagram</a>
          <a href="#telegram">Telegram</a>
          <a href="#youtube">YouTube</a>
        </div>
      </footer>
    </div>
  );
}

export default App;