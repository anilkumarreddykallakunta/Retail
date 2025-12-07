import React from 'react';

const FilterBar = ({ filters, setFilters, sortConfig, setSortConfig }) => {
  const handleFilterChange = (key, value) => {
    // If value is empty string, we might want to remove the key or set it to empty
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSortChange = (e) => {
    setSortConfig(e.target.value);
  };

  return (
    <div className="flex flex-wrap gap-3 py-4">
      
      {/* 1. Region Filter */}
      <select 
        className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:border-blue-500 outline-none cursor-pointer"
        value={filters.region || ''}
        onChange={(e) => handleFilterChange('region', e.target.value)}
      >
        <option value="">Customer Regions</option>
        <option value="North">North</option>
        <option value="South">South</option>
        <option value="East">East</option>
        <option value="West">West</option>
      </select>

      {/* 2. Gender Filter (Fixed Key: gender) */}
      <select 
        className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:border-blue-500 outline-none cursor-pointer"
        value={filters.gender || ''}
        onChange={(e) => handleFilterChange('gender', e.target.value)}
      >
        <option value="">Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      {/* 3. Age Filter (Fixed Key: age) & Fixed Option Values */}
      <select 
        className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:border-blue-500 outline-none cursor-pointer"
        value={filters.age || ''}
        onChange={(e) => handleFilterChange('age', e.target.value)}
      >
        <option value="">Age Range</option>
        <option value="25">25</option>
        <option value="35">35</option>
        <option value="45">45</option>
      </select>

      {/* 4. Product Category Filter (Key: category) */}
      <select 
        className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:border-blue-500 outline-none cursor-pointer"
        value={filters.category || ''}
        onChange={(e) => handleFilterChange('category', e.target.value)}
      >
        <option value="">Product Category</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Home">Home</option>
      </select>

      {/* 5. Sort By (Fixed: Uses sortConfig) */}
      {/* I converted your 'Date' dropdown to a Sort selector since that makes more sense here */}
      <select 
        className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:border-blue-500 outline-none cursor-pointer"
        value={sortConfig || ''}
        onChange={handleSortChange}
      >
        <option value="">Tags</option>
        <option value="tshirt">T-shirt</option>
        <option value="shirt">shirt</option>
        <option value="pants">Pants</option>
      
      </select>
<select 
        className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:border-blue-500 outline-none cursor-pointer"
        value={sortConfig || ''}
        onChange={handleSortChange}
      >
        <option value="">Payment Method</option>
        <option value="cash">cash</option>
        <option value="upi">UPI</option>
        <option value="emi">EMI</option>
      
      </select>
     
    </div>
  );
};

export default FilterBar;