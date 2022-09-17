import React from "react";
import Countries from "./Countries";
import County from "./County";
import Cities from "./cities";

const AdCommonFilters = ({
  title,
  setTitle,
  country,
  setCountry,
  county,
  setCounty,
  city,
  setCity,
}) => {
  return (
    <>
      <li className="so-filter-options" data-option="search">
        <div className="so-filter-heading">
          <div className="so-filter-heading-text">
            <span>Title</span>
          </div>
          <i className="fa fa-chevron-down"></i>
        </div>

        <div className="so-filter-content-opts">
          <div className="so-filter-content-opts-container">
            <div className="so-filter-option" data-type="search">
              <div className="so-option-container">
                <div className="input-group w-100">
                  <input
                    type="text"
                    className="form-control"
                    name="text_search"
                    id="text_search"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="so-filter-options" data-option="search">
        <div className="so-filter-heading">
          <div className="so-filter-heading-text">
            <span>Country</span>
          </div>
          <i className="fa fa-chevron-down"></i>
        </div>

        <div className="so-filter-content-opts">
          <div className="so-filter-content-opts-container">
            <div className="so-filter-option" data-type="search">
              <div className="so-option-container">
                <div className="input-group w-100">
                  <Countries setCountry={setCountry} country={country} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="so-filter-options" data-option="search">
        <div className="so-filter-heading">
          <div className="so-filter-heading-text">
            <span>State / County</span>
          </div>
          <i className="fa fa-chevron-down"></i>
        </div>

        <div className="so-filter-content-opts">
          <div className="so-filter-content-opts-container">
            <div className="so-filter-option" data-type="search">
              <div className="so-option-container">
                <div className="input-group w-100">
                  <County
                    country={country}
                    setCounty={setCounty}
                    county={county}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="so-filter-options" data-option="search">
        <div className="so-filter-heading">
          <div className="so-filter-heading-text">
            <span>City</span>
          </div>
          <i className="fa fa-chevron-down"></i>
        </div>

        <div className="so-filter-content-opts">
          <div className="so-filter-content-opts-container">
            <div className="so-filter-option" data-type="search">
              <div className="so-option-container">
                <div className="input-group w-100">
                  <Cities
                    setCity={setCity}
                    county={county}
                    country={country}
                    city={city}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default React.memo(AdCommonFilters);
