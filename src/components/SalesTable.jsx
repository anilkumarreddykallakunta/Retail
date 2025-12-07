import React from 'react';

const SalesTable = ({ data }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600 whitespace-nowrap">
          <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase font-semibold text-gray-600">
            <tr>
              <th className="px-4 py-4 min-w-[120px]">Transaction ID</th>
              <th className="px-4 py-4 min-w-[100px]">Date</th>
              <th className="px-4 py-4 min-w-[120px]">Customer ID</th>
              <th className="px-4 py-4 min-w-[150px]">Customer name</th>
              <th className="px-4 py-4 min-w-[150px]">Phone Number</th>
              <th className="px-4 py-4 min-w-[80px]">Gender</th>
              <th className="px-4 py-4 min-w-[60px]">Age</th>
              <th className="px-4 py-4 min-w-[120px]">Product Category</th>
              <th className="px-4 py-4 min-w-[80px]">Quantity</th>
              <th className="px-4 py-4 min-w-[120px]">Total Amount</th>
              <th className="px-4 py-4 min-w-[120px]">Customer Region</th>
              <th className="px-4 py-4 min-w-[120px]">Product ID</th>
              <th className="px-4 py-4 min-w-[150px]">Employee Name</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-4 text-gray-600">{item.transactionId}</td>
                  <td className="px-4 py-4 text-gray-600">{item.date}</td>
                  <td className="px-4 py-4 font-medium text-gray-900">{item.customerId}</td>
                  <td className="px-4 py-4 font-medium text-gray-900">{item.customerName}</td>
                  <td className="px-4 py-4 text-gray-600 flex items-center gap-2">
                    {item.phone} <span className="text-gray-400 cursor-pointer">❐</span>
                  </td>
                  <td className="px-4 py-4 text-gray-600">{item.gender}</td>
                  <td className="px-4 py-4 text-gray-900 font-medium">{item.age}</td>
                  <td className="px-4 py-4 font-bold text-gray-900">{item.category}</td>
                  <td className="px-4 py-4 font-bold text-gray-900">{item.quantity}</td>
                  <td className="px-4 py-4 font-bold text-gray-900">₹ {item.amount.toLocaleString()}</td>
                  <td className="px-4 py-4 font-medium text-gray-900">{item.region}</td>
                  <td className="px-4 py-4 font-medium text-gray-900">{item.productId}</td>
                  <td className="px-4 py-4 font-medium text-gray-900">{item.employeeName}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="13" className="px-6 py-12 text-center text-gray-400">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesTable;