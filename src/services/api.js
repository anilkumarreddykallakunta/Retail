import { generateMockData } from '../utils/mockData';

export const fetchSalesData = () => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve(generateMockData());
    }, 500);
  });
};