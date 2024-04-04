import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Student_Details() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [RegNo, setRegNo] = useState('');
  const [Dept, setDept] = useState('');
  const [Year, setYear] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const [tableData, setTableData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [Password, setPassword] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
    {
      cell: (row) => (
        <div className='col'>
          {editingIndex === row.id ? (
            <>
              <button className='btn btn-primary save' onClick={() => handleSaveEdit(row.id)}>
                Save
              </button>
              <button className='btn btn-danger cancel' onClick={handleCancelEdit}>
                Cancel
              </button>
            </>
          ) : (
            <button className='btn btn-primary ' onClick={() => handleEdit(row)}>
              Edit
            </button>
          )}
        </div>
      ),
      allowOverflow: true,
      button: true,
    },
  ];
  

  const initialFormState = {
    FirstName: '',
    LastName: '',
    RegNo: '',
    Dept: '',
    Year: '',
    MobileNo: '',
  };
  const [formState, setFormState] = useState(initialFormState);

  const handleEdit = (row) => {
    setEditingIndex(row.id);
    setFormState(row);
    setShowEditModal(true);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setFormState(initialFormState);
    setShowEditModal(false);
    setPassword('');
  };
  const handleCancelSubmit = () => {
    setEditingIndex(null);
    setFormState(initialFormState);
    setShowEditModal(false);
    setPassword('');
    setFirstName('');
    setLastName('');
    setDept('');
    setYear('');
    setMobileNo('');
  };

  const handleSaveEdit = (rowId) => {
    const updatedData = tableData.map((row) =>
      row.id === rowId ? formState : row
    );
    setTableData(updatedData);
    setEditingIndex(null);
    setFormState(initialFormState);
    setShowEditModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSubmitModal(true); 
  };

  const handleVerifySubmit = (e) => {
    e.preventDefault();
    const newRow = {
      id: Date.now(),
      ...formState,
    };
    setTableData([...tableData, newRow]);
    setFormState(initialFormState);
    setShowSubmitModal(false);
    setPassword('');
  };
  const handleVerifyEdit = () => {
  
  const updatedData = tableData.map((row) =>
    row.id === formState.id ? formState : row
  );
  setTableData(updatedData);
  setShowEditModal(false);
  setPassword('');
};
  

  return (
    <div>
      <div className='container'>
        <h4 className='heading'>Student Details</h4>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-xxl-4 col-md-4'>
              <label htmlFor='FirstName' className='form-label c9'>
                First Name:
              </label>
              <input
                type='text'
                className='form-control c10'
                id='FirstName'
                value={formState.FirstName}
                onChange={(e) =>
                  setFormState({ ...formState, FirstName: e.target.value })
                }
                placeholder='First name'
                required
              />
            </div>
            <div className='col-xxl-4 col-md-4'>
              <label htmlFor='LastName' className='form-label c9'>
                Last Name:
              </label>
              <input
                type='text'
                className='form-control c10'
                id='LastName'
                value={formState.LastName}
                onChange={(e) =>
                  setFormState({ ...formState, LastName: e.target.value })
                }
                placeholder='Last name'
                required
              />
            </div>
            <div className='col-xxl-4 col-md-4'>
              <label htmlFor='RegNo' className='form-label reg'>
                Registration No:
              </label>
              <input
                type='number'
                className='form-control reginput'
                id='RegNo'
                value={formState.RegNo}
                onChange={(e) =>
                  setFormState({ ...formState, RegNo: e.target.value })
                }
                placeholder='ex:9213xxxxxxxx'
                required
              />
            </div>
          </div>
          <div className='row dept'>
            <div className='col-xxl-2 col-md-2'>
              <label htmlFor='Dept' className='form-label dept'>
                Department:
              </label>
            </div>
            <div className='col-xxl-5 col-md-5'>
              <select
                className='form-select select'
                id='Dept'
                value={formState.Dept}
                onChange={(e) =>
                  setFormState({ ...formState, Dept: e.target.value })
                }
                required
              >
                <option value='0'>Select Department</option>
                <option value='CSE'>CSE</option>
                <option value='IT'>IT</option>
                <option value='MECH'>MECH</option>
              </select>
            </div>
          </div>
          <div className='row dept'>
            <div className='col-xxl-2 col-md-2'>
              <label htmlFor='Year' className='form-label reg'>
                Year:
              </label>
            </div>
            <div className='col-xxl-5 col-md-5'>
              <select
                className='form-select select'
                id='Year'
                value={formState.Year}
                onChange={(e) =>
                  setFormState({ ...formState, Year: e.target.value })
                }
                required
              >
                <option value='0'>Select Current Year</option>
                <option value='I'>I</option>
                <option value='II'>II</option>
                <option value='III'>III</option>
                <option value='IV'>IV</option>
              </select>
            </div>
          </div>
          <div className='row dept'>
            <div className='col-xxl-2 col-md-2'>
              <label htmlFor='MobileNo' className='form-label reg'>
                Mobile No:
              </label>
            </div>
            <div className='col-xxl-5 col-md-5'>
              <input
                type='number'
                className='form-control mob'
                id='MobileNo'
                value={formState.MobileNo}
                onChange={(e) =>
                  setFormState({ ...formState, MobileNo: e.target.value })
                }
                required
              />
            </div>
            <div className='col-xxl-8 col-md'>
              {editingIndex !== null ? (
                <button className='btn a2'></button>
              ) : (
                <button className='btn btn-success stbtn' type='submit'>
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
        <div className='datatable'>
          <DataTable
            title='Student Details'
            columns={columns}
            data={tableData}
            pagination
          />
        </div>
        <Modal show={showEditModal} onHide={handleCancelEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label className='form-label' htmlFor='UserID'>
              UserID
            </label>
            <input type='number' className='form-control' id='UserID' />
            <label htmlFor='Password'>Password</label>
            <div className='input-group'>
              <input
                className='form-input passinput'
                type={showPassword ? 'text' : 'password'}
                id='Password'
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type='button'
                className='btn btn-outline-dark showbtn'
                onClick={handleTogglePassword}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleCancelEdit}>
              Close
            </Button>
            <Button variant='primary' onClick={() => {handleVerifyEdit();setShowEditModal(false);}}>
              Verify
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={showSubmitModal} onHide={() => setShowSubmitModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Submit Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <label className='form-label' htmlFor='UserID'>
              UserID
            </label>
            <input type='number' className='form-control' id='UserID' />
            <label htmlFor='Password'>Password</label>
            <div className='input-group'>
              <input
                className='form-input passinput'
                type={showPassword ? 'text' : 'password'}
                id='Password'
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type='button'
                className='btn btn-outline-dark showbtn'
                onClick={handleTogglePassword}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => {handleCancelSubmit(); setShowSubmitModal(false); }}>
              Cancel
            </Button>
            <Button variant='primary' onClick={handleVerifySubmit}>
              Verify
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Student_Details;
