import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import './BarChartComponent.css';
import Dropdown from "react-bootstrap/Dropdown";
import { IoAlertCircleOutline } from "react-icons/io5";
import axios from 'axios';
import { baseURL } from '../../constants';

const BarChartComponent = () => {
    const [filter,setFilter] = useState("month");
    const [resp,setResp] = useState();
    useEffect(() =>{
         function getFilteredAttendances() {
            const filteredAttendanceUrl = `${baseURL}/attendances/filteredAttendance`;

        axios.get(`${filteredAttendanceUrl}/${filter}`).then((response) =>{
           console.log("this response",response)
            setResp(Object.values(response.data))
        }).catch((err) =>{
            console.log(err);
        })    
        }
        getFilteredAttendances();
    },[filter]);
    const monthOptions = {
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
            }
        },
        fill: {
            type: "gradient",
            backgroundColor: "rgba(0, 175, 239, 0.2)",
            gradient: {
                shade: "light",
                type: "vertical",
                shadeIntensity: 0.5,
                inverseColor: false,
                opacityFrom: 1,
                opacityTo: 1
            },
        },
    };
    const yearOptions = {
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: [
                "2020",
                "2021",
                "2022",
                "2023",
            ],
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
            }
        },
        fill: {
            type: "gradient",
            backgroundColor: "rgba(0, 175, 239, 0.2)",
            gradient: {
                shade: "light",
                type: "vertical",
                shadeIntensity: 0.5,
                inverseColor: false,
                opacityFrom: 1,
                opacityTo: 1
            },
        },
    };
    const series = {
        Month: [
            {
                name: "↝  ",
                data: resp 
            },
        ],
        Year: [
            {
                name: "↝  ",
                data:resp
            },
        ],
    };


    return (
        <div className='Chart'>
            <div className='row'>
                <div className='chart-container' style={{ height: '487px' }}>
                    <div className='dropdowns'>
                        <h3>My Attendance Overview <IoAlertCircleOutline /></h3>
                        <Dropdown>
                            <Dropdown.Toggle variant='success' id='dropdown-basic'>
                                {filter}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() =>{
                                    setFilter("month")
                                }}>
                                    Month
                                </Dropdown.Item>
                                <Dropdown.Item onClick={() => {
                                    setFilter("year")
                                }}>
                                    Year
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    {(
                        filter === "month" ||
                        filter === "year"
                    ) && (

                        resp && filter &&
                        <Chart 
                            options={filter === "month" ? monthOptions : yearOptions }
                            series={ filter === "month" ? series.Month : series.Year }
                            type='bar'
                            height="400"
                            className="custom-chart-class"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default BarChartComponent;
