import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideData from './LeftSide/LeftSideData';
import RightSideData from './RightSide/RightSideData';
import './Courses.css';
const Courses = () => {
    const courses = useLoaderData();
    return (
        <>
            
            {/* this is course section */}
            <div className="container mx-auto p-4 my-6 space-y-4 text-center">
                <h2 className="text-5xl font-bold">Welcome To Our Courses</h2>
                <p className="dark:text-gray-400">Stay Hungry, Stay Foolish</p>
                <small className="dark:text-gray-300 font-bold">Steve Jobs</small>
            </div>
            <div className=" grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                <section className="p-4 lg:p-8 dark:bg-gray-800">
                    <div className="container mx-auto space-y-12">
                        {
                            courses.map(course => <LeftSideData
                                key={course.id} course={course}></LeftSideData>)
                        }
                    </div>
                </section>

                <div className='mt-6'>
                    {
                        courses.map(course => <RightSideData
                            key={course.id} course={course}
                        ></RightSideData>)
                    }
                </div>
            </div>
        </>





    );
};

export default Courses;