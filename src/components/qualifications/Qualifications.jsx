import React, { useState } from "react";
import "./qualifications.css";
const Qualifications = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-book-reader qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSC (GPA : 9.0)</h3>
                <span className="qualification__subtitle">
                  Shri Guru Tegh Bahadur Academy
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07/2018 - 04/2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> HSC (GPA : 9.5)</h3>
                <span className="qualification__subtitle">
                  Shri Guru Tegh Bahadur Academy
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 07/2019 - 04/2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.Tech</h3>
                <span className="qualification__subtitle">
                  Parul University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Postman API Fundamentals Student Expert
                </h3>
                <span className="qualification__subtitle">
                  Completed the certification
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 01/2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  First Open Source Conribution
                </h3>
                <span className="qualification__subtitle">
                  FreeCodeCamp Documentation
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 10/2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Hero Campus Challenge S8 & Flipkart GRID 2.0
                </h3>
                <span className="qualification__subtitle">
                  Certificate of Participation
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 01/2023
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Hackvengers 2023
                </h3>
                <span className="qualification__subtitle">
                  2nd Runner ups in this national level hackathon
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 03/2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
