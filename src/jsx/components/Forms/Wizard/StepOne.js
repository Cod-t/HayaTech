import React from "react";
import Select from "react-select";
import selectOptions from '../../../../jsons/selectOptions.json';


const StepOne = () => {


   return (
      <section>
         <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group mb-3">
                  <label className="text-label">Name <span className="required">*</span></label>
                  <input
                     type="text"
                     name="name"
                     className="form-control"
                     placeholder=""
                     required
                  />
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group mb-3">
                  <label className="text-label">age<span className="required">*</span></label>
                  <input
                     name="age"
                     type="number"
                     className="form-control"
                     id="inputGroupPrepend2"
                     aria-describedby="inputGroupPrepend2"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group mb-3">
               <label className="form-label">Gender</label>
                    <Select
                      name="gender"
                      options={selectOptions.genderOptions}
                      className="custom-react-select"
                      defaultValue={selectOptions.genderOptions[0]}
                      isSearchable={false}
                    />
               </div>
            </div>
            <div className="col-lg-6 mb-3">
               <div className="form-group mb-3">
               <label className="form-label">Race</label>
               <Select
                      name="race"
                      options={selectOptions.raceOptions}
                      className="custom-react-select"
                      defaultValue={selectOptions.raceOptions[0]}
                      isSearchable={false}
                      id="racerace"
                    />
               </div>
            </div>
         </div>
      </section>
   );
};

export default StepOne;
