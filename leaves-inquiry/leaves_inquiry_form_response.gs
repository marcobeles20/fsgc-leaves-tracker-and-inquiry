function leaves_inquiry_form_response(e)
{
  const email = e.response.getRespondentEmail();

  send_leaves_data_email(
    (developer_mode == false) ? email : developer_work_email,
    extract_last_row_number(email) - leaves_inquiry_start_row + 1
  );
}

function extract_last_row_number(email)
{
  const leaves_inquiry_spreadsheet = SpreadsheetApp.openById(leaves_inquiry_spreadsheet_id);
  const leaves_inquiry_sheet = leaves_inquiry_spreadsheet.getSheetByName(leaves_inquiry_sheet_name);

  const entries = leaves_inquiry_sheet.getRange(
    leaves_inquiry_start_row,
    1,
    leaves_inquiry_sheet.getLastRow() - leaves_inquiry_start_row + 1,
    leaves_inquiry_sheet.getLastColumn()
  ).getValues();

  for(let i = entries.length - 1; i >= 0; i--)
  {
    if(entries[i][leaves_inquiry_columns['email_address']] != email)
      continue;

    return i + leaves_inquiry_start_row;
  }
}

function create_leaves_inquiry_form_response_trigger() 
{
  const trigger_name = "leaves_inquiry_form_response";

  delete_trigger(trigger_name);

  const leaves_inquiry_form = FormApp.getActiveForm();

  ScriptApp.newTrigger(trigger_name)
    .forForm(leaves_inquiry_form)
    .onFormSubmit()
    .create();
}

function delete_trigger(trigger_name)
{
  const triggers = ScriptApp.getProjectTriggers();

  for(const i in triggers)
  {
    if(triggers[i].getHandlerFunction() != trigger_name)
      continue;

    ScriptApp.deleteTrigger(triggers[i]);
  }
}
