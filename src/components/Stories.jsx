// // import { Link } from 'react-router-dom';

// // import { getContent } from '../utils/content';

// // function Stories() {
// //   const storiesData = getContent('stories');

// //   return (
// //     <section className={styles.stories}>
// //       <h2>داستان‌ها</h2>

// //       {storiesData.map((story) => (
// //         <Link
// //           key={story.id}
// //           to={`/story/${story.id}`}
// //           className={styles.storyTitle}
// //         >
// //           <h3>{story.title}</h3>
// //           <p>{story.desc}</p>
// //           <small>{story.date}</small>
// //         </Link>
// //       ))}
// //     </section>
// //   );
// // }

// // export default Stories;


// import { Link } from 'react-router-dom';
// import { getContent } from '../utils/content';

// function Stories() {
//   const storiesData = getContent('stories');

//   return (
//     <section>
//       <h2>داستان‌ها</h2>

//       {storiesData.map((story) => (
//         <Link key={story.id} to={`/story/${story.id}`}>
//           <h3>{story.title}</h3>
//           <p>{story.desc}</p>
//           <small>{story.date}</small>
//         </Link>
//       ))}
//     </section>
//   );
// }

// export default Stories;




import { Link } from 'react-router-dom';
import styles from './Stories.module.css';
import { getContent } from '../utils/content';

function Stories() {
  const storiesData = getContent('stories');

  return (
    <div className={styles.storiesColumn}>
      <h2 className={styles.columnTitle}>داستان‌ها</h2>

      <div className={styles.storiesList}>
        {storiesData.map((story) => (
          <div className={styles.storyCard} key={story.id}>
            <div className={styles.storyDetails}>
              <Link
                to={`/story/${story.id}`}
                className={styles.storyTitle}
              >
                {story.title}
              </Link>

              <p className={styles.storyDesc}>{story.desc}</p>

              <span className={styles.storyDate}>{story.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;