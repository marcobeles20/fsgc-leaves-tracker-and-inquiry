function extract_entities()
{
  const hr_mastersheet_spreadsheet = SpreadsheetApp.openById(hr_mastersheet_spreadsheet_id);
  const hr_mastersheet_sheets = hr_mastersheet_spreadsheet.getSheets();

  const entities = [];

  for(const i in hr_mastersheet_sheets)
  {
    const entity = hr_mastersheet_sheets[i].getName();

    if(hr_mastersheet_excluded_sheets.includes(entity))
      continue;

    entities.push(entity);
  }

  return entities;
}

function extract_employees(entities)
{
  const hr_mastersheet_spreadsheet = SpreadsheetApp.openById(hr_mastersheet_spreadsheet_id);

  let employees = [];

  for(const i in entities)
  {
    const entity_sheet = hr_mastersheet_spreadsheet.getSheetByName(entities[i]);

    const entity_employees = entity_sheet.getRange(
      hr_mastersheet_start_row, 
      1, 
      entity_sheet.getLastRow() - hr_mastersheet_start_row + 1, 
      entity_sheet.getLastColumn()
    ).getValues();

    employees = employees.concat(entity_employees);
  }

  employees = employees.map(function(row) 
  {
    return [
      row[hr_mastersheet_columns['id_number']], 
      row[hr_mastersheet_columns['work_email']], 
      row[hr_mastersheet_columns['first_name']], 
      row[hr_mastersheet_columns['middle_name']],
      row[hr_mastersheet_columns['last_name']],
      row[hr_mastersheet_columns['employment_type']], 
      row[hr_mastersheet_columns['start_date']]
    ];
  });

  return employees;
}

function import_leaves_tracker_employees()
{
  const entities = extract_entities();
  const employees = extract_employees(entities);

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