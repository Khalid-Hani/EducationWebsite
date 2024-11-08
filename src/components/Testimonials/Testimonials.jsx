import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const SlideForeward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const SlideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" onClick={SlideForeward} />
      <img src={back_icon} className="back-btn" onClick={SlideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slid">
              <div className="user-info">
                <img src={user_1} />
                <div>
                  <h3>1 Willium jackson</h3>
                  <span>California , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slid">
              <div className="user-info">
                <img src={user_2} />
                <div>
                  <h3>2 Willium jackson</h3>
                  <span>California , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slid">
              <div className="user-info">
                <img src={user_3} />
                <div>
                  <h3>3 Willium jackson</h3>
                  <span>California , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slid">
              <div className="user-info">
                <img src={user_4} />
                <div>
                  <h3>4 Willium jackson</h3>
                  <span>California , USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
