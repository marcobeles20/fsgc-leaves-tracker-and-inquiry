/*
  WARNING: DO NOT MAKE CHANGES DIRECTLY IN THE GOOGLE APPS SCRIPT EDITOR.
  
  This project is managed through a GitHub repository. Any changes to the code 
  should be made in the repository, not directly in the Google Apps Script interface.
  
  GitHub Repository: https://github.com/marcobeles20/fsgc-leaves-tracker-and-inquiry
*/

function leave_request_form_response(e)
{
  const email = e.response.getRespondentEmail();

  format_leave_request_sheet(email);
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