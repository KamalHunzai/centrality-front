import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import './GPAcalculater.css';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Link } from 'react-router-dom';

const GPACalculator = () => {
  const initialSemester = [
    { name: '', grade: '', credits: '', scale: '', points: '' },
    { name: '', grade: '', credits: '', scale: '', points: '' },
    { name: '', grade: '', credits: '', scale: '', points: '' },
  ];

  const grades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F'];

  const [currentSemester, setCurrentSemester] = useState(initialSemester);
  const [semesters, setSemesters] = useState([]);
  const [gpa, setGPA] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const captureRef = useRef();

  const updateCourse = (index, field, value) => {
    const updatedSemester = [...currentSemester];
    updatedSemester[index][field] = value;
    if (field === 'scale') {
      const gradeValue = getGradeValue(updatedSemester[index].grade);
      const scaleValue = parseFloat(value) || 0;
      updatedSemester[index].points = (gradeValue * scaleValue).toFixed(2);
    }
    setCurrentSemester(updatedSemester);
  };

  const calculateGPA = () => {
    if (currentSemester.some(course => !course.name || !course.grade || !course.credits || !course.scale || !course.points)) {
      alert('Please fill in all fields for each course.');
      return;
    }

    const totalPoints = currentSemester.reduce((acc, course) => {
      const creditValue = parseFloat(course.credits) || 0;
      return acc + parseFloat(course.points) * creditValue;
    }, 0);

    const totalCredits = currentSemester.reduce((acc, course) => {
      return acc + (parseFloat(course.credits) || 0);
    }, 0);

    const calculatedGPA = totalPoints / totalCredits;

    setGPA(calculatedGPA.toFixed(2));

    if (editingIndex !== null) {
      const updatedSemesters = [...semesters];
      updatedSemesters[editingIndex] = { courses: currentSemester, gpa: calculatedGPA.toFixed(2) };
      setSemesters(updatedSemesters);
      setEditingIndex(null); 
    } else {
      setSemesters([...semesters, { courses: currentSemester, gpa: calculatedGPA.toFixed(2) }]);
    }

    setCurrentSemester(initialSemester);
  };

  const getGradeValue = (grade) => {
    switch (grade) {
      case 'A':
        return 4.0;
      case 'A-':
        return 3.7;
      case 'B+':
        return 3.3;
      case 'B':
        return 3.0;
      case 'B-':
        return 2.7;
      case 'C+':
        return 2.3;
      case 'C':
        return 2.0;
      case 'C-':
        return 1.7;
      case 'D+':
        return 1.3;
      case 'D':
        return 1.0;
      case 'F':
        return 0.0;
      default:
        return 0.0;
    }
  };

  const addCourse = () => {
    setCurrentSemester([...currentSemester, { name: '', grade: '', credits: '', scale: '', points: '' }]);
  };

  const removeCourse = (index) => {
    const updatedSemester = [...currentSemester];
    updatedSemester.splice(index, 1);
    setCurrentSemester(updatedSemester);
  };

  const cleanAll = () => {
    setCurrentSemester(initialSemester);
    setGPA(null);
    setEditingIndex(null);
  };

  const editSemester = (index) => {
    setEditingIndex(index);
    setCurrentSemester(semesters[index].courses);
    setGPA(semesters[index].gpa);
  };

  const downloadSemester = async (index) => {
    const captureNode = captureRef.current;

    const canvas = await html2canvas(captureNode);

    const dataURL = canvas.toDataURL();

    const a = document.createElement('a');
    a.href = dataURL;
    a.download = `semester_${index + 1}.png`;
    a.click();
  };

  return (
    <>
      <h1 className='Gpa-h1'>GPA Calculator</h1>
      <div className='Gpa'>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Grade</th>
              <th>Credits</th>
              <th>Scale</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {currentSemester.map((course, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={course.name}
                    onChange={(e) => updateCourse(index, 'name', e.target.value)}
                    placeholder='subject'
                    className='course-input'
                  />
                </td>
                <td>
                  <select
                    value={course.grade}
                    onChange={(e) => updateCourse(index, 'grade', e.target.value)}
                  >
                    <option value="">Grade</option>
                    {grades.map((grade) => (
                      <option key={grade} value={grade}>
                        {grade}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    value={course.credits}
                    onChange={(e) => updateCourse(index, 'credits', e.target.value)}
                    placeholder='0.00'
                    className='course-input'
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={course.scale}
                    onChange={(e) => updateCourse(index, 'scale', e.target.value)}
                    placeholder='0.00'
                    className='course-input'
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={course.points}
                    onChange={(e) => updateCourse(index, 'points', e.target.value)}
                    placeholder='0.00'
                    className='course-input'
                  />
                </td>
                <td>
                  <div onClick={() => removeCourse(index)} className='cancel-btn'><CancelOutlinedIcon /></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='GpaButtons'>
          <button onClick={addCourse} className='Add-btn'><AddCircleOutlineOutlinedIcon />Add Course</button>
          <button onClick={cleanAll} className='Clean-btn'><CancelOutlinedIcon />Clear All</button>
        </div>
        <div className='CalculateData'>
          {gpa !== null && <p>GPA: {gpa}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', gap: '9px' }}>
          <button onClick={calculateGPA} className='ADDSemi-btn'>Calculate</button>
          <button onClick={calculateGPA} className='Calculate-btn'> Add Semester</button>
        </div>
        <div className='new-Semester' ref={captureRef}>
          {semesters.map((semester, semesterIndex) => (
            <div key={semesterIndex}>
              <h2>Semester {semesterIndex + 1}</h2>
              <table>
                <thead>
                  <tr>
                    <th>Course Name</th>
                    <th>Grade</th>
                    <th>Credits</th>
                    <th>Scale</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {semester.courses.map((course, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          value={course.name}
                          className='course-input'
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={course.grade}
                          className='course-input'
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={course.credits}
                          className='course-input'
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={course.scale}
                          className='course-input'
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={course.points}
                          className='course-input'
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>GPA: {semester.gpa}</p>
              <div className='download-edit-btn'>
                <button onClick={() => downloadSemester(semesterIndex)} className='download-btn'>
                  Download
                </button>
                <button onClick={() => editSemester(semesterIndex)} className='edit'>
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
        <Link to="/Calanderwork" className='nestedlinkWork'>How it Work GPA Calculator Work</Link>
      </div>
    </>
  );
};

export default GPACalculator;