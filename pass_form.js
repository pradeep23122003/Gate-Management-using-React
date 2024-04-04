import React, { useState } from 'react';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import $ from 'jquery';
var data1;
var data;
function PasswordForm() {
  const [Module, setModule] = useState('');
  const [Action, setAction] = useState('');
  const [UserID, setUserID] = useState('');
  const [Password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [openDialog, setOpenDialog] = useState(false); 
  const [showPassword, setShowPassword] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    
      const Details={
        Password,
        UserID,
        Module,
        Action,}
      $.ajax({
        url: 'http://192.168.137.144:5000/InsertPassword', 
        method: 'POST',
        dataType: 'json',
        data: Details,      
        success: function(response) {
          console.log('Data inserted successfully:', response.message);
        },
        error: function(error) {
          console.error('Error inserting data:', error);    
        }
      });
    setOpenDialog(true);
    } 


  const handleCloseDialog = () => {
    setOpenDialog(false); 
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div>
      <div className="container-sm">
        <h4 className="text-start heading">Password Management</h4>
        <div className="card card-container a6">
          <div className="card-body">
           <form onSubmit={handleSubmit}>
              <label htmlFor="Module">Select Form:</label>
              <select
                className='form-select'
                id="Module"
                value={Module}
                onChange={(e) => setModule(e.target.value)}
                required
              >
                <option value="">Select Form</option>
                <option value="Student Details">Student Details</option>
                <option value="Product Details">Product Details</option>
               
              </select>

              <label htmlFor="Action">Select Action:</label>
              <select
                className='form-select'
                id="Action"
                value={Action}
                onChange={(e) => setAction(e.target.value)}
                required
              >
                <option value="">Select Action</option>
                <option value="Create">Create</option>
                <option value="Update">Update</option>
                <option value="Delete">Delete</option>
                
              </select>
              <label htmlFor="UserID" className="form-label c3">User ID:</label>
              <input type="number" className="form-control lab" id="UserID" value={UserID} onChange={(e)=>setUserID(e.target.value)} required/>

              <label htmlFor="Password" className='c3'>Enter Password:</label>
              <div className="input-group">
                <input
                  className='form-input c3 c2'
                  type={showPassword ? "text" : "password"}
                  id="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="btn btn-secondary button1"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <button className="btn btn-primary c2" type="submit" onClick={()=>{  print();get()}}>Set Password</button>
          
            <div className='message'>
            {message && <p>{message}</p>}
            </div>
            </form>

            <Dialog open={openDialog} onClose={handleCloseDialog}>
              <DialogTitle>Password Set</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Password has been set for {Module} - {Action}.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <button onClick={handleCloseDialog} className="btn btn-primary c2">
                  Close
                </button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordForm;
export function get(){
  data={
    UserID:$('#UserID').val(),
    Module:$('#Module').val(),
    Action:$('#Action').val(),
    Password:$('#Password').val(),
   
  } 
  
 
  
}
export function print(){
  data1={
    UserID:$('#UserID').val(),
    Module:$('#Module').val(),
    Action:$('#Action').val(),
    Password:$('#Password').val(),
   
  
}
console.log(data1);
}