// import React from "react";
// import "../css/EventCard.scss";

// const EventCard = ({ icon, image, description, link, title }) => {
//   return (
//     <div className="event-cont">
//     <div className="item ml-[10rem] mb-[10rem] mt-[15rem]">
//       <div className="item__image">
//         <div className="image-switch__outer">
//           <div className="image-switch__inner">
//             <img src={image} alt="Event" />
//           </div>
//         </div>
//       </div>
//       <div className="item__description">
//         <div className="description-switch__outer">
//           <div className="description-switch__inner">
//             <a href={link} target="_blank" rel="noopener noreferrer">
//               <p>{description}</p>
//               <div className="item__action-arrow">
//                 <i className="far fa-arrow-alt-circle-right"></i>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="flap level0">
//         <div className="flap level1 flip-right">
//           <div className="flap level2 flip-down">
//             <div className="flap level3 flip-left"></div>
//             <div className="flap level3 flip-right">
//               <div className="flap level4 flip-up"></div>
//               <div className="flap level5 flip-right">
//                 <div className="flap level6 flip-left"></div>
//               </div>
//             </div>
//           </div>
//           <div className="flap level2 flip-up">
//             <div className="flap level3 flip-left">
//               <div className="flap level4 flip-up"></div>
//               <div className="flap level5 flip-down">
//                 <div className="flap level6 flip-left">
//                   <div className="flap level7 flip-up">
//                     <div className="flap level8 flip-left"></div>
//                     <div className="flap level8 flip-right"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flap level1 flip-left">
//           <div className="flap level2 flip-up">
//             <div className="flap level3 flip-left">
//               <div className="flap level4 flip-down">
//                 <div className="flap level5 flip-left">
//                   <div className="flap level6 flip-right">
//                     <div className="flap level7 flip-up">
//                       <div className="flap level8--alt flip-right"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flap level2 flip-down">
//             <div className="flap level3 flip-right">
//               <div className="flap level4 flip-down">
//                 <div className="flap level5 flip-up"></div>
//               </div>
//               <div className="flap level5 flip-up">
//                 <div className="flap level6 flip-right"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="item__hover-icon">
//         <div className="icon-switch__outer">
//           <div className="icon-switch__inner">
//             <i className={icon}></i>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default EventCard;

import React, { useState } from "react";
import "../css/EventCard.scss";

const EventCard = ({ icon, image, description, link, title }) => {
  const [showDescription, setShowDescription] = useState(false);

  const handleArrowClick = () => {
    setShowDescription(true);
  };

  const handleBackClick = () => {
    setShowDescription(false);
  };

  return (
    <div className="event-cont">
      <div className="item ml-[10rem] mb-[10rem] mt-[15rem]">
        {/* Image Section */}
        {!showDescription && (
          <div className="item__image">
            <div className="image-switch__outer">
              <div className="image-switch__inner">
                <img src={image} alt="Event" />
              </div>
            </div>
          </div>
        )}

        {/* Description Section */}
        <div className="item__description">
          <div className="description-switch__outer">
            <div className="description-switch__inner">
              {showDescription ? (
                <div className="description-content">
                  <p>{description}</p>
                  <button onClick={handleBackClick} className="back-button">
                    Back
                  </button>
                </div>
              ) : (
                <div className="title-content">
                  <p>{title}</p>
                  <div
                    className="item__action-arrow"
                    onClick={handleArrowClick}
                  >
                    <i className="far fa-arrow-alt-circle-right"></i>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Flap Animation */}
        <div className="flap level0">
          <div className="flap level1 flip-right">
            <div className="flap level2 flip-down">
              <div className="flap level3 flip-left"></div>
              <div className="flap level3 flip-right">
                <div className="flap level4 flip-up"></div>
                <div className="flap level5 flip-right">
                  <div className="flap level6 flip-left"></div>
                </div>
              </div>
            </div>
            <div className="flap level2 flip-up">
              <div className="flap level3 flip-left">
                <div className="flap level4 flip-up"></div>
                <div className="flap level5 flip-down">
                  <div className="flap level6 flip-left">
                    <div className="flap level7 flip-up">
                      <div className="flap level8 flip-left"></div>
                      <div className="flap level8 flip-right"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flap level1 flip-left">
            <div className="flap level2 flip-up">
              <div className="flap level3 flip-left">
                <div className="flap level4 flip-down">
                  <div className="flap level5 flip-left">
                    <div className="flap level6 flip-right">
                      <div className="flap level7 flip-up">
                        <div className="flap level8--alt flip-right"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flap level2 flip-down">
              <div className="flap level3 flip-right">
                <div className="flap level4 flip-down">
                  <div className="flap level5 flip-up"></div>
                </div>
                <div className="flap level5 flip-up">
                  <div className="flap level6 flip-right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Icon Section */}
        <div className="item__hover-icon">
          <div className="icon-switch__outer">
            <div className="icon-switch__inner">
              <i className={icon}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;