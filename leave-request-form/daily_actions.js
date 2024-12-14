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