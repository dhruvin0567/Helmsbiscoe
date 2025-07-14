import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Filter = () => {
  const [canadaOpen, setCanadaOpen] = useState(false);
  const [usaOpen, setUsaOpen] = useState(false);
  const [australiaOpen, setAustraliaOpen] = useState(false);

  const toggleCanada = () => setCanadaOpen(!canadaOpen);
  const toggleUSA = () => setUsaOpen(!usaOpen);
  const toggleAustralia = () => setAustraliaOpen(!australiaOpen);

  const canadaStates = [
    "Alberta",
    "British Columbia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
  ];

  const usaStates = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const australiaStates = [
    "New South Wales",
    "Queensland",
    "South Australia",
    "Victoria",
  ];

  return (
    <section className="filter-section py-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="accordion" id="filterAccordion">
              <p className="filter-title mb-3">FILTER BY</p>

              {/* Africa and Middle East */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading1">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse1"
                    aria-expanded="false"
                    aria-controls="collapse1"
                  >
                    Africa and Middle East
                  </button>
                </h2>
                <div
                  id="collapse1"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading1"
                  data-bs-parent="#filterAccordion"
                >
                  <div className="accordion-body">
                    {[
                      "Kenya",
                      "Morocco",
                      "South Africa",
                      "Zambia",
                      "Qatar",
                      "United Arab Emirates",
                      "Israel",
                      "Egypt",
                    ].map((country, idx) => (
                      <div key={idx} className="menu-item">
                        <a href="#" className="location-filter d-block">
                          {country}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Americas Accordion */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse2"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    Americas
                  </button>
                </h2>
                <div
                  id="collapse2"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading2"
                  data-bs-parent="#filterAccordion"
                >
                  <div className="accordion-body">
                    {[
                      "Puerto Rico",
                      "Western Samoa",
                      "Trinidad and Tobago",
                      "Barbados",
                      "Saint Lucia",
                      "Dominican Republic",
                      "Bahamas",
                      "Antigua",
                      "Barbuda",
                      "Dominica",
                      "Grenada",
                      "Haiti",
                      "Saint Kitts",
                      "Nevis",
                      "Saint Vincent and the Grenadines",
                    ].map((country, idx) => (
                      <div key={idx} className="menu-item">
                        <a href="#" className="location-filter d-block">
                          {country}
                        </a>
                      </div>
                    ))}

                    {/* Toggle Canada */}
                    <div className="menu-item mt-2">
                      <span
                        onClick={toggleCanada}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span className="me-2">{canadaOpen ? "−" : "+"}</span>
                        <span>Canada</span>
                      </span>
                      {canadaOpen && (
                        <div className="ms-4 mt-2">
                          {canadaStates.map((state, i) => (
                            <div key={i} className="menu-item">
                              <a href="#" className="location-filter d-block">
                                {state}
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Mexico */}
                    <div className="menu-item">
                      <a href="#" className="location-filter d-block">
                        Mexico
                      </a>
                    </div>

                    {/* Toggle USA */}
                    <div className="menu-item mt-2">
                      <span
                        onClick={toggleUSA}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span className="me-2">{usaOpen ? "−" : "+"}</span>
                        <span>USA</span>
                      </span>
                      {usaOpen && (
                        <div className="ms-4 mt-2">
                          {usaStates.map((state, i) => (
                            <div key={i} className="menu-item">
                              <a href="#" className="location-filter d-block">
                                {state}
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {[
                      "Greenland",
                      "Brazil",
                      "Venezuela",
                      "Peru",
                      "Ecuador",
                      "Chile",
                      "Uruguay",
                      "Colombia",
                      "Argentina",
                      "Bolivia",
                      "Guyana",
                      "Paraguay",
                      "Suriname",
                    ].map((country, idx) => (
                      <div key={idx} className="menu-item">
                        <a href="#" className="location-filter d-block">
                          {country}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Asia Pacific */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    Asia Pacific
                  </button>
                </h2>
                <div
                  id="collapse3"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading3"
                  data-bs-parent="#filterAccordion"
                >
                  <div className="accordion-body">
                    {[
                      "China",
                      "Hong Kong",
                      "India",
                      "Indonesia",
                      "Japan",
                      "Malaysia",
                      "Philippines",
                      "Singapore",
                      "South Korea",
                      "Thailand",
                      "Vietnam",
                      "Taiwan",
                      "Cambodia",
                      "Bangladesh",
                      "Bhutan",
                      "Brunei Darussalam",
                      "East Timor",
                      "Laos",
                      "North Korea",
                      "Nepal",
                      "Myanmar",
                      "Mongolia",
                      "Maldives",
                      "Sri Lanka",
                    ].map((country, idx) => (
                      <div key={idx} className="menu-item">
                        <a href="#" className="location-filter d-block">
                          {country}
                        </a>
                      </div>
                    ))}

                    {/* Australia */}
                    <div className="menu-item mt-2">
                      <span
                        onClick={toggleAustralia}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <span className="me-2">
                          {australiaOpen ? "−" : "+"}
                        </span>
                        <span>Australia</span>
                      </span>
                      {australiaOpen && (
                        <div className="ms-4 mt-2">
                          {australiaStates.map((state, i) => (
                            <div key={i} className="menu-item">
                              <a href="#" className="location-filter d-block">
                                {state}
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {[
                      "New Zealand",
                      "Fiji",
                      "Kiribati",
                      "Papua New Guinea",
                      "Republic of Palau",
                      "Nauru",
                      "Micronesia",
                      "Solomon Islands",
                      "Tonga",
                      "Tuvalu",
                      "Vanuatu",
                    ].map((country, idx) => (
                      <div key={`extra-${idx}`} className="menu-item">
                        <a href="#" className="location-filter d-block">
                          {country}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Europe */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse4"
                    aria-expanded="false"
                    aria-controls="collapse4"
                  >
                    Europe
                  </button>
                </h2>
                <div
                  id="collapse4"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading4"
                  data-bs-parent="#filterAccordion"
                >
                  <div className="accordion-body">
                    {[
                      "Albania",
                      "Austria",
                      "Azerbaijan",
                      "Belgium",
                      "Bulgaria",
                      "Croatia",
                      "Czech Republic",
                      "Denmark",
                      "England",
                      "Finland",
                      "France",
                      "Germany",
                      "Greece",
                      "Hungary",
                      "Iceland",
                      "Ireland",
                      "Italy",
                      "Lithuania",
                      "Luxembourg",
                      "Malta",
                      "Monaco",
                      "Netherlands",
                      "Northern Ireland",
                      "Poland",
                      "Portugal",
                      "Romania",
                      "Scotland",
                      "Serbia",
                      "Slovenia",
                      "Spain",
                      "Sweden",
                      "Switzerland",
                      "Turkey",
                      "Liechtenstein",
                      "Norway",
                      "North Macedonia",
                    ].map((country, idx) => (
                      <div key={idx} className="menu-item">
                        <a href="#" className="location-filter d-block">
                          {country}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-9">{/* Other content */}</div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
