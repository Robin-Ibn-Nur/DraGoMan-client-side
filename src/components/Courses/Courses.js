import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideData from './LeftSide/LeftSideData';
import RightSideData from './RightSide/RightSideData';
import './Courses.css';
const Courses = () => {
    const courses = useLoaderData();
    return (
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






    );
};

export default Courses;