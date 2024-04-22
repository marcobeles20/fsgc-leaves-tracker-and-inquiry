function leave_request_form_response(e)
{
  const email = e.response.getRespondentEmail();

  import_leaves_tracker_employees();

  format_leave_request_sheet(email);

  delete_leave_request_empty_rows();
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
