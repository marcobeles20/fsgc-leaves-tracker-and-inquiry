/*
  WARNING: DO NOT MAKE CHANGES DIRECTLY IN THE GOOGLE APPS SCRIPT EDITOR.
  
  This project is managed through a GitHub repository. Any changes to the code 
  should be made in the repository, not directly in the Google Apps Script interface.
  
  GitHub Repository: https://github.com/marcobeles20/fsgc-leaves-tracker-and-inquiry
*/

function send_leaves_data_email(email, reference_number)
{
  const leaves_tracker_spreadsheet = SpreadsheetApp.openById(leaves_tracker_spreadsheet_id);
  const leaves_tracker_sheet = leaves_tracker_spreadsheet.getSheetByName(leaves_tracker_sheet_name);

  const reference_date = leaves_tracker_sheet.getRange(
    leaves_tracker_reference_date_cell
  ).getValue();
  const formatted_reference_date = Utilities.formatDate(reference_date, 'Asia/Manila', "MMMM d, yyyy"); 

  const leaves_data = extract_leaves_data(email, leaves_tracker_sheet);
  
  let subject = (developer_mode) ? `[DEVELOPER MODE] ` : ``;

  subject += `${leaves_inquiry_form_name}`;

  if(leaves_data != null)
  {
    subject += `: ${leaves_data[leaves_tracker_columns['full_name']]}`;
  }

  subject += ` (Ref# ${reference_number})`;

  let body = ``;

  body += `Hi`

  if(leaves_data != null)
  {
    body += ` ${leaves_data[leaves_tracker_columns['full_name']]}`
  }

  body += 
`,
<br><br>
You are receiving this email because you inquired about your leaves through the <a href="${leaves_inquiry_form_link}">${leaves_inquiry_form_name} Form</a>.
<br><br>`;

  if(leaves_data != null)
  {
    body += 
`Below, you will find the details of your used and remaining leaves for the year ${reference_date.getFullYear()}.
<br><br>
<table border="1">
  <tr>
    <th width="250">Leave Type</th>
    <th width="100">Used</th>
    <th width="100">Remaining</th>
  </tr>`;

    if(leaves_data[leaves_tracker_columns['employment_type']] == "Full-time" && leaves_data[leaves_tracker_columns['employment_status']] == "Regular")
    {
      body +=
`<tr>
  <td>Vacation Leave</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_vacation_leaves']]}</center></td>
  <td><center>${leaves_data[leaves_tracker_columns['remaining_vacation_leaves']]}</center></td>
</tr>`;
    }
    
    if(!(leaves_data[leaves_tracker_columns['employment_type']] == "Full-time" && leaves_data[leaves_tracker_columns['employment_status']] == "Regular") || leaves_data[leaves_tracker_columns['used_personal_leaves']] > 0)
    {
      body +=
`<tr>
  <td>Personal Leave</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_personal_leaves']]}</center></td>
  <td><center>${leaves_data[leaves_tracker_columns['remaining_personal_leaves']]}</center></td>
</tr>`;
    }

    if(leaves_data[leaves_tracker_columns['employment_type']] == "Full-time" && leaves_data[leaves_tracker_columns['employment_status']] == "Regular")
    {
      body += 
`<tr>
  <td>Sick Leave</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_sick_leaves']]}</center></td>
  <td><center>${leaves_data[leaves_tracker_columns['remaining_sick_leaves']]}</center></td>
</tr>`;
    }

    if(leaves_data[leaves_tracker_columns['employment_type']] == "Full-time")
    {
      body +=
`<tr>
  <td>Birthday Leave</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_birthday_leaves']]}</center></td>
  <td><center>${leaves_data[leaves_tracker_columns['remaining_birthday_leaves']]}</center></td>
</tr>`;
    }

    if(leaves_data[leaves_tracker_columns['employment_type']] == "Full-time" && leaves_data[leaves_tracker_columns['employment_status']] == "Regular")
    {
      body += 
`<tr>
  <td>Wellness Leave H1</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_wellness_leaves_h1']]}</center></td>
  <td><center>${leaves_data[leaves_tracker_columns['remaining_wellness_leaves_h1']]}</center></td>
</tr>
<tr>
  <td>Wellness Leave H2</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_wellness_leaves_h2']]}</center></td>
  <td><center>${leaves_data[leaves_tracker_columns['remaining_wellness_leaves_h2']]}</center></td>
</tr>`;
    }

    if(leaves_data[leaves_tracker_columns['used_bereavement_leaves']] > 0)
    {
      body +=
`<tr>
  <td>Bereavement Leave</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_bereavement_leaves']]}</center></td>
  <td><center>${leaves_data[leaves_tracker_columns['remaining_bereavement_leaves']]}</center></td>
</tr>`;
    }

    if(leaves_data[leaves_tracker_columns['used_loyalty_leaves']] > 0 || leaves_data[leaves_tracker_columns['remaining_loyalty_leaves']] > 0)
    {
      body +=
`<tr>
  <td>Loyalty Leave</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_loyalty_leaves']]}</center></td>
  <td><center>${leaves_data[leaves_tracker_columns['remaining_loyalty_leaves']]}</center></td>
</tr>`;
    }

    if(leaves_data[leaves_tracker_columns['used_promotion_leaves']] > 0)
    {
      body += 
` <tr>
  <td>Promotion Leave</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_promotion_leaves']]}</center></td>
  <td><center>N/A</center></td>
</tr>`;
    }

    if(leaves_data[leaves_tracker_columns['used_half-day_offset_leaves']] > 0)
    {
      body += 
`<tr>
  <td>Half-day Offset</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_half-day_offset_leaves']]}</center></td>
  <td><center>N/A</center></td>
</tr>`;
    }

    if(leaves_data[leaves_tracker_columns['used_full-day_offset_leaves']] > 0)
    {
      body += 
`<tr>
  <td>Full-day Offset</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_full-day_offset_leaves']]}</center></td>
  <td><center>N/A</center></td>
</tr>`;
    }

    if(leaves_data[leaves_tracker_columns['used_maternity_leaves']] > 0)
    {
      body +=
`<tr>
  <td>Maternity Leave</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_maternity_leaves']]}</center></td>
  <td><center>N/A</center></td>
</tr>`;
    }

    if(leaves_data[leaves_tracker_columns['used_paternity_leaves']] > 0)
    {
      body +=
`<tr>
  <td>Paternity Leave</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_paternity_leaves']]}</center></td>
  <td><center>N/A</center></td>
</tr>`;
    }

    if(leaves_data[leaves_tracker_columns['used_leave_with_pay_for_vawc']] > 0)
    {
      body +=
`<tr>
  <td>Leave with pay for Victims of Violence Against Women and their Children (VAWC)</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_leave_with_pay_for_vawc']]}</center></td>
  <td><center>N/A</center></td>
</tr>`;
    }

    if(leaves_data[leaves_tracker_columns['used_parental_leave_for_solo_parents']] > 0)
    {
      body +=
`<tr>
  <td>Parental Leave for Solo Parents</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_parental_leave_for_solo_parents']]}</center></td>
  <td><center>N/A</center></td>
</tr>`;
    }

    if(leaves_data[leaves_tracker_columns['used_special_leave_for_women']] > 0)
    {
      body +=
`<tr>
  <td>Special Leave for Women</td>
  <td><center>${leaves_data[leaves_tracker_columns['used_special_leave_for_women']]}</center></td>
  <td><center>N/A</center></td>
</tr>`;
    }

    body += 
`</table>
<br>
Please note that the above information is current for <b>HR-confirmed</b> leaves as of <b>${formatted_reference_date}</b>.`;
  }
  else
  {
    body += `Unfortunately, an error occurred while retrieving your used and remaining leaves for the year ${reference_date.getFullYear()}.`
  }

  body += 
`<br><br>
If you have any questions or concerns regarding your leaves or any other leave-related matters, please reach out to ${hr_contact_name} through ${hr_contact_medium}.
<br><br>
This is an auto-generated message. Please do not reply.`

 MailApp.sendEmail({
    to:       (developer_mode == false) ? email : developer_email,
    subject:  subject,
    htmlBody: body,
    name:     email_sender_name
  });
}

function extract_leaves_data(email, leaves_tracker_sheet) 
{
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
