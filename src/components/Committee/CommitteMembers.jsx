import React from 'react';
import '../../css/CommitteMembers.css'; // Import the CSS module

const CommitteMembers = () => {
  return (
    <div className="committe">
      {/* First Row */}
      <div className="box">
        <div className="imgBx">
          <img
            src="https://images.unsplash.com/photo-1579748138140-ce9ef2c32db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="Image 1"
          />
        </div>
        <div className="content">
          <div>
            <h2>Image Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
            </p>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img
            src="https://images.unsplash.com/photo-1579639782539-15cc6c0be63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="Image 2"
          />
        </div>
        <div className="content">
          <div>
            <h2>Image Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
            </p>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img
            src="https://images.unsplash.com/photo-1603984362497-0a878f607b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
            alt="Image 3"
          />
        </div>
        <div className="content">
          <div>
            <h2>Image Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="box">
        <div className="imgBx">
          <img
            src="https://images.unsplash.com/photo-1579310962131-aa21f240d986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
            alt="Image 4"
          />
        </div>
        <div className="content">
          <div>
            <h2>Image Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
            </p>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img
            src="https://images.unsplash.com/photo-1579748138140-ce9ef2c32db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="Image 5"
          />
        </div>
        <div className="content">
          <div>
            <h2>Image Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
            </p>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="imgBx">
          <img
            src="https://images.unsplash.com/photo-1579639782539-15cc6c0be63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="Image 6"
          />
        </div>
        <div className="content">
          <div>
            <h2>Image Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteMembers;