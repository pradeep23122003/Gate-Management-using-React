import React, { useState } from 'react';
import axios from 'axios'; 
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import $ from 'jquery';

var data;
function PasswordForm() {
  const [Module, setModule] = useState('');
  const [Action, setAction] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [openDialog, setOpenDialog] = useState(false); 
  const [showPassword, setShowPassword] = useState(false); 
  
  
  



  // const handleSubmit = async (e) => {



  //   try {
  //     const response = await axios.post('https://192.168.137.144/api/set-password', {
  //       formType,
  //       action,
  //       password,
  //     });
      

  //     setMessage(`Password set for ${formType} - ${action}.`);
  //     setOpenDialog(true); 
  //   } catch (error) {
  //     setMessage('An error occurred. Please try again.');
  //   }
  // };

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
           
              <label htmlFor="Module" className='c3'>Select Form:</label>
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

              <label htmlFor="Action" className='c3'>Select Action:</label>
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
              <input type="number" className="form-control lab" id="UserID"/>
              <label htmlFor="Password" className='c3'>Enter Password:</label>
              <div className="input-group">
                <input
                  className='form-input c3 c2'
                  type={showPassword ? "text" : "password"}
                  id="Password"
                  value={password}
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

              <button className="btn btn-primary c2" type="submit" onClick={()=>{get();ajax_();}}>Set Password</button>


            {message && <p>{message}</p>}

            
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
  
  console.log(data);
  
}
export function ajax_(){
  
  const Details={
    Password:get.Password,
    UserID:get.UserID,
    Module:get.Module,
    Action:get.Action,
   
  }
  
   
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
}