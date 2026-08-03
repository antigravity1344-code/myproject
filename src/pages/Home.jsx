import Hero from '../components/Hero.jsx';
import DailyNotes from '../components/DailyNotes.jsx';
import FeaturedPoem from '../components/FeaturedPoem.jsx';
import Stories from '../components/Stories.jsx';

function Home() {
  return (
    <div>
      <Hero />
      <main className="main-content-grid">
        <DailyNotes />
        <FeaturedPoem />
        <Stories />
      </main>
    </div>
  );
}

export default Home;