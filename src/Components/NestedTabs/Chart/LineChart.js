import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { LuAlertCircle } from "react-icons/lu";
import axios from "axios";
import { baseURL } from '../../../constants';

function LineChart() {
    const [selectedOption, setSelectedOption] = useState('week');
    const [performance, setPerformance] = useState({ labels: [], values: [] });
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const getPerformanceData = async () => {
        try {
            const studentPerfomanceUrl = `${baseURL}/students/performance/1/${selectedOption}`
            const response = await axios.get(studentPerfomanceUrl);
            setPerformance(response.data);
        } catch (error) {
            console.error('Error fetching performance data:', error);
        }
    };

    const renderChart = () => {
        if (chartInstance.current !== null) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: performance.labels,
                datasets: [
                    {
                        label: 'Sample Data',
                        data: performance.values,
                        borderColor: 'blue',
                        borderWidth: 1,
                        fill: false,
                        cubicInterpolationMode: 'monotone',
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    roundedCorners: {
                        radius: 20,
                    },
                },
                scales: {
                    y: {
                        ticks: {
                            stepSize: 0.5,
                            suggestedMin: 0,
                            suggestedMax: 3.5,
                        },
                    },
                },
            },
        });
    };

    useEffect(() => {
        getPerformanceData(); // Fetch data on component mount

        return () => {
            if (chartInstance.current !== null) {
                chartInstance.current.destroy();
            }
        };
    }, []); // Empty dependency array to run the effect only once on mount

    useEffect(() => {
        renderChart();
    }, [performance, selectedOption]); // Re-render the chart when performance or selectedOption changes

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <div className='mainChart' style={{ height: '400px' }}>
            <div className='selecting'>
                <div className='h5'>My Performance <LuAlertCircle /></div>
                <select value={selectedOption} onChange={handleOptionChange}>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                </select>
            </div>
            <canvas ref={chartRef}></canvas>
        </div>
    );
}

export default LineChart;
