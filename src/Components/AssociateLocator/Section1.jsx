import React from "react";

const Section1 = () => {
  return (
    <section>
      <div>
        <div className="section1-container d-flex flex-column align-items-center text-white text-center py-5">
          <h1 className="display-4 fw-bold">Associate Locator</h1>
          <p className="section1-description col-md-8 col-lg-6">
            Our growing network of Associates brings together some of the best
            and brightest hotel and meeting planning executives in the
            hospitality industry. Utilizing the keyword search and map buttons,
            you can easily find a HelmsBriscoe Associate to assist you. While
            any Associate can provide assistance for any geographic area, these
            tools are provided if you want to locate someone specifically by
            first name, last name, or location.
          </p>
          <div className="input-group search-box my-3 col-10 col-md-8 col-lg-6">
            <input
              type="text"
              className="form-control rounded-pill px-4"
              placeholder="Search by first name, last name, or location"
            />
            {/* <span className="input-group-text bg-transparent border-0 position-absolute end-0 me-3">
          🔍
        </span> */}
          </div>
          <a href="#" className="text-white text-decoration-underline">
            or see all people
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section1;
