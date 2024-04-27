import Select from "react-select";
import selectOptions from "../../../../jsons/selectOptions.json";

const StepOne = (props) => {
  return (
    <section>
      <div className="row">
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">
              Name <span className="required">*</span>
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder=""
              value={props.formData["name"]}
              onChange={props.handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="text-label">
              age<span className="required">*</span>
            </label>
            <input
              name="age"
              type="number"
              className="form-control"
              value={props.formData["age"]}
              onChange={props.handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-6 mb-2">
          <div className="form-group mb-3">
            <label className="form-label">Gender</label>
            <Select
              name="sex"
              options={selectOptions.genderOptions}
              className="custom-react-select"
              isSearchable={false}
              onChange={(selectedOption) =>
                props.handleSelectChange(selectedOption, "sex")
              }
            />
          </div>
        </div>
        <div className="col-lg-6 mb-3">
          <div className="form-group mb-3">
            <label className="form-label">Race</label>
            <Select
              name="race_recode_W_B_AI_API"
              options={selectOptions.raceOptions}
              className="custom-react-select"
              isSearchable={false}
              onChange={(selectedOption) =>
                props.handleSelectChange(
                  selectedOption,
                  "race_recode_W_B_AI_API"
                )
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepOne;
