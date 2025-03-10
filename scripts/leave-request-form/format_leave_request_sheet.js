/*
  WARNING: DO NOT MAKE CHANGES DIRECTLY IN THE GOOGLE APPS SCRIPT EDITOR.
  
  This project is managed through a GitHub repository. Any changes to the code 
  should be made in the repository, not directly in the Google Apps Script interface.
  
  GitHub Repository: https://github.com/marcobeles20/fsgc-leaves-tracker-and-inquiry
*/

function format_leave_request_sheet(email = null) 
{
  const leave_request_spreadsheet = SpreadsheetApp.openById(leave_request_spreadsheet_id);
  const leave_request_sheet = leave_request_spreadsheet.getSheetByName(leave_request_sheet_name)
  
  const last_row = leave_request_sheet.getLastRow();
  const last_column = leave_request_sheet.getLastColumn();

  if(email != null)
  { 
    const row = extract_last_row_number(email);

    // Number Format - Start Leave Date
    leave_request_sheet.getRange(
      row,
      leave_request_columns['start_leave_date'] + 1
    ).setNumberFormat(date_format);

    // Number Format - End Leave Date
    leave_request_sheet.getRange(
      row,
      leave_request_columns['end_leave_date'] + 1
    ).setNumberFormat(date_format);
  
    // Clip Screenshot Link
    leave_request_sheet.getRange(
      row,
      leave_request_columns['manager_approval_screenshot_link'] + 1
    ).setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);

    // Formula - Year
    leave_request_sheet.getRange(
      row, 
      leave_request_columns['year'] + 1
    ).setFormula(year_formula(row));

    // Formula - Semiannual Period
    leave_request_sheet.getRange(
      row, 
      leave_request_columns['semiannual_period'] + 1
    ).setFormula(semiannual_period_formula(row));

    // Formula - Work Days Affected
    leave_request_sheet.getRange(
      row, 
      leave_request_columns['work_days_affected'] + 1
    ).setFormula(work_days_affected_formula(row));

    // Employment Type At Submission
    const leaves_tracker_spreadsheet = SpreadsheetApp.openById(leaves_tracker_spreadsheet_id);
    const leaves_tracker_sheet = leaves_tracker_spreadsheet.getSheetByName(leaves_tracker_sheet_name);

    const entries = leaves_tracker_sheet.getRange(
      leaves_tracker_start_row, 
      1, 
      leaves_tracker_sheet.getLastRow() - leaves_tracker_start_row + 1,
      leaves_tracker_sheet.getLastColumn()
    ).getValues();

    let employment_type = "ERROR";

    for(const i in entries)
    {
      if(entries[i][leaves_tracker_columns['work_email']] != email)
        continue;

      employment_type = entries[i][leaves_tracker_columns['employment_type']];
      break;
    }

    leave_request_sheet.getRange(
      row, 
      leave_request_columns['employment_type_at_submission'] + 1
    ).setValue(employment_type);
  }
  else
  {
    // Clip Screenshot Link
    leave_request_sheet.getRange(
      leave_request_start_row, 
      leave_request_columns['manager_approval_screenshot_link'] + 1,
      last_row - leave_request_start_row + 1,
      1
    ).setWrapStrategy(SpreadsheetApp.WrapStrategy.CLIP);

    // Number Format and Formula
    const start_leave_date_number_format = [];
    const end_leave_date_number_format = [];

    const year_formulas = [];
    const semiannual_period_formulas = [];
    const work_days_affected_formulas = [];

    for(let row = leave_request_start_formula_iteration_row; row <= last_row; row++)
    {
      start_leave_date_number_format.push([date_format]);
      end_leave_date_number_format.push([date_format]);

      year_formulas.push([year_formula(row)]);
      semiannual_period_formulas.push([semiannual_period_formula(row)]);
      work_days_affected_formulas.push([work_days_affected_formula(row)]);
    }

    // Number Format - Start Leave Date
    leave_request_sheet.getRange(
      leave_request_start_formula_iteration_row, 
      leave_request_columns['start_leave_date'] + 1,
      last_row - leave_request_start_formula_iteration_row + 1,
      1
    ).setNumberFormats(start_leave_date_number_format);

    // Number Format - End Leave Date
    leave_request_sheet.getRange(
      leave_request_start_formula_iteration_row, 
      leave_request_columns['end_leave_date'] + 1,
      last_row - leave_request_start_formula_iteration_row + 1,
      1
    ).setNumberFormats(end_leave_date_number_format);

    // Formula - Year
    leave_request_sheet.getRange(
      leave_request_start_formula_iteration_row, 
      leave_request_columns['year'] + 1,
      last_row - leave_request_start_formula_iteration_row + 1,
      1
    ).setFormulas(year_formulas);

    // Formula - Semiannual Period
    leave_request_sheet.getRange(
      leave_request_start_formula_iteration_row, 
      leave_request_columns['semiannual_period'] + 1,
      last_row - leave_request_start_formula_iteration_row + 1,
      1
    ).setFormulas(semiannual_period_formulas);

    // Formula - Work Days Affected
    leave_request_sheet.getRange(
      leave_request_start_formula_iteration_row, 
      leave_request_columns['work_days_affected'] + 1,
      last_row - leave_request_start_formula_iteration_row + 1,
      1
    ).setFormulas(work_days_affected_formulas);
  }

  // Conditional Formatting
  leave_request_sheet.clearConditionalFormatRules();

  const rule_range = leave_request_sheet.getRange(
    leave_request_start_row, 
    1,
    last_row - leave_request_start_row + 1,
    last_column
  );

  const rules = [];

  const red = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(
      `=AND($${column_number_to_letter(leave_request_columns['email_address'] + 1)}2 <> "", OR($${column_number_to_letter(leave_request_columns['employment_type_at_submission'] + 1)}2 = "", $${column_number_to_letter(leave_request_columns['employment_type_at_submission'] + 1)}2 = "ERROR", $${column_number_to_letter(leave_request_columns['year'] + 1)}2 = "", $${column_number_to_letter(leave_request_columns['year'] + 1)}2 = "ERROR", $${column_number_to_letter(leave_request_columns['semiannual_period'] + 1)}2 = "", $${column_number_to_letter(leave_request_columns['semiannual_period'] + 1)}2 = "ERROR", $${column_number_to_letter(leave_request_columns['work_days_affected'] + 1)}2 = "", $${column_number_to_letter(leave_request_columns['work_days_affected'] + 1)}2 = "ERROR"))`
    )
    .setBackground('#F4C7C3')
    .setRanges([rule_range])
    .build();
  
  rules.push(red);

  const yellow = SpreadsheetApp.newConditionalFormatRule()
    .whenFormulaSatisfied(
      `=AND($${column_number_to_letter(leave_request_columns['email_address'] + 1)}2 <> "", $${column_number_to_letter(leave_request_columns['confirmed_by_hr'] + 1)}2 = FALSE)`
    )
    .setBackground('#FCE8B2')
    .setRanges([rule_range])
    .build();
  
  rules.push(yellow);

  leave_request_sheet.setConditionalFormatRules(rules);

  // Filter View
  leave_request_sheet.getFilter().remove();
  leave_request_sheet.getRange(
    1,
    1,
    last_row,
    last_column
  ).createFilter();
}

