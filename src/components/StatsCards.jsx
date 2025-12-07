import React from 'react';

const StatsCards = ({ totalItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
        <p className="text-gray-500 text-sm font-medium">Total units sold ⓘ</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{totalItems}</p>
      </div>
      <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
        <p className="text-gray-500 text-sm font-medium">Total Amount ⓘ</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">₹89,000 <span className="text-sm font-normal text-gray-500">(19 SRs)</span></p>
      </div>
      <div className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
        <p className="text-gray-500 text-sm font-medium">Total Discount ⓘ</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">₹15,000 <span className="text-sm font-normal text-gray-500">(45 SRs)</span></p>
      </div>
    </div>
  );
};

export default StatsCards;