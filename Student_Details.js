import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

import $ from 'jquery';
var data1;
function Student_Details() {
   
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [RegNo, setRegNo] = useState('');
  const [Dept, setDept] = useState('');
  const [Year, setYear] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const [tableData, setTableData] = useState([]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const Details={
        FirstName,
        LastName,
        RegNo,
        Dept,
        Year,
        MobileNo,}
      $.ajax({
        url: 'http://192.168.29.210:5000/InsertStudent', 
        method: 'POST',
        dataType: 'json',
        data: Details,      
        success: function(response) {
          console.log('Data inserted successfully:', response.message);
        },
        error: function(error) {
          console.error('Error inserting data:', error);
        }});

    const newDataRow = {
      FirstName: FirstName,
      LastName: LastName,
      RegNo: RegNo,
      Dept: Dept,
      Year: Year,
      MobileNo: MobileNo,
    };

    
    setTableData([...tableData, newDataRow]);

  
    setFirstName('');
    setLastName('');
    setRegNo('');
    setDept('');
    setYear('');
    setMobileNo('');
  };

  const columns = [
    {
      name: 'First Name',
      selector: (row) => row.FirstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row) => row.LastName,
      sortable: true,
    },
    {
      name: 'Registration No',
      selector: (row) => row.RegNo,
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.Dept,
      sortable: true,
    },
    {
      name: 'Year',
      selector: (row) => row.Year,
      sortable: true,
    },
    {
      name: 'Mobile No',
      selector: (row) => row.MobileNo,
      sortable: true,
    },
  ];

  return (
    <div>
      <div className="container">
        <h4 className="heading">Student Details</h4>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xxl-4 col-md-4">
              <label htmlFor="FirstName" className="form-label c9">
                First Name:
              </label>
              <input
                type="text"
                className="form-control c10"
                id="FirstName"
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                required
              />
            </div>
            <div className="col-xxl-4 col-md-4">
              <label htmlFor="LastName" className="form-label c9">
                Last Name:
              </label>
              <input
                type="text"
                className="form-control c10"
                id="LastName"
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name"
                required
              />
            </div>
            <div className="col-xxl-4 col-md-4">
              <label htmlFor="RegNo" className="form-label reg">
                Registration No:
              </label>
              <input
                type="number"
                className="form-control reginput"
                id="RegNo"
                value={RegNo}
                onChange={(e) => setRegNo(e.target.value)}
                placeholder="ex:9213xxxxxxxx"
                required
              />
            </div>
          </div>
          <div className="row dept">
            <div className="col-xxl-2 col-md-2">
              <label htmlFor="Dept" className="form-label dept">
                Department:
              </label>
            </div>
            <div className="col-xxl-5 col-md-5">
              <select
                className="form-select select"
                id="Dept"
                value={Dept}
                onChange={(e) => setDept(e.target.value)}
                required
              >
                <option value="0">Select Department</option>
                <option value="1">CSE</option>
                <option value="2">IT</option>
                <option value="3">MECH</option>
              </select>
            </div>
          </div>
          <div className="row dept">
            <div className="col-xxl-2 col-md-2">
              <label htmlFor="Year" className="form-label reg">
                Year:
              </label>
            </div>
            <div className="col-xxl-5 col-md-5">
              <select
                className="form-select select"
                id="Year"
                value={Year}
                onChange={(e) => setYear(e.target.value)}
                required
              >
                <option value="0">Select Current Year</option>
                <option value="1">I</option>
                <option value="2">II</option>
                <option value="3">III</option>
                <option value="4">IV</option>
              </select>
            </div>
          </div>
          <div className="row dept">
            <div className="col-xxl-2 col-md-2">
              <label htmlFor="MobileNo" className="form-label reg">
                Mobile No:
              </label>
            </div>
            <div className="col-xxl-5 col-md-5">
              <input
                type="number"
                className="form-control mob"
                id="MobileNo"
                value={MobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                required
              />
              </div>
              <div className="col-xxl-8 col-md">
            <button className="btn btn-success stbtn" onClick={print()}  type="submit">
              Submit
            </button>
          </div>
            
          </div>
          
        </form>
<div className='datatable'>
<DataTable
        
        title="Student Details"
        columns={columns}
        data={tableData}
        pagination
        selectableRows
        
        
      />
        </div>
      </div>
    </div>
  );
}

export default Student_Details;
export function print(){
    data1={
      FirstName:$('#FirstName').val(),
      LastName:$('#LastName').val(),
      Dept:$('#Dept').val(),
      Year:$('#Year').val(),
      MobileNO:$('#MobileNo').val(),
     
    
  }
  console.log(data1);
  }
