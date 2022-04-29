import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getSettings } from '../../services/SettingsService';
import  Menu  from '../../components/Menu/Menu';


function Settings(){

    const history = useHistory();

    const [error, setError] = useState('');

    const [success, setSuccess ] = useState('');


    const [settings, setSettings] = useState({

        email: '',
        apiUrl: '',
        accessKey: '',
        keySecret: ''

    })

    useEffect(() => {
        const token = localStorage.getItem("token");

        getSettings(token)
           .then(response => {
               setSettings(response);

           })
           .catch(err => {
               if(err.response && err.response.status === 401)
                  return history.push('/');

               if(err.response)    
                   setError(err.response.data);
               else
                   setError(err.message);
               
           })

    }, [])

    


    return(
        <React.Fragment>
            <Menu />
            <main className="content">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                    <div className="d-block mb-4 mb-md-0">
                        <h1 className="h4">Settings</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card card-body border-0 shadow mb-4">
                            <form>
                                <h2 className="h5 mb-4">General Info</h2>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input  className="form-control" id="email" type="email" placeholder="maurorezende2012@gmail.com" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label htmlFor="newPassword">New Password</label>
                                            <input  className="form-control" id="newPassword" type="password" placeholder="Enter your new password" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div>
                                            <label htmlFor="confirmPassword">Confirm Password</label>
                                            <input className="form-control" id="confirmPassword" type="password" placeholder="Your new password again" />
                                        </div>
                                    </div>
                                </div>
                                <h2 className="h5 mb-4">Exchange Info</h2>
                                <div className="row">
                                    <div className="col-sm-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="email">API URL</label>
                                            <input  className="form-control" id="apiUrl" type="text" placeholder="Your API URL" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="email">Access Key</label>
                                            <input className="form-control" id="accessKey" type="text" placeholder="Your access key" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 mb-3">
                                        <div className="form-group">
                                            <label htmlFor="email">Secret Key</label>
                                            <input  className="form-control" id="accessKey" type="password" placeholder="Your secret key" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap">
                                        <div className="col-sm-3">
                                            <button className="btn btn-gray-800 mt-2 animate-up-2" type="submit" >Save all</button>
                                        </div>
                                        {
                                            error
                                                ? <div className="alert alert-danger mt-2 col-9 py-2">{error}</div>
                                                : <React.Fragment></React.Fragment>
                                        }
                                        {
                                            success
                                                ? <div className="alert alert-success mt-2 col-9 py-2">{success}</div>
                                                : <React.Fragment></React.Fragment>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

       
        </React.Fragment>



    )

}
export default Settings;