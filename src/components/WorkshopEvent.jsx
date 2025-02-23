import React from 'react';
import '../css/WorkshopEvent.css'; // Import the CSS file for this component

const WorkshopEvent = () => {
  return (
    <div className="workshop-event-container">
      <main>
        <div className="card">
          <div className="info">
            <h1 className="title">Title 1</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <h1 className="title">Title 2</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <h1 className="title">Title 3</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkshopEvent;