function onOpen() 
{
  const ui = SpreadsheetApp.getUi();
  
  ui.createMenu('Quick Actions')
    .addSubMenu(
      ui.createMenu('Leave Request Responses')
        .addItem('Format Sheet', 'format_leave_request_sheet')
        .addItem('Delete Empty Rows', 'delete_leave_request_empty_rows')
    )
    .addToUi();
}
