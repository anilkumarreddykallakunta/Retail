import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import StatsCards from '../components/StatsCards';
import FilterBar from '../components/FilterBar';
import SalesTable from '../components/SalesTable';
import Pagination from '../components/Pagination';
import { useSalesData } from '../hooks/useSalesData';
import { fetchSalesData } from '../services/api';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    fetchSalesData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  // Hook handles Logic
  const {
    searchQuery, setSearchQuery,
    filters, setFilters,
    sortConfig, setSortConfig,
    currentPage, setCurrentPage,
    paginatedData, totalPages, totalItems
  } = useSalesData(data);

  return (
    <div className="flex h-screen bg-white font-sans">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-[1600px] mx-auto">
            
            {/* Filter Bar */}
            <div className="mb-4">
               <FilterBar 
                 filters={filters} 
                 setFilters={setFilters} 
                 sortConfig={sortConfig}
                 setSortConfig={setSortConfig}
               />
            </div>

            {/* Statistics */}
            <StatsCards totalItems={totalItems} />

            {/* Data Table */}
            {loading ? (
              <div className="text-center py-20 text-gray-500">Loading sales data...</div>
            ) : (
              <SalesTable data={paginatedData} />
            )}

            {/* Pagination */}
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              setCurrentPage={setCurrentPage} 
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;