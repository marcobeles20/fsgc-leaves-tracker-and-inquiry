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