import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Summary.css';
import { baseURL } from '../../../constants';

const Summary = () => {
  const [classroom, setClassroom] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllClassroomsUrl = `${baseURL}/classrooms/getAllClassrooms`
    axios.get(getAllClassroomsUrl)
      .then((response) => {
        console.warn(response)
        setClassroom(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="Summary">
      {loading ? (
        <p>Loading class details...</p>
      ) : (
          <React.Fragment>
            <div className="Chemistry">
              <div className="btnInfo">
                <h4>Summary</h4>
                <p>
                  Subject: <span>{classroom.classroomName}</span>
                </p>
              </div>
              <button className="liveBtn">Join live Class</button>
            </div>
            <div className="ClassTiming">
              <h6>Class timing</h6>
              <div className="Teacher">
                <table>
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Start Time</th>
                      <th>End Time</th>
                      <th>Total Time</th>
                      <th>Venue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{classroom.day}</td>
                      <td>{classroom.startTime}</td>
                      <td>{classroom.endTime}</td>
                      <td>{classroom.totalTime}</td>
                      <td>{classroom.venue}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="AboutTeacher">
                <h5>About Teacher</h5>
                <p>
                  Teacher Name: <span>sayan</span>
                </p>
              </div>
            </div>
          </React.Fragment>
        
      )}
    </div>
  );
};

export default Summary;
