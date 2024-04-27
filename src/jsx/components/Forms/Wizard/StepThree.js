import selectOptions from "../../../../jsons/selectOptions.json";

const StepThree = (props) => {
  return (
    <section>
      <div className="row">
        <div className="col-12 mb-3">
          <div className="card">
            <div className="card-header">
              <h6 className="title">Patient cancers</h6>
            </div>
            <div className="card-body">
              <div className="row">
                {selectOptions.cancerOptions.map((cancer) => (
                  <div className="col-2" key={cancer.value}>
                    <div className="form-check custom-checkbox mb-3">
                      <input
                        name={cancer.value}
                        type="checkbox"
                        className="form-check-input"
                        id={cancer.value}
                        // checked={formData.cancers.includes(
                        //   cancer.value
                        // )}
                        checked={props.formData[cancer.value]}
                        onChange={props.handleCheckboxChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={cancer.value}
                      >
                        {cancer.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepThree;
