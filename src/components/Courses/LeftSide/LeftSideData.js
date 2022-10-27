import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideData = ({ course }) => {
    console.log(course);
    const { id, name, image, } = course
    return (
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
                <img className="object-cover w-full h-48" src={image} alt="" />
            </div>
            <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                    <a href="#" className="block mt-2">
                        <h1 className="text-xl font-semibold text-neutral-600">Course Name: {name}</h1>
                        <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                    </a>
                </div>
                <div className="text-center mt-6">
                    <div className="ml-3">
                        <Link to={`/course/${id}`}
                            className='link link-hover btn btn-outline btn-accent'>Read More</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LeftSideData;

