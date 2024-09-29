import React from 'react';

const Academics = () => {
  return (
    <section id="academics" className="academics-section">
        <div className='gallary-head'>
            <h2>Class Timetable</h2>
        </div>
      
      <table>
        <thead>
          <tr><th>Time</th><th>Subject</th><th>Teacher</th></tr>
        </thead>
        <tbody>
          <tr><td>8:00 - 8:50</td><td>Assembly</td><td>Mr. X</td></tr>
          <tr><td>9:00 - 10:00</td><td>Math</td><td>Mr. X</td></tr>
          <tr><td>10:00 - 11:00</td><td>English</td><td>Ms. Y</td></tr>
          <tr><td>12:00 - 13:00</td><td>Science</td><td>Mr. X</td></tr>
          <tr><td>13:00 - 14:00</td><td>Hindi</td><td>Ms. Y</td></tr>
          <tr><td>14:00 - 15:00</td><td>Math</td><td>Mr. X</td></tr>
          
        </tbody>
      </table>
      <div className='gallary-head'>
        <h2>Study Materials</h2>
      </div>
     
      <div className='study-sec'>
        <ul>
            <li><a href="/src/images/d1.pdf" download>
                <img src='/src/images/folder.png' className='study-img'/>
                <p>Maths</p>
                </a></li>
            <li><a href="/src/images/d2.pdf" download>
                <img src='/src/images/folder.png' className='study-img'/>
                <p>English</p>
                </a></li>
            <li><a href="/src/images/d3.pdf" download>
                <img src='/src/images/folder.png' className='study-img'/>
                <p>Science</p>
                </a></li>
            <li><a href="/src/images/d4.pdf" download>
                <img src='/src/images/folder.png' className='study-img'/>
                <p>Hindi</p>
                </a></li>
        </ul>
      </div>
      
    </section>
  );
};

export default Academics;
