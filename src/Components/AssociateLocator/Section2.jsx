import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Section2 = () => {
  const [regions, setRegions] = useState([]);
  const navigate = useNavigate();

  const fetchingData = async () => {
    try {
      const response = await axios.get("/data/country.json");
      setRegions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <section className="section2 container mt-5">
      <div className="row justify-content-center">
        {regions.map((region, index) => (
          <div
            className="col-6 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center mb-4"
            key={index}
          >
            <div
              className="region-card text-center p-3 w-100"
              style={{ cursor: "pointer" }}
              onClick={() => handleCardClick(region.routes)}
            >
              <img
                src={region.src}
                alt={region.name}
                className="region-image img-fluid mb-2"
              />
              <p className="region-title">{region.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
