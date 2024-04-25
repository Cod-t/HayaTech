import React, { useState, useContext, useEffect } from "react";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Dropdown, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import Timeline from "./Timeline";
import { ThemeContext } from "../../../context/ThemeContext";

//Images
import avatar from "../../../images/avatar/1.jpg";
import avatar1 from "../../../images/avatar/2.jpg";
import avatar2 from "../../../images/avatar/3.jpg";
import avatar3 from "../../../images/avatar/4.jpg";
import avatar4 from "../../../images/avatar/5.jpg";
// import avatar5 from "../../../images/avatar/6.jpg";

const cardWidget = [
  {
    bgcolor: "bg-primary",
    icons: "flaticon-381-user-7",
    title: "King Abdullah University Hospital",
    digit: "Admin",
  },
  {
    bgcolor: "bg-danger",
    icons: "flaticon-381-user-9",
    title: "Patients",
    digit: "76",
  },
  {
    bgcolor: "bg-success",
    icons: "flaticon-381-percentage",
    title: "Predictions",
    digit: "100",
  },
  {
    bgcolor: "bg-info",
    icons: "flaticon-381-heart",
    title: "Services",
    digit: "2",
  },
];

const patientTable = [
  {
    id: "1",
    image: avatar,
    name: "Media heading",
    year: "12",
    category: "Allergies & Asthma",
    status: "Predicted",
    type: "success",
  },
  {
    id: "2",
    image: avatar1,
    name: "Angela Nurhayati",
    year: "21",
    category: "Sleep Problem",
    status: "Not Predicted",
    type: "danger",
  },
  {
    id: "3",
    image: avatar2,
    name: "James Robinson",
    year: "07",
    category: "Dental Care",
    status: "Predicted",
    type: "success",
  },
  {
    id: "4",
    image: avatar3,
    name: "Thomas Jaja",
    year: "17",
    category: "Diabetes",
    status: "Predicted",
    type: "success",
  },
  {
    id: "5",
    image: avatar4,
    name: "Cindy Brownleee",
    year: "10",
    category: "Covid-19 Suspect",
    status: "Predicted",
    type: "success",
  },
  // { id:'6', image: avatar5, name:'Oconner Jr.', year:'11', category:'Dental Care', status:'In Treatment', type:'warning' },
];

const Home = () => {
  const [active, setActive] = useState("3");
  const { changeBackground } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);
  return (
    <>
      <div className="form-head d-flex mb-3 mb-md-5 align-items-start flex-wrap justify-content-between">
        <div className="me-auto d-lg-block">
          <h3 className="text-primary font-w600">Welcome to HayaTech</h3>
          <p className="mb-0">Hospital Admin Dashboard Template</p>
        </div>
        <form className="default-search">
          <div className="input-group search-area ms-auto w-100 d-inline-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <span className="input-group-text">
              <i className="flaticon-381-search-2"></i>
            </span>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col-xl-6 col-xxl-12">
          <div className="row">
            {cardWidget.map((item, ind) => (
              <div className="col-xl-6 col-lg-6 col-sm-6" key={ind}>
                <div className={`app-stat card ${item.bgcolor}`}>
                  <div className="card-body  p-4">
                    <div className="media">
                      <span className="me-3">
                        <i className={item.icons}></i>
                      </span>
                      <div className="media-body text-white text-end">
                        <p className="mb-1">{item.title}</p>
                        <h2 className="text-white">{item.digit}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-xl-6 col-xxl-12">
          <div className="row">
            <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="card-title">Recent Patient Predictions</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive ">
                    <table className="table patient-activity">
                      <tbody>
                        {patientTable.map((data, index) => (
                          <tr
                            key={index}
                            className={`${active === data.id ? "active" : " "}`}
                            onMouseEnter={() => setActive(data.id)}
                          >
                            <td>
                              <div className="media align-items-center">
                                <div className="media-body">
                                  <h5 className="mt-0 mb-1">{data.name}</h5>
                                  <p className="mb-0">{data.year} Years Old</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="mb-0">Disease</p>
                              <h5 className="my-0 text-primary">
                                {data.category}
                              </h5>
                            </td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div>
                                  <p className="mb-1">Status</p>
                                  <h5 className={`mt-0 mb-1 text-${data.type}`}>
                                    {data.status}
                                  </h5>
                                  <small>22/03/2023 12:34 AM</small>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
