import React from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function Courses() {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{
        x: window.innerWidth,
        transition: {
          duration: 0.1,
          delay: 0,
        },
        opacity: 0,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Courses - Learnstack</title>
        <link rel="canonical" href="http://learnstack.com/courses" />
      </Helmet>
      <>
        <div
          style={{ backgroundColor: "wheat", height: "150vh" }}
          className="courses"
        >
          <div
            style={{
              backgroundColor: "pink",
              width: "80%",
              height: "80%",
              marginLeft: "40px",
            }}
            className="hero-courses"
          >
            {/* <div
              style={{ width: "20%", height: "50", backgroundColor: "blue" }}
              className="heading-line"
            ></div> */}
            {/* <div className="sub-heading">
              <div className="left">
                <h1>Popular Courses</h1>
              </div>
              <div className="right">
                <h1>EXPLORE COURSES</h1>
                <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div> */}
            {/* <div className="first-section">
            <div className="first-a">
              <div className="top1">
                <div className="amount">
                  <h1>₦50,000</h1>
                </div>
              </div>

              <div className="bottom1">
                <div className="writeupone">
                  <div>
                    <h1>Front-End development</h1>
                  </div>
                  <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star differ"></i>
                  </div>
                </div>
                <h1 className="note">
                  Choosing Learn stack for your tech education means embarking
                  on a transformation learning journey tailored to modern
                </h1>
                <div className="last">
                  <div className="duration">
                    <i class="fa-regular fa-clock font-a"></i>
                    <div className="weeks">2 Weeks</div>
                  </div>
                  <div className="lesson">
                    <i class="fa-regular fa-rectangle-list font-b"></i>
                    <h1 className="fifteen">15 Lesson</h1>
                  </div>

                  <button className="btn">Enroll Now</button>
                </div>
              </div>
            </div>
            <div className="first-b">
              <div className="top2">
                <div className="amount">
                  <h1>₦50,000</h1>
                </div>
              </div>
              <div className="bottom2">
                <div className="writeupone">
                  <div>
                    <h1>Front-End development</h1>
                  </div>
                  <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star differ"></i>
                  </div>
                </div>
                <h1 className="note">
                  Choosing Learn stack for your tech education means embarking
                  on a transformation learning journey tailored to modern
                </h1>
                <div className="last">
                  <div className="duration">
                    <i class="fa-regular fa-clock font-a"></i>
                    <div className="weeks">2 Weeks</div>
                  </div>
                  <div className="lesson">
                    <i class="fa-regular fa-rectangle-list font-b"></i>
                    <h1 className="fifteen">15 Lesson</h1>
                  </div>

                  <button className="btn">Enroll Now</button>
                </div>
              </div>
            </div>
            <div className="first-c">
              <div className="top3">
                <div className="amount">
                  <h1>₦50,000</h1>
                </div>
              </div>
              <div className="bottom3">
                <div className="writeupone">
                  <div>
                    <h1>Front-End development</h1>
                  </div>
                  <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star differ"></i>
                  </div>
                </div>
                <h1 className="note">
                  Choosing Learn stack for your tech education means embarking
                  on a transformation learning journey tailored to modern
                </h1>
                <div className="last">
                  <div className="duration">
                    <i class="fa-regular fa-clock font-a"></i>
                    <div className="weeks">2 Weeks</div>
                  </div>
                  <div className="lesson">
                    <i class="fa-regular fa-rectangle-list font-b"></i>
                    <h1 className="fifteen">15 Lesson</h1>
                  </div>

                  <button className="btn">Enroll Now</button>
                </div>
              </div>
            </div>
              </div> */}
            {/* <div className="second-section">
            <div className="second-a">
              <div className="top1">
                <div className="amount">
                  <h1>₦50,000</h1>
                </div>
              </div>

              <div className="bottom1">
                <div className="writeupone">
                  <div>
                    <h1>Front-End development</h1>
                  </div>
                  <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star differ"></i>
                  </div>
                </div>
                <h1 className="note">
                  Choosing Learn stack for your tech education means embarking
                  on a transformation learning journey tailored to modern
                </h1>
                <div className="last">
                  <div className="duration">
                    <i class="fa-regular fa-clock font-a"></i>
                    <div className="weeks">2 Weeks</div>
                  </div>
                  <div className="lesson">
                    <i class="fa-regular fa-rectangle-list font-b"></i>
                    <h1 className="fifteen">15 Lesson</h1>
                  </div>

                  <button className="btn">Enroll Now</button>
                </div>
              </div>
            </div>

            <div className="second-b">
              <div className="top1">
                <div className="amount">
                  <h1>₦50,000</h1>
                </div>
              </div>

              <div className="bottom1">
                <div className="writeupone">
                  <div>
                    <h1>Front-End development</h1>
                  </div>
                  <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star differ"></i>
                  </div>
                </div>
                <h1 className="note">
                  Choosing Learn stack for your tech education means embarking
                  on a transformation learning journey tailored to modern
                </h1>
                <div className="last">
                  <div className="duration">
                    <i class="fa-regular fa-clock font-a"></i>
                    <div className="weeks">2 Weeks</div>
                  </div>
                  <div className="lesson">
                    <i class="fa-regular fa-rectangle-list font-b"></i>
                    <h1 className="fifteen">15 Lesson</h1>
                  </div>

                  <button className="btn">Enroll Now</button>
                </div>
              </div>
            </div>
            <div className="second-c">
              <div className="top1">
                <div className="amount">
                  <h1>₦50,000</h1>
                </div>
              </div>

              <div className="bottom1">
                <div className="writeupone">
                  <div>
                    <h1>Front-End development</h1>
                  </div>
                  <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star differ"></i>
                  </div>
                </div>
                <h1 className="note">
                  Choosing Learn stack for your tech education means embarking
                  on a transformation learning journey tailored to modern
                </h1>
                <div className="last">
                  <div className="duration">
                    <i class="fa-regular fa-clock font-a"></i>
                    <div className="weeks">2 Weeks</div>
                  </div>
                  <div className="lesson">
                    <i class="fa-regular fa-rectangle-list font-b"></i>
                    <h1 className="fifteen">15 Lesson</h1>
                  </div>

                  <button className="btn">Enroll Now</button>
                </div>
              </div>
            </div>
            </div> */}
          </div>
        </div>
      </>
      <Outlet />
    </motion.div>
  );
}

export default Courses;
