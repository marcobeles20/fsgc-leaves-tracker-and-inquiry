function extract_employees()
{
  const employee_mastersheet_spreadsheet = SpreadsheetApp.openById(employee_mastersheet_spreadsheet_id);
  const employee_mastersheet_sheet = employee_mastersheet_spreadsheet.getSheetByName(employee_mastersheet_sheet_name);

  const extracted_employees = employee_mastersheet_sheet.getRange(
    employee_mastersheet_start_row, 
    1, 
    employee_mastersheet_sheet.getLastRow() - employee_mastersheet_start_row + 1, 
    employee_mastersheet_sheet.getLastColumn()
  ).getValues();

  let employees = [];

  employees = employees.concat(extracted_employees);

  employees = employees.map(function(row) 
  {
    return [
      row[employee_mastersheet_columns['id_number']], 
      row[employee_mastersheet_columns['work_email']], 
      row[employee_mastersheet_columns['full_name']],
      row[employee_mastersheet_columns['employment_type']], 
      row[employee_mastersheet_columns['start_date']]
    ];
  });

  return employees;
}

function import_leaves_tracker_employees()
{
  const employees = extract_employees();

  const leaves_tracker_spreadsheet = SpreadsheetApp.openById(leaves_tracker_spreadsheet_id);
  const leaves_tracker_sheet = leaves_tracker_spreadsheet.getSheetByName(leaves_tracker_sheet_name);

  leaves_tracker_sheet.getRange(
    leaves_tracker_start_row, 
    1,
    employees.length, 
    employees[0].length
  ).setValues(employees);

  leaves_tracker_sheet.getRange(
    leaves_tracker_start_row + employees.length, 
    1, 
    leaves_tracker_sheet.getMaxRows() - (leaves_tracker_start_row + employees.length) + 1,
    employees[0].length
  ).clearContent();
}
