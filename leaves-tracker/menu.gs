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
`<a href="CHANGEME" target="_blank">FSGC Leaves Tracker and Inquiry Documentation</a>
<br><br>
Marc Jefferson B. Obeles
<br>
<a href = "mailto: marcobeles20@gmail.com">marcobeles20@gmail.com</a>
`
    )
    .setWidth(400)
    .setHeight(100);

  ui.showModalDialog(html_output, 'Help');
}
