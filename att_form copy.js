import $ from 'jquery';
import React, { useState } from 'react';
var details;
var details2;
function Attform() {

  const [tableData, setTableData] = useState([]);
  const [rowData, setRowData] = useState({
    ProductID: '',
    Quantity: '',
    UnitPrice: '',
    TotalPrice: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRowData({ ...rowData, [name]: value });
  };

  const handleAddRow = () => {
    setTableData([...tableData, rowData]);
    setRowData({
      ProductID: '',
      Quantity: '',
      UnitPrice: '',
      TotalPrice: '',
    });
  };

  return (
    <div>
      <div className="container">
        <h4 className="text-start"></h4>
        <div className="row">
          <div className="col">
            <div className="card card-container a6">
              <div className="card-body">
                <h5 className="card-title a1">Invoice 01</h5>
                <form className="well form-horizontal" action=" " method="post" id="Invoice01">
                  <div className="form-group">
                  <div className="form-group">
                  <label className="col-md-4 control-label a2" htmlFor="Invoice1ID">
                      Invoice ID
                    </label>
                    <input
                      type="number"
                      className="form-input a2"
                      id="Invoice1ID"
                      name="InvoiceID"
                    //   placeholder="ex:1001"
                    //   value={rowData.ProductID}
                    //   onChange={handleInputChange}
                    />
                  </div>
                    <label className="col-md-4 control-label" htmlFor="BillNo">
                      Bill No
                    </label>
                    <input type="number" className="form-input" id="BillNo" placeholder="ex:30" />
                  </div>
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="LedgerName">
                      Ledger Name
                    </label>
                    <input type="text" className="form-input" id="LedgerName" placeholder="LedgerName" />
                  </div>
                </form>
                <button type="submit" className="btn btn-primary mb-2 a8" onClick={Invoice1sub}>
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-container">
              <div className="card-body">
                <h5 className="card-title a1">Invoice 02</h5>
                <form className="well form-horizontal" action=" " method="post" id="Invoice02">
                  <div className="form-group">
                  <label className="col-md-4 control-label a2" htmlFor="InvoiceID">
                      Invoice ID
                    </label>
                    <input
                      type="number"
                      className="form-input a2"
                      id="InvoiceID"
                      name="InvoiceID"
                    //   placeholder="ex:1001"
                    //   value={rowData.ProductID}
                    //   onChange={handleInputChange}
                    />
                    <label className="col-md-4 control-label" htmlFor="ProductId">
                      Product ID
                    </label>
                    <input
                      type="number"
                      className="form-input"
                      id="ProductId"
                      name="ProductID"
                      placeholder="ex:1001"
                      value={rowData.ProductID}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="Quantity">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="form-input"
                      id="Quantity"
                      name="Quantity"
                      placeholder="ex:2"
                      value={rowData.Quantity}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="UnitPrice">
                      Unit Price
                    </label>
                    <input
                      type="number"
                      className="form-input"
                      id="UnitPrice"
                      name="UnitPrice"
                      placeholder="Price"
                      value={rowData.UnitPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="TotalPrice">
                      Total Price
                    </label>
                    <input
                      type="number"
                      className="form-input"
                      id="TotalPrice"
                      name="TotalPrice"
                      placeholder="TotalPrice"
                      value={rowData.TotalPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
                <button type="submit" className="btn btn-primary mb-2" onClick={()=>{Invoice2sub();
                    handleAddRow();}}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card card-container a7">
            <div className="card-body">
              <h5 className="card-title a1">Table</h5>
              <table>
                <thead>
                  <tr>
                    <th>ProductID</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.ProductID}</td>
                      <td>{row.Quantity}</td>
                      <td>{row.UnitPrice}</td>
                      <td>{row.TotalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attform;
export function Invoice1sub()
              {
                 details={
                  Invoice1Id:$('#Invoice1Id').val(),
                  BillNo:$('#BillNo').val(),
                  LedgerName:$('#LedgerName').val()
                } 
             
                console.log(details);
            }
export function Invoice2sub()
              {
                 details2={
                  InvoiceID:$('#InvoiceId').val(),
                  ProductId:$('#ProductId').val(),
                  Quantity:$('#Quantity').val(),
                  UnitPrice:$('#UnitPrice').val(),
                  TotalPrice:$('#TotalPrice').val(),
                } 
             
                console.log(details2);
            }
// isNaN(product) ? '' : product