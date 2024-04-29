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
