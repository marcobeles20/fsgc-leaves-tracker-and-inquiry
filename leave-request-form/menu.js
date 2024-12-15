/*
  WARNING: DO NOT MAKE CHANGES DIRECTLY IN THE GOOGLE APPS SCRIPT EDITOR.
  
  This project is managed through a GitHub repository. Any changes to the code 
  should be made in the repository, not directly in the Google Apps Script interface.
  
  GitHub Repository: https://github.com/marcobeles20/fsgc-leaves-tracker-and-inquiry
*/

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