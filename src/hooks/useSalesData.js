import { useState, useMemo } from 'react';

export const useSalesData = (data) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    region: '',
    category: '',
  });
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const processedData = useMemo(() => {
    let result = [...data];

    // Search
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(item => 
        item.customerName.toLowerCase().includes(lowerQuery) ||
        item.phone.includes(lowerQuery)
      );
    }

    // Filter
    if (filters.region) result = result.filter(item => item.region === filters.region);
    if (filters.category) result = result.filter(item => item.category === filters.category);

    // Sort
    result.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [data, searchQuery, filters, sortConfig]);

  const totalPages = Math.ceil(processedData.length / itemsPerPage);
  const paginatedData = processedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    searchQuery, setSearchQuery,
    filters, setFilters,
    sortConfig, setSortConfig,
    currentPage, setCurrentPage,
    paginatedData, totalPages,
    totalItems: processedData.length
  };
};