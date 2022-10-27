import React from 'react';
import { Link } from 'react-router-dom';

const RightSideData = ({ course }) => {
    const { id, name } = course
    return (
        <div className= 'flex justify-between  link link-hover'>
            <Link to={`/course/${id}`}> <li>{name}</li></Link>
        </div>

    );
};

export default RightSideData;