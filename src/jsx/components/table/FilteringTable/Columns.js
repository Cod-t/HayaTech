import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import Swal from "sweetalert2";

const svg1 = (
  <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <rect x="0" y="0" width="24" height="24"></rect>
      <circle fill="#000000" cx="5" cy="12" r="2"></circle>
      <circle fill="#000000" cx="12" cy="12" r="2"></circle>
      <circle fill="#000000" cx="19" cy="12" r="2"></circle>
    </g>
  </svg>
);
export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
    //disableFilters: true,
  },
  {
    Header: "Name",
    accessor: "name",
    Filter: ColumnFilter,
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
    Filter: ColumnFilter,
  },
  {
    Header: "Gender",
    Footer: "Gender",
    accessor: "gender",
    Filter: ColumnFilter,
  },
  {
    Header: "Race",
    Footer: "Race",
    accessor: "race",
    Filter: ColumnFilter,
  },
  {
    Header: "Status",
    Footer: "Status",
    accessor: "status",
    Filter: ColumnFilter,
  },
  {
    Header: "Action",
    Footer: "Action",
    accessor: "action",
    Cell: ({ row }) => {
      const { id } = row.original;
      return (
        <Dropdown>
          <Dropdown.Toggle variant="success" className="light sharp i-false">
            {svg1}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to={`../predict?id=${id}`}>Predict</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={`../edit-profile?id=${id}`}>Edit</Link>
            </Dropdown.Item>
            <div className="sweetalert">
              <Dropdown.Item
                onClick={() =>
                  Swal.fire({
                    title: "Are you sure for delete ?",
                    text: "Once deleted, you will not be able to recover the DATA!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#dd6b55",
                    cancelButtonColor: "#aaa",
                    confirmButtonText: "Yes, delete it!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                      );
                    }
                  })
                }
                className="btn btn-warning btn sweet-confirm"
              >
                Delete
              </Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      );
    },
    disableFilters: true,
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
  },
  {
    Header: "Info",
    Footer: "Info",
  },
];
