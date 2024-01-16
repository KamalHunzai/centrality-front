import React, { useState } from 'react';
import './Bydate.css';
import Boxes from './Boxes';
import FilterModal from './FilterModal/FilterModal';
import Datepicker from './Date/Date';
import { MdOutlineTune } from "react-icons/md";
function ByDate() {
  const [showByDate, setShowByDate] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleShowButtonClick = () => {
    setShowByDate(!showByDate); // Toggle the showByDate state
  };

  const handleCheckboxChange = () => {
    setShowCalendar(!showCalendar); // Toggle the showCalendar state
  };

  return (
    <>
      <button className="shoW" onClick={handleShowButtonClick}>
      <MdOutlineTune />Filters
      </button>
      {showByDate && (
        <div className="ByDate-main">
          <div className="container Bydate">
            <div className="row">
              <div className="col-md-12">
                <h1 className="ByDate-h1">By Date</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Boxes label="This Week" />
              </div>
              <div className="col-md-6">
                <Boxes label="Last Week" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Boxes label="This Month" />
              </div>
              <div className="col-md-6">
                <Boxes label="Last Month" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Boxes label="This Year" />
              </div>
              <div className="col-md-6">
                <Boxes label="Last Year" />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-12 mother">
                <div>
                  <input
                    type="checkbox"
                    id="showCalendar"
                    checked={showCalendar}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="showCalendar">Date Range</label>
                </div>
                <br />
                {showCalendar && (
                  <div>
                    <div className="From-To">
                      <div className="btns">
                        <button>From</button>
                        <button>To</button>
                      </div>
                      <Datepicker />
                    </div>
                  </div>
                )}
              </div>
              <FilterModal />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ByDate;