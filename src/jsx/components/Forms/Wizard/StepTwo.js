import React, {useState} from "react";
import Select from "react-select";
import selectOptions from "../../../../jsons/selectOptions.json";

const StepTwo = ({ formData, setFormData }) => {
  const [treatment, setTreatment] = useState(
    formData.treatment || selectOptions.treatmentOptions[0]
  );
  const [yearOfFollowUpRecord, setYearOfFollowUpRecord] = useState(
    formData.yearOfFollowUpRecord || ""
  );

  const handleTreatmentChange = (selectedOption) => {
    setTreatment(selectedOption);
    setFormData({ ...formData, treatment: selectedOption });
  };

  const handleYearOfFollowUpRecordChange = (e) => {
    setYearOfFollowUpRecord(e.target.value);
    setFormData({ ...formData, yearOfFollowUpRecord: e.target.value });
  };
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
              value={treatment}
              onChange={handleTreatmentChange}
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">Year of follow up record</label>
            <input
              name="yearOfFollowUpRecord"
              type="number"
              className="form-control"
              value={yearOfFollowUpRecord}
              onChange={handleYearOfFollowUpRecordChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepTwo;
