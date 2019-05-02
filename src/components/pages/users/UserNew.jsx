import React, {Component} from 'react';
let axiosInstance = require('../../config');

class UserNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            username: '',
            about: ''
        };
    };

     submitUser = () => {
        axiosInstance.post('users.json', {
            admin_user: {
                name: this.state.name,
                email: this.state.email,
                username: this.state.username,
                about: this.state.about
            }
        }).then((res) => (
            console.log(res)
            // this.props.history.push(`users/${res.data.id}`)
        ))
    };

    nameChanged = (e) => {
        this.setState({
            name: e.target.value
        })
    };

    emailChanged = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    usernameChanged = (e) => {
        this.setState({
            username: e.target.value
        })
    };

    aboutChanged = (e) => {
        this.setState({
            about: e.target.value
        })
    };

    render() {
        return (
            <div className="masonry-item col-md-10">
                <div className="bgc-white p-20 bd">
                    <h6 className="c-grey-900">New User</h6>
                    <div className="mT-30">
                        <form onSubmit={this.submitUser}>
                            {/*========== Name ==============*/}
                            <div className="form-group row">
                                <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="input" className="form-control" id="name" onChange={this.nameChanged}
                                            placeholder="Name"/>
                                </div>
                            </div>
                            {/*========== Email ==============*/}
                            <div className="form-group row">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3"  onChange={this.emailChanged}
                                           placeholder="Email"/>
                                </div>
                            </div>
                            {/*========== Username ==============*/}
                            <div className="form-group row">
                                <label htmlFor="inputUsername3" className="col-sm-2 col-form-label">Username</label>
                                <div className="col-sm-10">
                                    <input type="input" className="form-control" id="inputUsername3"  onChange={this.usernameChanged}
                                           placeholder="Username"/>
                                </div>
                            </div>
                            {/*========== About ==============*/}
                            <div className="form-group row">
                                <label htmlFor="inputAbout3" className="col-sm-2 col-form-label">About</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" id="inputAbout3" placeholder="About"  onChange={this.aboutChanged}/>
                                </div>
                            </div>
                            {/*========== Admin? ==============*/}
                            <div className="form-group row">
                                {/*<div className="col-sm-2">Checkbox</div>*/}
                                <div className="col-sm-10">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox"/> Admin?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/*========== Submit ==============*/}
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

export default UserNew;
