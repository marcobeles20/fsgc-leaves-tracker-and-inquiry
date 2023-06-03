function onOpen() 
{
  const ui = SpreadsheetApp.getUi();
  
  ui.createMenu('Apps Script')
    .addItem('Help', 'help')
    .addSeparator()
    .addSubMenu(
      ui.createMenu('Leave Request')
        .addItem('Format Sheet', 'format_leave_request_sheet')
        .addItem('Delete Empty Rows', 'delete_leave_request_empty_rows')
    )
    .addSubMenu(
      ui.createMenu('Leaves Tracker')
        .addItem('Import Employees', 'import_leaves_tracker_employees')
    )
    .addToUi();
}

function help()
{
  const ui = SpreadsheetApp.getUi();

  const html_output = HtmlService
    .createHtmlOutput(
`<a href="${documentation_link}" target="_blank">${documentation_name}</a>
<br><br>
${developer_name}
<br>
<a href = "mailto: ${developer_email}">${developer_email}</a>`
    )
    .setWidth(400)
    .setHeight(100);

  ui.showModalDialog(html_output, 'Help');
}