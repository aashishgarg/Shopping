import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import UserIndexItem from "./UserIndexItem";

let axiosInstance = require('../../config');

class UserIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount = () => {
        axiosInstance.get('/users.json').then((res) => {
            let users = res.data.users;
            this.setState({users});
        })
    };

    deleteUser = (id) => {
        axiosInstance.delete(`users/${id}.json`).then(() => {
            const users = this.state.users.filter(user => user.id !== id);
            this.setState({users});
        });
    };

    render() {
        const users = this.state.users.map((user, index) =>
            <UserIndexItem index={index} key={user.id} deleteUser={this.deleteUser} {...user}/>);

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="bgc-white bd bdrs-3 p-20 mB-20">
                        <div className="row">
                            <div className="col-md-6"><h4 className="c-grey-900 mB-20">List of all users</h4></div>
                            <div className="offset-md-4 col-md-2">
                                <div className="peer">
                                    <Link to={'/admin/users/new'}>
                                        <button type="button"
                                                className="mT-nv-10 pos-a r-10 t-2 btn cur-p bdrs-50p p-0 w-3r h-3r btn-success">
                                            <i className="ti-plus"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Username</th>
                                <th scope="col">About</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {users}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };
}

export default UserIndex;
