function send_leaves_data_email(email, reference_number)
{
  const date = new Date;
  const full_date = Utilities.formatDate(date, 'Asia/Manila', "MMM d, yyyy h:mm a");

  const leaves_data = extract_leaves_data(email);
  
  let subject = ``;

  subject += `${leaves_inquiry_form_name}`;

  if(leaves_data != null)
  {
    subject += `: ${leaves_data[leaves_tracker_columns['first_name']]} ${leaves_data[leaves_tracker_columns['last_name']]}`;
  }

  subject += ` (Ref# ${reference_number})`;

  let body = ``;

  body += `Hi`

  if(leaves_data != null)
  {
    body += ` ${leaves_data[leaves_tracker_columns['first_name']]}`
  }

  body += 
`,
<br><br>
You are receiving this email because you inquired about your leaves through the <a href="${leaves_inquiry_form_link}">${leaves_inquiry_form_name} Form</a>.
<br><br>`;

  if(leaves_data != null)
  {
    body += 
`Below, you will find the details of your used and remaining leaves for the current year.
<br><br>
<table border="1">
  <tr>
    <th width="150">Leave Type</th>
    <th width="100">Used</th>
    <th width="100">Remaining</th>
  </tr>
  <tr>
    <td>Vacation Leave</td>
    <td><center>${leaves_data[leaves_tracker_columns['used_vacation_leaves']]}</center></td>
    <td><center>${leaves_data[leaves_tracker_columns['remaining_vacation_leaves']]}</center></td>
  </tr>
  <tr>
    <td>Sick Leave</td>
    <td><center>${leaves_data[leaves_tracker_columns['used_sick_leaves']]}</center></td>
    <td><center>${leaves_data[leaves_tracker_columns['remaining_sick_leaves']]}</center></td>
  </tr>
  <tr>
    <td>Mental Health Leave</td>
    <td><center>${leaves_data[leaves_tracker_columns['used_mental_health_leaves']]}</center></td>
    <td><center>${leaves_data[leaves_tracker_columns['remaining_mental_health_leaves']]}</center></td>
  </tr>
  <tr>
    <td>Birthday Leave</td>
    <td><center>${leaves_data[leaves_tracker_columns['used_birthday_leaves']]}</center></td>
    <td><center>${leaves_data[leaves_tracker_columns['remaining_birthday_leaves']]}</center></td>
  </tr>`;

    if(leaves_data[leaves_tracker_columns['used_offset_leaves']] > 0)
    {
      body += 
` <tr>
    <td>Offset</td>
    <td><center>${leaves_data[leaves_tracker_columns['used_offset_leaves']]}</center></td>
    <td><center>N/A</center></td>
  </tr>`;
    }

    if(leaves_data[leaves_tracker_columns['used_maternity_leaves']] > 0)
    {
      body +=
` <tr>
    <td>Maternity Leave</td>
    <td><center>${leaves_data[leaves_tracker_columns['used_maternity_leaves']]}</center></td>
    <td><center>N/A</center></td>
  </tr>`;
    }

    if(leaves_data[leaves_tracker_columns['used_paternity_leaves']] > 0)
    {
      body +=
` <tr>
    <td>Paternity Leave</td>
    <td><center>${leaves_data[leaves_tracker_columns['used_paternity_leaves']]}</center></td>
    <td><center>N/A</center></td>
  </tr>`;
    }

    body += 
` <tr>
    <th><center>Total</center></th>
    <td><center>${leaves_data[leaves_tracker_columns['total_used_leaves']]}</center></td>
    <td><center>${leaves_data[leaves_tracker_columns['total_remaining_leaves']]}</center></td>
  </tr>
</table>
<br>
Please note that the above information is current for <b>confirmed</b> leaves as of <b>${full_date} PHT</b>.`;
  }
  else
  {
    body += `Unfortunately, an error occurred while retrieving your used and remaining leaves for the current year.`
  }

  body += 
`<br><br>
If you have any questions or concerns regarding your leaves or any other leave-related matters, please reach out to ${contact_name} through ${contact_medium}.
<br><br>
This is an auto-generated message. Please do not reply.`

 MailApp.sendEmail({
    to:       (developer_mode == false) ? email : developer_email,
    subject:  subject,
    htmlBody: body,
    name:     email_sender_name
  });
}

function extract_leaves_data(email) 
{
  const leaves_tracker_spreadsheet = SpreadsheetApp.openById(leaves_tracker_spreadsheet_id);
  const leaves_tracker_sheet = leaves_tracker_spreadsheet.getSheetByName(leaves_tracker_sheet_name);

  const entries = leaves_tracker_sheet.getRange(
    leaves_tracker_start_row, 
    1, 
    leaves_tracker_sheet.getLastRow() - leaves_tracker_start_row + 1,
    leaves_tracker_sheet.getLastColumn()
  ).getValues();

  for(const i in entries)
  {
    if(entries[i][leaves_tracker_columns['work_email']] != email)
      continue;
    
    return entries[i];
  }
}