import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, Dropdown, ButtonGroup } from "react-bootstrap";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
    //disableFilters: true,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Email Id",
    Footer: "Email Id",
    accessor: "email",
    Filter: ColumnFilter,
  },
  {
    Header: "Date of  Birth",
    Footer: "Date of  Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/mm/yyyy");
    },
    Filter: ColumnFilter,
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    Filter: ColumnFilter,
  },
  {
    Header: "Action",
    Footer: "Action",
    accessor: "action",
    Cell: ({ row }) => {
      const { id } = row.original;
      return (
        <ButtonGroup>
          <Dropdown>
            <Dropdown.Toggle className="me-2" variant="success">
              Actions
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to={`../services/predict?id=${id}`}>Predict</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={`../edit-profile?id=${id}`}>Edit</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={`../services/predict?id=${id}`}>Delete</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
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
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of  Birth",
        Footer: "Date of  Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
