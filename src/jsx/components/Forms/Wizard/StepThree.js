import React, { useState } from "react";

const StepThree = ({ formData, setFormData }) => {
  const [cancer, setCancer] = useState(formData.cancer || {});
  const handleCancerChange = (e) => {
    const { name, checked } = e.target;
    setCancer({ ...cancer, [name]: checked });
    setFormData({ ...formData, cancer: { ...cancer, [name]: checked } });
  };
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
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="Breast"
                      type="checkbox"
                      className="form-check-input"
                      id="Breast"
                      checked={cancer.Breast || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="Breast">
                      Breast
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="Endocrine"
                      type="checkbox"
                      className="form-check-input"
                      id="Endocrine"
                      checked={cancer.Endocrine || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="Endocrine">
                      Endocrine
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="Eye_and_adnexa"
                      type="checkbox"
                      className="form-check-input"
                      id="Eye_and_adnexa"
                      checked={cancer.Eye_and_adnexa || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Eye_and_adnexa"
                    >
                      Eye and adnexa
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="Gastrointestinal"
                      type="checkbox"
                      className="form-check-input"
                      id="Gastrointestinal"
                      checked={cancer.Gastrointestinal || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Gastrointestinal"
                    >
                      Gastrointestinal
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="Gynecological"
                      type="checkbox"
                      className="form-check-input"
                      id="Gynecological"
                      checked={cancer.Gynecological || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="Gynecological">
                      Gynecological
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="Head_and_Neck"
                      type="checkbox"
                      className="form-check-input"
                      id="Head_and_Neck"
                      checked={cancer.Head_and_Neck || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="Head_and_Neck">
                      Head and Neck
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="Hematopoietic"
                      type="checkbox"
                      className="form-check-input"
                      id="Hematopoietic"
                      checked={cancer.Hematopoietic || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="Hematopoietic">
                      Hematopoietic
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="Male_Genital"
                      type="checkbox"
                      className="form-check-input"
                      id="Male_Genital"
                      checked={cancer.Male_Genital || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="Male_Genital">
                      Male Genital
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="Musculoskeletal"
                      type="checkbox"
                      className="form-check-input"
                      id="Musculoskeletal"
                      checked={cancer.Musculoskeletal || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Musculoskeletal"
                    >
                      Musculoskeletal
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="Nervous_System"
                      type="checkbox"
                      className="form-check-input"
                      id="Nervous_System"
                      checked={cancer.Nervous_System || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label
                      className="form-check-label"
                      htmlFor="Nervous_System"
                    >
                      Nervous System
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="Respiratory"
                      type="checkbox"
                      className="form-check-input"
                      id="Respiratory"
                      checked={cancer.Respiratory || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="Respiratory">
                      Respiratory
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="Skin"
                      type="checkbox"
                      className="form-check-input"
                      id="Skin"
                      checked={cancer.Skin || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="Skin">
                      Skin
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="Unspecified"
                      type="checkbox"
                      className="form-check-input"
                      id="Unspecified"
                      checked={cancer.Unspecified || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="Unspecified">
                      Unspecified
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="Urinary"
                      type="checkbox"
                      className="form-check-input"
                      id="Urinary"
                      checked={cancer.Urinary || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="Urinary">
                      Urinary
                    </label>
                  </div>
                </div>
                <div className="col-2">
                  <div className="form-check custom-checkbox mb-3">
                    <input
                      name="COD_strokeYN"
                      type="checkbox"
                      className="form-check-input"
                      id="COD_strokeYN"
                      checked={cancer.COD_strokeYN || false}
                      onChange={handleCancerChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="COD_strokeYN">
                      COD strokeYN
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepThree;
