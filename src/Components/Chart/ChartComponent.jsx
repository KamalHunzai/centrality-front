import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import "./ChartComponent.css";
import { baseURL } from '../../constants';

const ChartComponent = () => {
  const [selectedWeek, setSelectedWeek] = useState("this week");
  const [data, setData] = useState([]);

  const seriesStructure = (week) => [
    {
      name: "Screen Time",
      data: week === selectedWeek && data.length ? data[0]?.data || [] : [],
    },
    {
      name: "App Usage",
      data: week === selectedWeek && data.length ? data[1]?.data || [] : [],
    },
  ];

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 4,
      labels: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#FFF"],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
  };

  useEffect(() => {
    const getAppUsageData = async () => {
      try {
        
        const appUsageAnalyticsUrl = `${baseURL}/timings/appUsageAnalytics/${selectedWeek}`;
        let response = await axios.get(`${appUsageAnalyticsUrl}`);
       
        setData(response.data);
      } catch (err) {
        console.error(err);
        alert("Error fetching data");
      }
    };
    getAppUsageData();
  }, [selectedWeek]);

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
  };

  return (
    <div className="app">
      <div className="row">
        <div className="chart-container">
          <div className="dropdowns">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedWeek}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleWeekChange('this week')}>
                  This Week
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleWeekChange('previouse week')}>
                  Previous Week
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {data.length > 0 && (
            <Chart
              options={options}
              series={seriesStructure(selectedWeek)}
              type="bar"
              width="100%"
              height="400"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
