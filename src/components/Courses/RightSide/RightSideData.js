import React from 'react';
import { Link } from 'react-router-dom';

const RightSideData = ({ course }) => {
    const { id, name } = course
    return (
        <div className='flex justify-between text-center link link-hover'>
            <li><Link to={`/course/${id}`}>{name}</Link></li>
        </div>

    );
};

export default RightSideData;