import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideData from './LeftSide/LeftSideData';
import RightSideData from './RightSide/RightSideData';
import './Courses.css';
const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className="container-display">
            <div className=''>
                <div className=" relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                    <div className="relative mx-auto max-w-7xl">
                        <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-2 lg:max-w-none">
                            {
                                courses.map(course => <LeftSideData
                                    key={course.id} course={course}></LeftSideData>)
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className='right-side'>
                {
                    courses.map(course => <RightSideData
                        key={course.id} course={course}
                    ></RightSideData>)
                }
            </div>
        </div>






    );
};

export default Courses;