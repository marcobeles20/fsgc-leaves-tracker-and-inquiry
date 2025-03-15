/*
  WARNING: DO NOT MAKE CHANGES DIRECTLY IN THE GOOGLE APPS SCRIPT EDITOR.
  
  This project is managed through a GitHub repository. Any changes to the code 
  should be made in the repository, not directly in the Google Apps Script interface.
  
  GitHub Repository: https://github.com/marcobeles20/fsgc-leaves-tracker-and-inquiry
*/

const date_format = "dd-MMM-yyyy";

const leave_request_spreadsheet_id = '1DXAy_SUTnTX_No1R42MPIBiBtRKuK5D4lR0cXvFLZhM';
const leave_request_sheet_name = 'Form Responses 1';
const leave_request_start_row = 2;
const leave_request_start_formula_iteration_row = leave_request_start_row; // Set to leave_request_start_row for default operation but may exceed maximum execution time for large records

const leave_request_form_id = '1cc_Qqlje5hLwoi3SiyznN7VKG1cmQ37CtyXNxbSuj4w';

const leave_request_columns = {
  'timestamp':                          0,
  'email_address':                      1,
  'full_name':                          2,
  'entity':                             3,
  'start_leave_date':                   4,
  'end_leave_date':                     5,
  'leave_type':                         6,
  'leave_reason':                       7,
  'manager_approval_screenshot_link':   8,
  'ceo_approval_screenshot_link':       9,
  'certification_true':                 10,
  'employment_type_at_submission':      11,
  'confirmed_by_hr':                    12,
  'year':                               13,
  'semiannual_period':                  14,
  'work_days_affected':                 15
};

const leaves_tracker_spreadsheet_id = leave_request_spreadsheet_id;
const leaves_tracker_sheet_name = 'Leaves Tracker';
const leaves_tracker_start_row = 7;

const leaves_tracker_columns = {
  'id_number':                            0,
  'work_email':                           1,
  'full_name':                            2,
  'entity':                               3,
  'employment_type':                      4,
  'start_date':                           5,
  'employment_status':                    6,
  'used_vacation_leaves':                 7,
  'used_personal_leaves':                 8,
  'used_sick_leaves':                     9,
  'used_birthday_leaves':                 10,
  'used_wellness_leaves_h1':              11,
  'used_wellness_leaves_h2':              12,
  'used_bereavement_leaves':              13,
  'used_loyalty_leaves':                  14,
  'used_promotion_leaves':                15,
  'used_half-day_offset_leaves':          16,
  'used_full-day_offset_leaves':          17,
  'used_maternity_leaves':                18,
  'used_paternity_leaves':                19,
  'used_leave_with_pay_for_vawc':         20,
  'used_parental_leave_for_solo_parents': 21, 
  'used_special_leave_for_women':         22,
  'remaining_vacation_leaves':            23,
  'remaining_personal_leaves':            24,
  'remaining_sick_leaves':                25,
  'remaining_birthday_leaves':            26,
  'remaining_wellness_leaves_h1':         27,
  'remaining_wellness_leaves_h2':         28,
  'remaining_bereavement_leaves':         29,
  'remaining_loyalty_leaves':             30
};

const holidays_sheet_name_suffix = 'Holidays';
const holidays_start_row = 2;

const holidays_columns = {
  'name': 0,
  'date': 1
}

const daily_actions_trigger = 'daily_actions';
const leave_request_form_response_trigger = 'leave_request_form_response';