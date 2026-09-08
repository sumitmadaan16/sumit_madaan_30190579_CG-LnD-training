import path from 'path';
import XLSX from 'xlsx';

const dataPath = path.join(__dirname, '..', '..', 'test_data', 'ddt_testdata.xlsx');
let workbook: XLSX.WorkBook | null = null;

function load() {
  if (!workbook) workbook = XLSX.readFile(dataPath);
}

export function readSheet(sheetName: string): any[] {
  load();
  const sheet = workbook?.Sheets?.[sheetName];
  if (!sheet) return [];
  return XLSX.utils.sheet_to_json(sheet, { defval: '' });
}

export function findRow(sheetName: string, scenarioId: string): any | undefined {
  const rows = readSheet(sheetName);
  return rows.find((r: any) => String(r.ScenarioID) === String(scenarioId));
}

export function getConstant(key: string): string {
  const rows = readSheet('InventoryData');
  const found = rows.find((r: any) => String(r.Key) === String(key));
  return found?.Value || '';
}

export default { readSheet, findRow, getConstant };
