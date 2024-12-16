/*
  WARNING: DO NOT MAKE CHANGES DIRECTLY IN THE GOOGLE APPS SCRIPT EDITOR.
  
  This project is managed through a GitHub repository. Any changes to the code 
  should be made in the repository, not directly in the Google Apps Script interface.
  
  GitHub Repository: https://github.com/marcobeles20/fsgc-leaves-tracker-and-inquiry
*/

function delete_leave_request_empty_rows() 
{
  const leave_request_spreadsheet = SpreadsheetApp.openById(leave_request_spreadsheet_id);
  const leave_request_sheet = leave_request_spreadsheet.getSheetByName(leave_request_sheet_name);

  const entries = leave_request_sheet.getRange(
    leave_request_start_row, 
    1,
    leave_request_sheet.getMaxRows() - leave_request_start_row + 1,
    leave_request_sheet.getMaxColumns()
  ).getValues();

  const empty_rows = [];

  for(const row in entries)
  {
    let empty = true;

    for(const column in entries[row])
    {
      if(!entries[row][column])
        continue;
      
      empty = false;
    }

    if(empty)
      empty_rows.push(Number(row) + leave_request_start_row);
  }

  for(let i = empty_rows.length - 1; i >= 0; i--)
    leave_request_sheet.deleteRow(empty_rows[i]);
}
