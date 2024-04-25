import React from "react";
import Select from "react-select";
import selectOptions from '../../../../jsons/selectOptions.json';


const StepTwo = () => {
   return (
      <section>
         <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group mb-3">
               <label className="form-label">Treatment</label>
                    <Select
                      name="treatment"
                      options={selectOptions.treatmentOptions}
                      className="custom-react-select"
                      defaultValue={selectOptions.treatmentOptions[0]}
                      isSearchable={false}
                    />
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group mb-3">
               <label className="form-label">
                      Year of follow up record
                    </label>
                    <input
                      name="yearOfFollowUpRecord"
                      type="number"
                      className="form-control"
                    />
               </div>
            </div>
         </div>
      </section>
   );
};

export default StepTwo;
