import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom/client';
var details;
var details2;
function In01form(){
    return <div>
       <div className="container">
      <div className="row">
              <div className="col-md-6 mb-5">
          <div className="card card-container">
            <div className="card-body">
                          <h5 className="card-title a1">Invoice 01</h5>
                      
                          <div className="mb-3">
                                  <label htmlFor="InvoiceId" className="form-label a2">Invoice ID</label>
                                  <input type="number" className="form-control a2" id="InvoiceId" placeholder="ex:1001"/>
                              </div>
                              {/* <div className="mb-3">
                                  <label htmlFor="ProductId" className="form-label a2">ProductID</label>
                                  <input type="number" className="form-control a2" id="ProductId" placeholder="ID"/>
                              </div> */}
                              <div className="mb-3">
                              <label htmlFor="BillNo" className="form-label">Bill No</label>
                              <input type="number" className="form-control" id="BillNo" placeholder="ex:30"/>
                  
                  </div>
                              <div className="mb-3">
                              <label htmlFor="LedgerName" className="form-label">Ledger Name</label>
                              <input type="text" className="form-control" id="LedgerName" placeholder="LedgerName"/>
                               
                              </div>
                              <div >
                                <div className='row'>
                                <div className="mb-3 col-3 a3">
                              <button className="btn btn-md btn-success mb-3" onClick={event =>{Invoice1sub()}}>Submit</button>
                              </div>
                              </div>
                        
                             
                              </div>
                            
                              {/* <div className="mb-3 row-3 a3">
                              <input className="btn btn-md btn-primary" type="reset" value="Reset"/>
                              </div>
                              <div className='mb-3 row-3 a3'>
                                <button className='btn btn-md btn-danger'>JSON</button>
                              </div> */}
                              </div>
                              </div>
                              
                              
      </div>
      <div className="col-md-6 mb-5">
          <div className="card card-container">
            <div className="card-body">
                          <h5 className="card-title a1">Invoice 02</h5>
                      
                          <div className="mb-3">
                                  <label htmlFor="Invoice2Id" className="form-label a2">Invoice ID</label>
                                  <input type="number" className="form-control a2" id="Invoice2Id" placeholder="ex:1001"/>
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="Product2Id" className="form-label">ProductID</label>
                                  <input type="number" className="form-control" id="Product2Id" placeholder="ID"/>
                              </div>
                              <div className="mb-3">
                              <label htmlFor="Quantity" className="form-label">Quantity</label>
                              <input type="number" className="form-control" id="Quantity" placeholder="ex:2"/>
                  
                  </div>
                  <div className="mb-3">
                                  <label htmlFor="UnitPrice" className="form-label">Unit Price</label>
                                  <input type="number" className="form-control" id="UnitPrice" name="unit" min="0" max="10000" step="0.01" />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="TotalPrice" className="form-label">Total Price</label>
                                  <input type="number" className="form-control" id="TotalPrice" name="totalprice" min="0" max="10000" step="0.01" />
                              </div>
                              <div >
                                <div className='row'>
                                <div className="mb-3 col-3 a3">
                              <button className="btn btn-md btn-success mb-3" onClick={event =>{Invoice2sub()}}>Submit</button>
                              </div>
                              </div>
                             </div></div></div>
                              </div>
      </div></div></div>
     
      
 
      
}
export default In01form;
export function Invoice1sub()
              {
                 details={
                  InvoiceId:$('#InvoiceId').val(),
                  BillNo:$('#BillNo').val(),
                  LedgerName:$('#LedgerName').val()
                } 
             
                console.log(details);
            }
export function Invoice2sub()
              {
                 details2={
                  Invoice2Id:$('#Invoice2Id').val(),
                  Product2Id:$('#Product2Id').val(),
                  Quantity:$('#Quantity').val(),
                  UnitPrice:$('#UnitPrice').val(),
                  TotalPrice:$('#TotalPrice').val(),
                } 
             
                console.log(details2);
            }