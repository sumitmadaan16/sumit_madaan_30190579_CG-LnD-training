import xlsx from 'xlsx';
import path from 'path';

export type TestRow = { [key: string]: any };

export function loadTestData(filePath?: string, sheetName?: string): TestRow[] {
  const defaultPath = path.join(process.cwd(), 'test_data', 'ddt_testdata.xlxs');
  const fp = filePath || defaultPath;
  const wb = xlsx.readFile(fp);
  const ws = sheetName ? wb.Sheets[sheetName] : wb.Sheets[wb.SheetNames[0]];
  const data: TestRow[] = xlsx.utils.sheet_to_json(ws, { defval: '' });
  return data;
}

export default loadTestData;
