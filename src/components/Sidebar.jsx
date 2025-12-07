import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import PausePresentationOutlinedIcon from '@mui/icons-material/PausePresentationOutlined';


import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';


import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';

const Sidebar = () => {
  // State to manage open/closed menus
  // Defaulting 'services' to true so it appears open on load
  const [openMenus, setOpenMenus] = useState({
    services: true,
    invoices: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="w-64 bg-gray-50 h-screen border-r border-gray-200 hidden lg:flex flex-col font-sans">
      {/* User Profile Section */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">V</span>
        </div>
        <div>
          <h1 className="font-bold text-gray-900">Vault</h1>
          <p className="text-xs text-gray-500">Anurag Yadav</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        
        {/* Standard Links */}
        <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
          <AccountCircleIcon fontSize="small" /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
          <Person2OutlinedIcon fontSize="small" /> Nexus
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100">
          <PlayCircleOutlineOutlinedIcon fontSize="small" /> Intake
        </a>

        {/* --- Services Dropdown --- */}
        <div>
          <button 
            onClick={() => toggleMenu('services')}
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <ClassOutlinedIcon fontSize="small" /> Services
            </div>
            {openMenus.services ? <KeyboardArrowUpIcon fontSize="small"/> : <KeyboardArrowDownIcon fontSize="small"/>}
          </button>

          {/* Sub-menu items */}
          {openMenus.services && (
            <div className="pl-10 space-y-1 mt-1">
              <a href="#" className="block px-3 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md">
             <SlideshowOutlinedIcon/>    Pre-active
              </a>
             


  <a href="#" className="block px-3 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md">
            <AnalyticsOutlinedIcon/>  Active
              </a>

              <a href="#" className="block px-3 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md">
               <BlockOutlinedIcon/> Blocked
              </a>
              <a href="#" className="block px-3 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md">
                <CheckCircleOutlineOutlinedIcon/> Closed
              </a>
            </div>
          )}
        </div>

        {/* --- Invoices Dropdown --- */}
        <div>
          <button 
            onClick={() => toggleMenu('invoices')}
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <div className="flex items-center gap-3">
              <DescriptionOutlinedIcon fontSize="small" />  Invoices
            </div>
             {openMenus.invoices ? <KeyboardArrowUpIcon fontSize="small"/> : <KeyboardArrowDownIcon fontSize="small"/>}
          </button>

          {/* Sub-menu items */}
          {openMenus.invoices && (
            <div className="pl-10 space-y-1 mt-1">
              
  <a href="#" className="block px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md">
               <InsertDriveFileOutlinedIcon/>  Proforma Invoices {/* Highlighted as current page */}
              </a>

              <a href="#" className="block px-3 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md">
              <FileCopyOutlinedIcon/>  Final Invoices
              </a>
            </div>
          )}
        </div>

      </nav>
    </div>
  );
};

export default Sidebar;