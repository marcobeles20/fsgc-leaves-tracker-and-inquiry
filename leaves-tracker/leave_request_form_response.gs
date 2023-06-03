function leave_request_form_response(e)
{
  const email = e.response.getRespondentEmail();

  import_leaves_tracker_employees();

  format_leave_request_sheet(email);
}

function extract_last_row_number(email)
{
  const leave_request_spreadsheet = SpreadsheetApp.openById(leave_request_spreadsheet_id);
  const leave_request_sheet = leave_request_spreadsheet.getSheetByName(leave_request_sheet_name);

  const entries = leave_request_sheet.getRange(
    leave_request_start_row,
    1,
    leave_request_sheet.getLastRow() - leave_request_start_row + 1,
    leave_request_sheet.getLastColumn()
  ).getValues();

  for(let i = entries.length - 1; i >= 0; i--)
  {
    if(entries[i][leave_request_columns['email_address']] != email)
      continue;

    return i + leave_request_start_row;
  }
}

function create_leave_request_form_response_trigger() 
{
  delete_trigger(leave_request_form_response_trigger);

  const leave_request_form = FormApp.openById(leave_request_form_id);

  ScriptApp.newTrigger(leave_request_form_response_trigger)
    .forForm(leave_request_form)
    .onFormSubmit()
    .create();
}