import React from 'react';
const Home = () => {
  return (
    <div id="home" className="home-section" >
      <h1>Future Leaders School</h1>
      <div className='para'>
        <p>We strive for excellence in education and character building.</p>
      </div>

      <div className="announcements-section">
        <h2>Announcements</h2>
        <div className="announcement-cards">
          <div className="card">
            <h3>School Reopening</h3>
            <p>23rd Oct, 2024</p>
            <p>School will resume from 23rd October. Ensure to follow safety protocols.</p>
          </div>
          <div className="card">
            <h3>New Library Books</h3>
            <p>16th Oct, 2024</p>
            <p>We have added new titles in the school library. Check them out today!</p>
          </div>
          <div className="card">
            <h3>Sports Day</h3>
            <p>1st Nov, 2024</p>
            <p>Annual Sports Day will be held on 1st November. Get ready to participate!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
