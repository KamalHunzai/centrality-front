import React, { useState } from 'react'
import './FilterModal.css'
import Modal  from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function FilterModal() {
  const [showModal, setShowModal] = useState(false)
  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)
  return (
    <div>
      <Button onClick={handleShow} className='FilterFirstBtn'>
        Filter
      </Button>
      <Modal show={showModal} onHide={handleClose} className='Filter'>
        <div className='container'>
          <h3>Filter</h3>
          <hr/>
          <div className='row'>
            <div className='Filter-Status'>
              <label>Course</label>
              <select className='form-select' aria-label='Default select example'>
                <option selected>All</option>
                <option value="1">One</option>
              </select>
              <label>Teacher</label>
              <select className='form-slect' aria-label='Default select example'>
                <option selected>All</option>
                <option>One</option>
              </select>
              <button className='FilterModalBtn' onClick={handleClose}>Filter</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default FilterModal