import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./ChartComponent.css";
import Dropdown from "react-bootstrap/Dropdown";
import Coursera from '../images/2048px-Coursera-Logo_600x600 1.png'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Quixert from '../images/Quizlet-Logo-2021-present 1.png'
import Udemy from '../images/Udemy_logo 1.png'

class ChartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedWeek: "This Week",
      options: {
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
            borderRadius: 10, // Set the top border radius to 20px
          },
        },
        fill: {
          type: "gradient", // Set the type to gradient
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: ["#FFF"], // Color stop at the end of the gradient
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100], // Set the stops to define the color positions in the gradient
          },
        },
      },
      series: {
        "This Week": [
          {
            name: "Screen Time",
            data: [56, 95, 45, 53, 44, 65, 40],
          },
          {
            name: "App Usage",
            data: [82, 42, 80, 50, 89, 43, 70],
            fillColor: [
              "linear-gradient(180deg, #00AFEF -16.84%, #FFF 151.05%);",
            ],
          },
        ],
        "Previous Week": [
          {
            name: "Screen Time",
            data: [20, 30, 35, 40, 38, 48, 65],
          },
          {
            name: "App Usage",
            data: [15, 25, 33, 45, 29, 40, 65],
          },
        ],
      },
    };
  }

  handleWeekChange = (week) => {
    this.setState({ selectedWeek: week });
  };

  render() {
    const { selectedWeek, options, series } = this.state;

    return (
      <div className="appp">
        <div className="roww">
          <div className="chart-container">
            <div className="dropdowns">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {selectedWeek}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => this.handleWeekChange("This Week")}
                  >
                    This Week
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.handleWeekChange("Previous Week")}
                  >
                    Previous Week
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {(selectedWeek === "This Week" ||
              selectedWeek === "Previous Week") && (
              <Chart
                options={options}
                series={series[selectedWeek]}
                type="bar"
                width="600"
                height="600"
                className="custom-chart-class"
              />
            )}
          </div>
          
        </div>
        {/* <hr/> */}
        <div className="Recommend_App">
       
                <h2>Recommend App</h2>
                <br />
                <div className="Recommend-APP">
                <span><p>Coursera</p><img src={Coursera}/><StarOutlinedIcon/></span>
                <span><p>Coursera</p><img src={Coursera}/><StarOutlinedIcon/></span>
                <span className="RecommendQuizImg"><img src={Quixert }/><StarOutlinedIcon/></span>
                <span className="RecommendQuizImg2"><img src={Udemy}/><StarOutlinedIcon/></span>
                <span><p>Coursera</p><img src={Coursera}/><StarOutlinedIcon/></span>
                </div>

                
        </div>
      </div>
    );
  }
}

export default ChartComponent;
