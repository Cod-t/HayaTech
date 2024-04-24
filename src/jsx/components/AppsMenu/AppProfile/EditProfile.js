import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';
import PageTitle from '../../../layouts/PageTitle';

import Profilt from './../../../../images/tab/1.jpg';

const inputBlog = [
    { label:'Name', value:'John' },
    // { label:'Surname', value:'Brahim' },
    { label:'Specialty', value:'Developer' },
    { label:'Skills', value:'HTML,  JavaScript,  PHP' },
];

const options2 = [
    { value: '1', label: 'Select' },
    { value: '2', label: 'Male' },
    { value: '3', label: 'Female' },
    { value: '4', label: 'Other' }
]
const options3 = [
    { value: '1', label: 'Russia' },
    { value: '2', label: 'Canada' },
    { value: '3', label: 'China' },
    { value: '4', label: 'India' }
]
const options4 = [
    { value: '1', label: 'Krasnodar' },
    { value: '2', label: 'Tyumen' },
    { value: '3', label: 'Chelyabinsk' },
    { value: '4', label: 'Moscow' }
]

const EditProfile = () => {
   // const [selectOption , setSelectOption] = useState('Gender');
    return(
        <>          
            <PageTitle activeMenu="Edit Patient" motherMenu="Dashboard" />
            <div className="row">
                <div className="col-xl-12 col-lg-12">
                    <div className="card profile-card card-bx mb-3">
                        <div className="card-header">
                            <h6 className="title">Account setup</h6>
                        </div>
                        <form className="profile-form">
                            <div className="card-body">
                                <div className="row">
                                    { inputBlog.map((item, ind)=>(
                                        <div className="col-sm-6 mb-3" key={ind}>
                                            <label className="form-label">{item.label}</label>
                                            <input type="text" className="form-control" defaultValue={item.value}  />
                                        </div>
                                    ))}
                                
                                    <div className="col-sm-6 mb-3">                                        
                                        <label className="form-label">Gender</label>
                                        <Select options={options2}  className="custom-react-select" 
                                            defaultValue={options2[0]}
                                            isSearchable={false}
                                        />
                                        
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <label className="form-label">Birth</label>                                        
                                        <input class="form-control mb-xl-0 mb-3" type="text" id="datepicker" />
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <label className="form-label">Phone</label>
                                        <input type="text" className="form-control" defaultValue="+123456789" />
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="text" className="form-control" defaultValue="demo@gmail.com" />
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <label className="form-label">Country</label>
                                        <Select options={options3}  className="custom-react-select" 
                                            defaultValue={options3[0]}
                                            isSearchable={false}
                                        />
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <label className="form-label">City</label> 
                                        <Select options={options4}  className="custom-react-select" 
                                            defaultValue={options4[0]}
                                            isSearchable={false}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer card-footer align-items-center d-flex justify-content-between">
                                <button className="btn btn-primary">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditProfile;