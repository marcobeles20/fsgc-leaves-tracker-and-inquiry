/*
  WARNING: DO NOT MAKE CHANGES DIRECTLY IN THE GOOGLE APPS SCRIPT EDITOR.
  
  This project is managed through a GitHub repository. Any changes to the code 
  should be made in the repository, not directly in the Google Apps Script interface.
  
  GitHub Repository: https://github.com/marcobeles20/fsgc-leaves-tracker-and-inquiry
*/

function daily_actions() 
{
  format_leave_request_sheet();
  delete_leave_request_empty_rows();
}

function create_daily_actions_trigger() 
{
  delete_trigger(daily_actions_trigger);

  ScriptApp.newTrigger(daily_actions_trigger)
    .timeBased()
    .everyDays(1)
    .atHour(0)
    .create();
}