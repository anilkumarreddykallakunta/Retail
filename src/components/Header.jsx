import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-20">
      <h2 className="text-xl font-semibold text-gray-800">Sales Management System</h2>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input 
            type="text"
            placeholder="Name,Phone no."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-76 px-4 py-2 pl-10 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <span className="absolute left-3 top-1.5 text-gray-400"><SearchOutlinedIcon/></span>
        </div>
       
      </div>
    </header>
  );
};

export default Header;