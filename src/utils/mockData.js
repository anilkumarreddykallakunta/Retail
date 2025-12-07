export const generateMockData = () => {
  const data = [];
  const regions = ['North', 'South', 'East', 'West'];
  const categories = ['Clothing', 'Electronics', 'Home', 'Beauty'];
  const genders = ['Male', 'Female'];
  const employees = ['Harsh Agrawal', 'Anjali Singh', 'Rohan Gupta', 'Priya Sharma'];
  
  for (let i = 1; i <= 50; i++) {
    data.push({
      transactionId: `12345${67 + i}`, 
      date: `2023-09-${(i % 30) + 1}`,
      customerId: `CUST120${10 + (i % 9)}`,
      customerName: i % 2 === 0 ? "Neha Yadav" : "Rahul Sharma",
      phone: `+91 91234567${i < 10 ? '0' + i : i}`,
      gender: genders[i % 2],
      age: 20 + (i % 30),
      region: regions[i % 4],
      productId: `PROD00${(i % 5) + 1}`,
      category: categories[i % 4],
      quantity: `0${(i % 3) + 1}`,
      amount: 1000 * ((i % 3) + 1),
      employeeName: employees[i % 4],
      paymentMethod: i % 2 === 0 ? "Credit Card" : "UPI",
    });
  }
  return data;
};