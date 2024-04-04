
import React, { useEffect } from 'react';
import $ from 'jquery';

function In02table() {
  useEffect(() => {
    // Initialize DataTable in the useEffect hook to ensure the component has mounted
    $('#example').DataTable({
      ajax: {
        url: './data.json',
        dataSrc: function (json) {
          return json.contacts;
        },
      },
      columns: [
        { mData: 'ProductName' },
        { mData: 'ProductID' },
        { mData: 'Brand' },
        { mData: 'ProductCategory' },
        { mData: 'BatchID' },
        { mData: 'Warranty' },
        { mData: 'Manufacturer' },
        { mData: 'Dealer' },
        { mData: 'ExpiryDate' },
      ],
    });
  }, []); // The empty dependency array ensures this effect runs only once after mounting

  return (
    <div>
      {/* The table element with the ID "example" where the DataTable will be rendered */}
      <table id="example" className="display" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product ID</th>
            <th>Brand</th>
            <th>Product Category</th>
            <th>Batch ID</th>
            <th>Warranty</th>
            <th>Manufacturer</th>
            <th>Dealer</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default In02table;
