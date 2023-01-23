import React from "react";
import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import axios from "axios";

const Dashboard = () => {
  const [colum, setColum] = useState([
    { field: "id", filter: "agNumberColumnFilter" },
    { field: "firstName", filter: true },
    { field: "lastName", filter: true },
    { field: "email", filter: true, sortable: true },
    { field: "created", filter: true },
    { field: "isVerified", filter: true },
    { field: "role", filter: true },
  ]);
  const [row, setrow] = useState();
  useEffect(() => {
     let data = localStorage.getItem("EMSdata")
     let p = JSON.parse(data);
     axios.get("http://localhost:4000/accounts",
     {     headers: {
             "Authorization": "Bearer " + p?.jwtToken
          }
     }).then(e => {
         setrow(e.data)
     }).catch(
         y => {
             console.log(y);
         }
     )
  }, []);
  const myNav = useNavigate();

  const myLogout = () => {
    localStorage.removeItem("userInfo");
    myNav("/");
  };


  return (
    <div className="ag-theme-alpine" style={{ width: 1400, height: 650 }}>
      <button onClick={myLogout}>Log Out</button>
      <AgGridReact rowData={row} columnDefs={colum}></AgGridReact>
    </div>
  );
};

export default Dashboard;
