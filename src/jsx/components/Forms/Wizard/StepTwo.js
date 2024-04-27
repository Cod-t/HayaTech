import Select from "react-select";
import selectOptions from "../../../../jsons/selectOptions.json";

const StepTwo = (props) => {
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
              isSearchable={false}
              onChange={(selectedOption) =>
                props.handleSelectChange(selectedOption, "treatment")
              }
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">Year of follow up record</label>
            <input
              name="year_of_follow_up_recode"
              type="number"
              className="form-control"
              value={props.formData["year_of_follow_up_recode"]}
              onChange={props.handleInputChange}
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">year of diagnosis</label>
            <input
              name="year_of_diagnosis"
              type="number"
              className="form-control"
              value={props.formData["year_of_diagnosis"]}
              onChange={props.handleInputChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepTwo;
