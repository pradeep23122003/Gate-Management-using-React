import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom/client';
var data;
function Form() { return (
      <div>
  <div className="container-md">
          <h1 className="text-start"></h1>
          <div className="row">
              {/* <!-- Card 1 --> */}
              <div className="col-lg mb-7">
                <div className='container'>
                  <div className="card card-container">
                      {/* <!-- Card 1 content --> */}
                      <div className="card-body">
                          <h5 className="card-title a1">Store Management</h5>
                          <form onSubmit={AddData}>
                          <div className="mb-3">
                                  <label htmlFor="ProductName" className="form-label">Product Name</label>
                                  <input type="text" className="form-control" id="ProductName" placeholder="productname"/>
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="ProductId" className="form-label a2">ProductID</label>
                                  <input type="number" className="form-control a2" id="ProductId" placeholder="ID"/>
                              </div>
                              <div className="mb-3">
                              <label htmlFor="ProductCategory" className="form-label">Product Category</label>
                  <select className="form-select" id="ProductCategory">
                  <option value="0">Select Product Category</option>
                  <option value="1">Machines</option>
                  <option value="2">Accesories</option>
                  <option value="3">Parts and Spares</option>
                 
              </select>
                              </div>
                              <div className="mb-3">
                              <label htmlFor="Brand" className="form-label">Product Brand</label>
                  <select className="form-select" id="Brand">
                  <option value="0">Select Product Brand</option>
                  <option value="1">Brand A</option>
                  <option value="2">Brand B</option>
                  <option value="3">Brand C</option>
                 
              </select>
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="Quantity" className="form-label">Quantity</label>
                                  <input type="number" className="form-control" id="Quantity"/>
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="Price" className="form-label">Price</label>
                                  <input type="number" className="form-control" id="Price" name="price" min="0" max="10000" step="0.01" />
                              </div>
                              <div className="mb-3 ">
                              <input type="checkbox" id="Agree" name="Agree" value="1"/>
                              <label className="" htmlFor="Agree">  Verified & Confirmed </label><br></br>
                              </div>
                              <div className="row">
                              <div className="mb-3 col-2 a3">
                                
                              <button className="btn btn-md btn-success">Submit</button>
                             
                              </div>
                              <div className="mb-3 col-2 a3">
                              <input className="btn btn-md btn-primary" type="reset" onClick={()=>uncheck()} value="Reset"/>
                              </div>
                              <div className='mb-3 col-2 a3'>
                                <button className='btn btn-md btn-danger' onClick={event =>{addjson();check()}}>JSON</button>
                              </div>
                              </div>
                              
                              </form>
      </div>
      </div></div></div>
      </div>
      </div>
      </div>
    );
  }
  export function uncheck(){
    $(":checkbox[value=1]").removeAttr("unchecked",);
  }
  export default Form;
  export function AddData(e)
              {
                 data={
                  ProductName:$('#ProductName').val(),
                  ProductCategory:$('#ProductCategory').val(),
                  Brand:$('#Brand').val(),
                  Quantity:$('#Quantity').val(),
                  Price:$('#Price').val(),
                  Agree:$('#Agree').val(),
                } 
                e.preventDefault();
                console.log(data);
            }
export function addjson(){
     for(var key in data){
        $('#'+key).val(data[key]);
     }
     
}
export function check(){
    $(":checkbox[value=1]").attr("checked","true");
}
 
      
  