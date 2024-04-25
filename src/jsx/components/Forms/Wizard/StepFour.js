import React from "react";
import { Link } from "react-router-dom";

const StepFour = () => {
   return (
      <section>
         <div className="text-center">
         <button type="button" class="me-2 btn btn-primary btn-rounded">Predict</button>
         </div>
         {/* Add a loading thingie */}
         {/* <div className="row">
            <div className="col-12">
               <div className="skip-email text-center pt-5 pb-2">
                  <p>Or if want skip this step entirely and setup it later</p>
                  <Link to="#" className="wizard-four-color">
                     Skip step
                  </Link>
               </div>
            </div>
         </div> */}
      </section>
   );
};

export default StepFour;
