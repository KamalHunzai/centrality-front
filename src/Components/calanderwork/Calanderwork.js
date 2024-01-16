import React from 'react'
import './Calanderwork.css'
import { Link } from 'react-router-dom';
import { MdOutlineNavigateNext } from "react-icons/md";

const Calanderwork = () => {
  return (
    <>
      <div className='gpaCaculation'>
        <table >
          <thead>
            <tr className='backnonetr'>
              <th  className='backnone' colSpan={2}>
              <p>Standard Grade Point Scale: A = 4.0</p>
              </th></tr>
            <tr>
              <th>Grade</th>
              <th>unweighted Grade Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td className='DACKGROUNG'>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr><th colSpan={2}  className='backnone'><p>Honors Grade Point Scale: A = 4.5</p></th></tr>
            <tr>
              <th className='DACKGROUNG'>Grade</th>
              <th className='DACKGROUNG'>unweighted Grade Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr><th colSpan={2}  className='backnone'><p>AP Grade Point Scale: A = 5.0</p></th></tr>
            <tr>
              <th>Grade</th>
              <th>unweighted Grade Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>A+</td>
              <td>4.0</td>
            </tr>
          </tbody>
        </table>
        <table className='tableFullwidth'>
          <thead>
            <tr><th colSpan={6}  className='backnone'><p>AP Grade Point Scale: A = 5.0</p></th></tr>
            <tr>
              <th>Course</th>
              <th>Creadit Hours</th>
              <th>Grade</th>
              <th>Scale</th>
              <th>Grade Points</th>
              <th>Quality Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='DACKGROUNG'>CHEMISTRY 102</td>
              <td>3</td>
              <td>B+</td>
              <td>Std</td>
              <td>3.3</td>
              <td>3 x 3.3 = 9.9</td>
            </tr>
            <tr>
              <td className='DACKGROUNG'>CHEMISTRY 102</td>
              <td>3</td>
              <td>B+</td>
              <td>Std</td>
              <td>3.3</td>
              <td>3 x 3.3 = 9.9</td>
            </tr><tr>
              <td className='DACKGROUNG'>CHEMISTRY 102</td>
              <td>3</td>
              <td>B+</td>
              <td>Std</td>
              <td>3.3</td>
              <td>3 x 3.3 = 9.9</td>
            </tr><tr>
              <td className='DACKGROUNG'>CHEMISTRY 102</td>
              <td>3</td>
              <td>B+</td>
              <td>Std</td>
              <td>3.3</td>
              <td>3 x 3.3 = 9.9</td>
            </tr><tr>
              <td className='DACKGROUNG'>CHEMISTRY 102</td>
              <td>3</td>
              <td>B+</td>
              <td>Std</td>
              <td>3.3</td>
              <td>3 x 3.3 = 9.9</td>
            </tr><tr>
              <td className='DACKGROUNG'>CHEMISTRY 102</td>
              <td>3</td>
              <td>B+</td>
              <td>Std</td>
              <td>3.3</td>
              <td>3 x 3.3 = 9.9</td>
            </tr><tr>
              <td className='DACKGROUNG'>CHEMISTRY 102</td>
              <td>3</td>
              <td>B+</td>
              <td>Std</td>
              <td>3.3</td>
              <td>3 x 3.3 = 9.9</td>
            </tr><tr>
              <td className='DACKGROUNG'>CHEMISTRY 102</td>
              <td>3</td>
              <td>B+</td>
              <td>Std</td>
              <td>3.3</td>
              <td>3 x 3.3 = 9.9</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='readMore'>
        <Link to="/Readmore">
          <p>Read more How its work</p>
          <span><MdOutlineNavigateNext /></span>
        </Link>
      </div>
    </>
  )
}

export default Calanderwork
