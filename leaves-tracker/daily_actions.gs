function daily_actions() 
{
  import_leaves_tracker_employees();
  format_leave_request_sheet();
  delete_leave_request_empty_rows();
}

function create_daily_actions_trigger() 
{
  const trigger_name = "daily_actions";

  delete_trigger(trigger_name);

  ScriptApp.newTrigger(trigger_name)
    .timeBased()
    .everyDays(1)
    .atHour(0)
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
