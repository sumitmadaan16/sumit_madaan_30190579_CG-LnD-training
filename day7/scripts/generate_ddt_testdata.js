const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const out = path.join(__dirname, '..', 'test_data', 'ddt_testdata.xlsx');
if (!fs.existsSync(path.dirname(out))) fs.mkdirSync(path.dirname(out), { recursive: true });

const wb = XLSX.utils.book_new();

// LoginData
const loginData = [
  { ScenarioID: 'LGN-001', Username: 'standard_user', Password: 'secret_sauce', ExpectedResult: 'success', ExpectedError: '' },
  { ScenarioID: 'LGN-002', Username: 'invalid_user', Password: 'secret_sauce', ExpectedResult: 'error', ExpectedError: 'Username and password do not match' },
  { ScenarioID: 'LGN-003', Username: 'standard_user', Password: 'wrong_password', ExpectedResult: 'error', ExpectedError: 'Username and password do not match' },
  { ScenarioID: 'LGN-004', Username: 'locked_out_user', Password: 'secret_sauce', ExpectedResult: 'error', ExpectedError: 'locked out' }
];

// InventoryData (constants and sort options)
const inventoryData = [
  { Key: 'backpack', Value: 'Sauce Labs Backpack' },
  { Key: 'bikeLight', Value: 'Sauce Labs Bike Light' },
  { Key: 'boltShirt', Value: 'Sauce Labs Bolt T-Shirt' },
  { Key: 'sort_az', Value: 'az' },
  { Key: 'sort_za', Value: 'za' },
  { Key: 'sort_lohi', Value: 'lohi' },
  { Key: 'sort_hilo', Value: 'hilo' }
];

// CartData
const cartData = [
  { ScenarioID: 'CRT-002', ProductName: 'Sauce Labs Backpack', Quantity: 3, ExpectedResult: 'badge=3' }
];

// CheckoutData
const checkoutData = [
  { ScenarioID: 'CHK-001', FirstName: '', LastName: '', PostalCode: '', ExpectedError: 'First Name is required' },
  { ScenarioID: 'CHK-002', FirstName: '', LastName: 'Lovelace', PostalCode: '12345', ExpectedError: 'First Name is required' },
  { ScenarioID: 'CHK-003', FirstName: 'Ada', LastName: '', PostalCode: '12345', ExpectedError: 'Last Name is required' },
  { ScenarioID: 'CHK-004', FirstName: 'Ada', LastName: 'Lovelace', PostalCode: '', ExpectedError: 'Postal Code is required' },
  { ScenarioID: 'CHK-006', FirstName: 'Ada', LastName: 'Lovelace', PostalCode: '12345', ExpectedResult: 'success' }
];

XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(loginData), 'LoginData');
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(inventoryData), 'InventoryData');
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(cartData), 'CartData');
XLSX.utils.book_append_sheet(wb, XLSX.utils.json_to_sheet(checkoutData), 'CheckoutData');

XLSX.writeFile(wb, out);
console.log('Wrote', out);
