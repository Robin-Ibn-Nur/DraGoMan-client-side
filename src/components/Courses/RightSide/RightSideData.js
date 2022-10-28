import React from 'react';
import { Link } from 'react-router-dom';

const RightSideData = ({ course }) => {
    const { id, name } = course
    return (
        <div className="overflow-x-auto">
            <table className="table w-full tabble-compact">
                <thead>
                        <tr className="hover">
                            <th>{id}</th>
                            <td>
                                <Link>{name}</Link>
                            </td>
                        </tr>
                    </thead>
                
            </table>
        </div>

    );
};

export default RightSideData;