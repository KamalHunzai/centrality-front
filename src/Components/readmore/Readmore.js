import React from 'react'
import "./Readmore.css"

const Readmore = () => {
    return (
        <div className='Readmore-main'>
            <div className='Readmore-main-child-1'>
                <h1>Calculate Your GPA by Hand</h1>
                <p>Follow the steps here along with the Example GPA Calculation in the table below. Then calculate your own GPA by hand.</p>
                <p>For each course where you earned a letter grade, multiply the credit hours by the grade points to get Quality Points</p>
                <h3>Credit Hours × Grade Points = Quality Points per course</h3>
                <p>Add all of the Credit Hours for courses where you earned a letter grade
                    Add all of the Quality Points
                    Divide the total Quality Points by the total Credit Hours to get your GPA.</p>
                <h3>Total Quality Points ÷ Total Credit Hours = GPA</h3>
                <h1>How to Calculate Your Cumulative GPA</h1>
                <p>Find your past GPA and past total Credit Hours.
                    Multiply past GPA × past total Credit Hours = past total Quality Points
                    Add past and current term Credit Hours
                    Add past and current term Quality Points
                    Divide the Total Quality Points by the Total Credit Hours to get Cumulative GPA.</p>
            </div>
            <div className='Readmore-main-child-2'>
                <h1>Calculator Use</h1>
                <p>Use this GPA calculator to find your GPA using the standard 4.0 GPA
                    scale or a weighted scale for Honors and AP courses. Input the
                    course name, the number of course credits and your grade for the
                    term. Select the grade scale:</p>
                <div className='Readmore-inner'>
                    <h4>Std = Standard scale where A = 4.0</h4>
                    <h4>Hon = Honors scale where A = 4.5</h4>
                    <h4>AP = Advanced Placement scale where A = 5.0</h4>
                </div>
                <p>The calculator fills in the grade point value for the letter grade on the
                    scale you selected. If you know your letter grade value and it's
                    different from our scale you can edit the grade points field. For
                    example if you got an A+ in an Honors course and you know your A+
                    is worth 4.8 points at your school you can update the Points field by
                    typing in 4.8</p>

                <p>Click the Calculate button to calculate your GPA. For each course,
                    we multiply the number of credits by the grade points value. Then
                    add up these products and divide by the total number of credits. See
                    a sample calculation in the table at the bottom of this page.</p>
                <h1>How to Calculate GPA</h1>
                <p>For each course, multiply credits by grade points
                    Add those results to get total quality points
                    Divide total quality points by total number of credits for courses
                    where you earned a letter grade
                    Do not include credits for pass/no pass courses, incompletes
                    or withdrawals (P, N/P, I, W)</p>
                <h1>Unweighted and Weighted GPA Scales</h1>
                <p>This calculator uses the following scales for grade points: Standard
                    4.0 GPA Scale, Honors Grade Point Scale and Advanced Placement
                    (AP) Grade Point Scale.</p>
            </div>
        </div>
    )
}

export default Readmore