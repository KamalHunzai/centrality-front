import React, { useState } from 'react';
import "./NestedTabs.css";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import { IoCaretForwardOutline } from 'react-icons/io5';
import Summary from "./Summary/Summary"
import LineChart from './Chart/LineChart';
import NoticeBoard from './NoticeBoard/NoticeBoard';
import MyAssingmentSub from './MyAssingmentsSub/MyAssingmentSub';
import ClassLectures from './ClassLectures/ClassLectures';
import MyassigmentMain from '../myassigmentMain/MyassigmentMain';
import MyGrade from '../MyGrade/MyGrade';
const NestedTabs = () => {

    const [key, setKey] = useState("tab1");

    return (
        <Tab.Container id='nested-tabs' activeKey={key} onSelect={(k) => setKey(k)}>
            <Row>
                <Col sm={12} className='backGroundColor'>
                    <div className='Nested-Dflex'>
                        <div className='whereAreYou'>
                            <div className='homee'>
                                <h2 className='blueColor'>Home</h2>
                                <span><IoCaretForwardOutline /></span>
                                <h2 className='blueColor'>Classrooms</h2>
                                <span className='gray'><IoCaretForwardOutline /></span>
                                <p>Chemistry</p>
                            </div>
                        </div>
                        <Nav variant='tabs' className='nestedTabs'>

                            <Nav.Item>
                                <Nav.Link eventKey="tab1">Summary</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab2">My Grades</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab3">Assignments</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab4">Tests</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab5">Noticeboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab6">Class Lectures</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="tab7">Videos</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>

                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Tab.Content>
                        <Tab.Pane eventKey="tab1">
                            <Summary />
                            <div className='Chart'>
                                <LineChart />
                            </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="tab2">
                            <Tab.Container id='nested-subtabs-grades' defaultActiveKey="graded">
                                <div className="main-Links">
                                    <div className="mainLinks">
                                        <Row>
                                            <Col sm={12}>
                                                <Nav variant='tabs' className='navLinksMain'>
                                                    <h4>My Grades</h4>
                                                    <div className="mainLinksItems">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="passed" className='nav-links'>Passed</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="failed" className='nav-links'>Failed</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="missed" className='nav-links'>Missed</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="all" className='nav-links'>All</Nav.Link>
                                                        </Nav.Item>
                                                    </div>
                                                </Nav>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="passed">
                                                        <h5>Passed</h5>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="failed">
                                                        <h5>Failed</h5>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="missed">
                                                        <h5>Missed</h5>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="all">
                                                        <MyGrade />
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Tab.Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab3">
                            <Tab.Container id='nested-subtabs-assignments' defaultActiveKey="graded">
                                <div className="main-Links">
                                    <div className="mainLinks">
                                        <Row>
                                            <Col sm={12}>
                                                <Nav variant='tabs' className='navLinksMain'>
                                                    <h4>Assignment Content</h4>
                                                    <div className="mainLinksItems">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="graded" className='nav-links'>Graded</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="sbmitted" className='nav-links'>2/10 Submitted</Nav.Link>
                                                        </Nav.Item>
                                                        <Nav.Item>
                                                            <Nav.Link eventKey="all" className='nav-links'>All</Nav.Link>
                                                        </Nav.Item>
                                                    </div>
                                                </Nav>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="graded">
                                                        <h5>Graded content</h5>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="sbmitted">
                                                        <MyAssingmentSub />
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="all">
                                                        <h5>All content</h5>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Tab.Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab4">
                            <Tab.Container id='nested-subtabs-tests' defaultActiveKey="retake">
                                <div className='TestContent'>
                                    <Row>
                                        <Col sm={12}>
                                            <Nav variant='tabs'>

                                                <h4>Test</h4>
                                                <div className='Test'>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="retake" className='nav-links'>Retake test</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="upcoming" className='nav-links'>Upcoming</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="submitted" className='nav-links'>Submitted </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="all" className='nav-links'>All</Nav.Link>
                                                    </Nav.Item>
                                                </div>
                                            </Nav>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="retake">
                                                    <h5>Retake Test Content</h5>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="upcoming">
                                                    <h5>Upcoming</h5>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="submitted">
                                                    <h5>Submitted Content</h5>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="all">
                                                    <MyassigmentMain />
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </div>
                            </Tab.Container>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab5">
                            <NoticeBoard />
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab6">
                            <ClassLectures />
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab7">
                            <h4>tab7 content</h4>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default NestedTabs