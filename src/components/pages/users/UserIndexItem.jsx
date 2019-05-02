import React from 'react';
import {Link} from 'react-router-dom';

const UserIndexItem = ({index, deleteUser, id, name, email, username, about}) => (
    <tr>
        <th scope="row">{index + 1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{username}</td>
        <td>{about}</td>
        <td>
            <div className="peers mR-15">
                <div className="peer">
                    <Link to={`admin/users/${id}`} className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                        <i className="ti-pencil"></i>
                    </Link>
                </div>
                <div className="peer">
                    <a href='javascript:void(0);' onClick={() => deleteUser(id)} className="td-n c-red-500 cH-blue-500 fsz-md p-5">
                        <i className="ti-trash"></i>
                    </a>
                </div>
            </div>
        </td>
    </tr>
);

export default UserIndexItem;
