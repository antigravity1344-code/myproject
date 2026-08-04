import Hero from '../components/Hero.jsx';
import DailyNotes from '../components/DailyNotes.jsx';
import FeaturedPoem from '../components/FeaturedPoem.jsx';
import Stories from '../components/Stories.jsx';

function Home() {
  return (
<<<<<<< HEAD
    <>
      <Hero />
      <main className="main-content-grid">
        <section id="notes">
          <DailyNotes />
        </section>
        <section id="poetry">
          <FeaturedPoem />
        </section>
        <section id="stories">
          <Stories />
        </section>
      </main>
    </>
=======
    <div>
      <Hero />
      <main className="main-content-grid">
        <DailyNotes />
        <FeaturedPoem />
        <Stories />
      </main>
    </div>
>>>>>>> 3787a447ef849daa245dc1bef2fa11cd5498a64a
  );
}

export default Home;