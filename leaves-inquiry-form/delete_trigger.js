/*
  WARNING: DO NOT MAKE CHANGES DIRECTLY IN THE GOOGLE APPS SCRIPT EDITOR.
  
  This project is managed through a GitHub repository. Any changes to the code 
  should be made in the repository, not directly in the Google Apps Script interface.
  
  GitHub Repository: https://github.com/marcobeles20/fsgc-leaves-tracker-and-inquiry
*/

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