function extract_last_row_number(email)
{
  const leave_request_spreadsheet = SpreadsheetApp.openById(leave_request_spreadsheet_id);
  const leave_request_sheet = leave_request_spreadsheet.getSheetByName(leave_request_sheet_name);

  const entries = leave_request_sheet.getRange(
    leave_request_start_row,
    1,
    leave_request_sheet.getLastRow() - leave_request_start_row + 1,
    leave_request_sheet.getLastColumn()
  ).getValues();

  for(let i = entries.length - 1; i >= 0; i--)
  {
    if(entries[i][leave_request_columns['email_address']] != email)
      continue;

    return i + leave_request_start_row;
  }
}

function year_formula(row)
{
  return `=IF(ISBLANK($${column_number_to_letter(leave_request_columns['email_address'] + 1)}${row}), "", IFERROR(IF(AND(YEAR($${column_number_to_letter(leave_request_columns['start_leave_date'] + 1)}${row}) = YEAR($${column_number_to_letter(leave_request_columns['end_leave_date'] + 1)}${row}), $${column_number_to_letter(leave_request_columns['start_leave_date'] + 1)}${row} <= $${column_number_to_letter(leave_request_columns['end_leave_date'] + 1)}${row}), YEAR($${column_number_to_letter(leave_request_columns['start_leave_date'] + 1)}${row}), "ERROR"), "ERROR"))`;
}

function semiannual_period_formula(row)
{
  return `=IF(ISBLANK($${column_number_to_letter(leave_request_columns['email_address'] + 1)}${row}), "", IFERROR(IFS(AND($${column_number_to_letter(leave_request_columns['year'] + 1)}${row} <> "ERROR", MONTH($${column_number_to_letter(leave_request_columns['start_leave_date'] + 1)}${row}) <= 6, MONTH($${column_number_to_letter(leave_request_columns['end_leave_date'] + 1)}${row}) <= 6), "H1", AND($${column_number_to_letter(leave_request_columns['year'] + 1)}${row} <> "ERROR", MONTH($${column_number_to_letter(leave_request_columns['start_leave_date'] + 1)}${row}) >= 7, MONTH($${column_number_to_letter(leave_request_columns['end_leave_date'] + 1)}${row}) >= 7), "H2"), "ERROR"))`;
}

function work_days_affected_formula(row)
{
  return `=IF(ISBLANK($${column_number_to_letter(leave_request_columns['email_address'] + 1)}${row}), "", IFERROR(IF($M${row} <> "ERROR", NETWORKDAYS($${column_number_to_letter(leave_request_columns['start_leave_date'] + 1)}${row}, $${column_number_to_letter(leave_request_columns['end_leave_date'] + 1)}${row}, INDIRECT("'"& $${column_number_to_letter(leave_request_columns['year'] + 1)}${row} &" ${holidays_sheet_name_suffix}'!$${column_number_to_letter(holidays_columns['date'] + 1)}$${holidays_start_row}:$${column_number_to_letter(holidays_columns['date'] + 1)}")), "ERROR"), "ERROR"))`;
}