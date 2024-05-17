function column_number_to_letter(column_number)
{
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheets()[0];
  const range = sheet.getRange(
    1, 
    column_number,
  );

  return range.getA1Notation().slice(0, -1);
}