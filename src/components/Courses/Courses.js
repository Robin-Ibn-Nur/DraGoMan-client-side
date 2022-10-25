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
            .then (data => setCourses(data) )
    },[])
    
    return (
        <div className='container w-full mx-auto lg:flex justify-around py-10 gap-8'>
            
            {/* {
                courses.map(course => <RightSideData key={course.id} course={course}></RightSideData>)
            } */}
            <LeftSideData></LeftSideData>

        </div>

    );
};

export default Courses;