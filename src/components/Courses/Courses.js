import React from 'react';
import LeftSideData from './LeftSide/LeftSideData';
import RightSideData from './RightSide/RightSideData';

const Courses = () => {
     return (

        <div className='container flex justify-around my-10 mx-auto'>
            <RightSideData></RightSideData>
            <LeftSideData></LeftSideData>
        </div>
        
    );
};

export default Courses;