import { data } from 'autoprefixer';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import LeftSideData from './LeftSide/LeftSideData';
import RightSideData from './RightSide/RightSideData';

const Courses = () => {
    const [courses, setCourses] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (

        <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
            <div className="divider lg:divider-horizontal">OR</div>
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">content</div>
        </div>






        // <div className='container w-full mx-auto lg:flex justify-around py-10 gap-8'>

        //     {/* {
        //         courses.map(course => <RightSideData key={course.id} course={course}></RightSideData>)
        //     } */}
        //     <LeftSideData></LeftSideData>

        // </div>

    );
};

export default Courses;