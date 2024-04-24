import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';
import PageTitle from '../../../layouts/PageTitle';

import Profilt from './../../../../images/tab/1.jpg';

const inputBlog = [
    { label:'Name', value:'', inputName: 'name' },
    // { label:'Surname', value:'Brahim' },
    { label:'Age', value:'', inputName: 'age' },
    // { label:'Skills', value:'HTML,  JavaScript,  PHP' },
];

const genderOptions = [
    { value: 'select', label: 'Select' },
    { value: '0', label: 'Male' },
    { value: '1', label: 'Female' },
]
const raceOptions = [
    { value: 'select', label: 'Select' },
    { value: 'white', label: 'White' },
    { value: 'black', label: 'Black' },
    { value: 'americanIndianAlaskaNative', label: 'American Indian/Alaska Native' },
    { value: 'asianOrPacificIslander', label: 'Asian or Pacific Islander' },
]
const treatmentOptions = [
    { value: 'select', label: 'Select' },
    { value: 'adjuv-rad', label: 'adjuv rad' },
    { value: 'surg-only', label: 'surg only' },
    { value: 'adjuv-chemo', label: 'adjuv chemo' },
    { value: 'no-ttt', label: 'no ttt' },
    { value: 'adjuv-chemoradio', label: 'adjuv chemoradio' },
    { value: 'prim-radio', label: 'prim radio' },
    { value: 'prim-radio', label: 'prim radio' },
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
                                            <input name={item.inputName} type="text" className="form-control" defaultValue={item.value}  />
                                        </div>
                                    ))}
                                    <div className="col-sm-6 mb-3">                                        
                                        <label className="form-label">Gender</label>
                                        <Select options={genderOptions}  className="custom-react-select" 
                                            defaultValue={genderOptions[0]}
                                            isSearchable={false}
                                        />
                                        
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <label className="form-label">Race</label>
                                        <Select name='race' options={raceOptions}  className="custom-react-select" 
                                            defaultValue={raceOptions[0]}
                                            isSearchable={false}
                                        />
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <label className="form-label">Treatment</label>
                                        <Select name='race' options={treatmentOptions}  className="custom-react-select" 
                                            defaultValue={treatmentOptions[0]}
                                            isSearchable={false}
                                        />
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <label className="form-label">Phone</label>
                                        <input type="text" className="form-control" defaultValue="+123456789" />
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="text" className="form-control" defaultValue="demo@gmail.com" />
                                    </div>
                                    {/* <div className="col-sm-6 mb-3">
                                        <label className="form-label">City</label> 
                                        <Select options={options4}  className="custom-react-select" 
                                            defaultValue={options4[0]}
                                            isSearchable={false}
                                        />
                                    </div> */}
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