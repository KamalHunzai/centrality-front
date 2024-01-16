import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import "./Order.css";
import { baseURL } from '../../constants';

const Ordercom = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAttendances() {
      const getAllStudentAttendancesUrl = `${baseURL}/attendances/getAllStudentAttendances`
    await axios.get(getAllStudentAttendancesUrl)
      .then((response) => {
        console.log("API Response:", response.data.attendanceList);
        if (Array.isArray(response.data.attendanceList)) {
          setData(response.data.attendanceList);
        } else {
          console.error("Data is not an array:", response.data.attendanceList);
          setData([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setData([]);
        setLoading(false);
      });
    }
    getAttendances();
  }, []);

  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const number = [...Array(npage).keys()].slice(1);

  function prePage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className="main-order">
      <div className="firstdiv">
        <table id="table1">
          <thead>
            <tr className="tablerow">
              <th className="order">S.No</th>
              <th className="product">Teacher</th>
              <th>Class Time</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="5">Loading class details...</td></tr>
            ) : (
              data.map((record,index) => (
                <tr key={index /* Replace with the actual unique identifier */}>
                  <td className="order">{record.id}</td>
                  <td className="product">
                    <div className="img">
                      <img src={`${baseURL}/images/` + record.teacherProfilePicture} alt="profileImage" />
                      <div className="proinfo">
                        <h3>{record.teacherName || "Unknown"}</h3>
                      </div>
                    </div>
                  </td>
                  <td>{record.classTime}</td>
                  <td>{record.date}</td>
                  {record.status && (
                    <td className="processing">{record.status}</td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link arrorw" onClick={prePage}>
                <AiFillCaretLeft />
              </a>
            </li>
            {number.map((n, i) => (
              <li className={`page-item ${currentPage === n ? "active" : ""}`} key={i}>
                {n === currentPage ? (
                  <span className="page-link arrorw focus">{n}</span>
                ) : (
                  <a href="#" className="page-link arrorw focus" onClick={() => changeCPage(n)}>
                    {n}
                  </a>
                )}
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link arrorw" onClick={nextPage}>
                <AiFillCaretRight />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Ordercom;






















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
// import "./Order.css";
// import Image from "../images/Girl Study With Laptop6.png";

// const Ordercom = () => {
//   const [attendances, setAttendances] = useState([]);

//   useEffect(() => {
//     const fetchAttendances = async () => {
//       try {
//         const response = await axios.get(
//           "https://f112-118-107-134-85.ngrok-free.app/attendances/getAllStudentAttendances"
//         );
//         console.log(response.data); // Add this line to log the response
//         setAttendances(response.data);
//       } catch (error) {
//         console.error("Error fetching attendances:", error);
//       }
//     };

//     fetchAttendances();
//   }, []); // Empty dependency array ensures useEffect runs only once on component mount

//   return (
//     <div className="main-order">
//       <table id="table1">
//         <thead>
//           <tr className="tablerow">
//             <th className="order">S.No</th>
//             <th className="product">Teacher</th>
//             <th>Class Time</th>
//             <th>Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendances.map((attendance, index) => (
//             <tr key={index}>
//               <td className="order">{index + 1}</td>
//               <td className="product">
//                 <div className="img">
//                   <img src={Image} alt="profileImage" />
//                   <div className="proinfo">
//                     <h3>{attendance.teacherName}</h3>
//                   </div>
//                 </div>
//               </td>
//               <td>{attendance.classTime}</td>
//               <td>{attendance.date}</td>
//               <td className="processing">{attendance.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Ordercom;

